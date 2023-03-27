package cli

import (
	"encoding/json"
	"os"
	"path/filepath"

	"graft/grafana"
	"graft/models"

	"github.com/spf13/cobra"
)

func PanelCommand(gClient grafana.Client) *cobra.Command {
	cmd := &cobra.Command{
		Use:   "panel",
		Short: "Manage panels",
		Long:  "Initialize and backup Grafana panels in a folder.",
	}
	cmd.AddCommand(initPanelCommand(gClient))
	cmd.AddCommand(backupPanelsCommand(gClient))
	return cmd
}

func initPanelCommand(gClient grafana.Client) *cobra.Command {
	var (
		uid       string
		folderUID string
		name      string
	)
	cmd := &cobra.Command{
		Use:   "init",
		Short: "Initialize new panel.",
		PreRunE: func(cmd *cobra.Command, args []string) error {
			if folderUID == "" {
				if len(currentState.Folders) == 0 {
					return ErrNoFolders
				}
				folderUID = currentState.Folders[0].UID
			}
			return nil
		},
		RunE: func(cmd *cobra.Command, args []string) error {
			return gClient.AddPanel(models.LibraryPanel{
				Name:      name,
				FolderUID: folderUID,
				UID:       uid,
				Model:     make(map[string]interface{}),
			})
		},
	}
	cmd.Flags().StringVar(&uid, "uid", "", "Panel UID")
	cmd.Flags().StringVarP(&folderUID, "folder", "f", "", "Grafana folder UID. If not specified, first folder in the state folders list will be used, but if the state folders list is empty, an error will be returned.")
	cmd.Flags().StringVar(&name, "name", "New Panel", "Panel name")
	return cmd
}

func backupPanelsCommand(gClient grafana.Client) *cobra.Command {
	var (
		folderUID string
		dest      string
	)
	cmd := &cobra.Command{
		Use:   "backup",
		Short: "Backup panels from Grafana folder",
		RunE: func(cmd *cobra.Command, args []string) error {
			// Get library panels
			panels, err := gClient.LibraryPanels()
			if err != nil {
				return err
			}
			for _, panel := range panels {
				if panel.FolderUID == folderUID {
					panelJSON, err := json.MarshalIndent(panel, "", "\t")
					if err != nil {
						return err
					}
					if err := os.WriteFile(filepath.Join(dest, panel.UID+".json"), panelJSON, 0o644); err != nil {
						return err
					}
				}
			}
			return nil
		},
	}
	cmd.Flags().StringVarP(&folderUID, "folder", "f", "", "Grafana folder UID. If not specified, first folder in the state folders list will be used, but if the state folders list is empty, an error will be returned.")
	cmd.Flags().StringVarP(&dest, "dest", "d", "panels", "Destination path")
	return cmd
}
