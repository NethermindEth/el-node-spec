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

func DashboardCommand(gClient grafana.Client) *cobra.Command {
	cmd := &cobra.Command{
		Use:   "dashboard",
		Short: "Manage dashboards",
		Long:  "Manage dashboards in Grafana. You can create new dashboards, or backup existing ones.",
	}
	cmd.AddCommand(backupDashboardsCommand(gClient))
	cmd.AddCommand(initDashboardCommand(gClient))
	return cmd
}

func initDashboardCommand(gClient grafana.Client) *cobra.Command {
	var title string
	cmd := &cobra.Command{
		Use:   "create [title]",
		Short: "Initialize an empty dashboard",
		Long:  "Initialize an empty dashboard in the specified folder.",
		Args:  cobra.ExactArgs(1),
		PreRun: func(cmd *cobra.Command, args []string) {
			title = args[0]
		},
		RunE: func(cmd *cobra.Command, args []string) error {
			return gClient.AddDashboard(title, models.Dashboard{
				FolderUID: config.FolderUID,
				Model:     make(map[string]interface{}),
			})
		},
	}
	return cmd
}

func backupDashboardsCommand(gClient grafana.Client) *cobra.Command {
	var dest string
	cmd := &cobra.Command{
		Use:   "backup",
		Short: "Backup dashboards from a Grafana folder to a local folder",
		RunE: func(cmd *cobra.Command, args []string) error {
			dashboards, err := gClient.Dashboards()
			if err != nil {
				return err
			}
			for _, dashboard := range dashboards {
				if dashboard.FolderUID != config.FolderUID {
					continue
				}
				dashboardJSON, err := json.MarshalIndent(dashboard, "", "\t")
				if err != nil {
					return err
				}
				if err := os.MkdirAll(dest, 0o755); err != nil {
					return err
				}
				if err := os.WriteFile(filepath.Join(dest, dashboard.Title+".json"), dashboardJSON, 0o644); err != nil {
					return err
				}
			}
			return nil
		},
	}
	cmd.Flags().StringVarP(&dest, "dest", "d", "dashboards", "Destination folder path")
	return cmd
}
