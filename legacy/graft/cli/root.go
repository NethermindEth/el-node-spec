package cli

import (
	"graft/config"
	"log"

	"github.com/spf13/cobra"
)

func RootCommand() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "graft [command]",
		Short: "graft is a CLI tool to manage Grafana dashboards and panels.",
		Long:  "Manage Grafana dashboards and panels using the Grafana Library Panels feature. Create folders and datasources, and start to create your panels and dashboards. When you are ready to share your panels, you can export then using the 'panel backup' and 'dashboard backup' commands.",
		PersistentPreRunE: func(cmd *cobra.Command, args []string) error {
			s, err := config.NewConfig(configPath)
			if err != nil {
				log.Println(err.Error())
				return nil
			}
			currentConfig = *s
			// Validate config
			return currentConfig.Validate()
		},
	}
	cmd.PersistentFlags().StringVarP(&configPath, "config", "c", config.DefaultPath, "Path to configuration file")
	return cmd
}
