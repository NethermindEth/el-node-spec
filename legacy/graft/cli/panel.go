package cli

import (
	"encoding/json"
	"os"
	"path/filepath"

	"graft/config"
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
		uid  string
		name string
	)
	cmd := &cobra.Command{
		Use:   "init",
		Short: "Initialize new panel.",
		RunE: func(cmd *cobra.Command, args []string) error {
			return gClient.AddPanel(models.LibraryPanel{
				Name:      name,
				FolderUID: config.FolderUID,
				UID:       uid,
				Model:     make(map[string]interface{}),
			})
		},
	}
	cmd.Flags().StringVar(&uid, "uid", "", "Panel UID")
	cmd.Flags().StringVar(&name, "name", "New Panel", "Panel name")
	return cmd
}

func backupPanelsCommand(gClient grafana.Client) *cobra.Command {
	var dest string
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
				if panel.FolderUID == config.FolderUID {
					panelJSON, err := json.MarshalIndent(panel, "", "\t")
					if err != nil {
						return err
					}
					if err := os.MkdirAll(dest, 0o755); err != nil {
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
	cmd.Flags().StringVarP(&dest, "dest", "d", "panels", "Destination path")
	return cmd
}
