package cli

import (
	"encoding/json"
	"os"
	"path/filepath"

	"graft/grafana"
	"graft/models"

	"github.com/spf13/cobra"
)

func DashboardCommand(gCleint grafana.Client) *cobra.Command {
	cmd := &cobra.Command{
		Use:   "dashboard",
		Short: "Manage dashboards",
		Long:  "Manage dashboards in Grafana. You can create new dashboards, or backup existing ones.",
	}
	cmd.AddCommand(backupDashboardsCommand(gCleint))
	cmd.AddCommand(initDashboardCommand(gCleint))
	return cmd
}

func initDashboardCommand(gClient grafana.Client) *cobra.Command {
	var (
		folderUID string
		title     string
	)
	cmd := &cobra.Command{
		Use:   "init",
		Short: "Initialize an empty dashboard",
		Long:  "Initialize an empty dashboard in the specified folder.",
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
			return gClient.AddDashboard(title, models.Dashboard{
				FolderUID: folderUID,
				Model:     make(map[string]interface{}),
			})
		},
	}
	cmd.Flags().StringVarP(&folderUID, "folder", "f", "", "Grafana folder UID. If not specified, first folder in the state folders list will be used, but if the state folders list is empty, an error will be returned.")
	cmd.Flags().StringVar(&title, "title", "New Dashboard", "Dashboard title")
	return cmd
}

func backupDashboardsCommand(gClient grafana.Client) *cobra.Command {
	var (
		folderUID string
		dest      string
	)
	cmd := &cobra.Command{
		Use:   "backup",
		Short: "Backup dashboards from a Grafana folder to a local folder",
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
			dashboards, err := gClient.Dashboards()
			if err != nil {
				return err
			}
			for _, dashboard := range dashboards {
				if dashboard.FolderUID != folderUID {
					continue
				}
				dashboardJSON, err := json.MarshalIndent(dashboard, "", "\t")
				if err != nil {
					return err
				}
				if err := os.WriteFile(filepath.Join(dest, dashboard.Title+".json"), dashboardJSON, 0o644); err != nil {
					return err
				}
			}
			return nil
		},
	}
	cmd.Flags().StringVarP(&folderUID, "folder", "f", "", "Grafana folder UID. If not specified, first folder in the state folders list will be used, but if the state folders list is empty, an error will be returned.")
	cmd.Flags().StringVarP(&dest, "dest", "d", "dashboards", "Destination folder path")
	return cmd
}
