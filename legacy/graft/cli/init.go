package cli

import (
	"errors"
	"graft/config"
	"graft/grafana"
	"graft/models"

	"github.com/spf13/cobra"
)

func InitCommand(gClient grafana.Client) *cobra.Command {
	cmd := &cobra.Command{
		Use:   "init",
		Short: "Initialize configuration",
		Long:  "Initialize configuration file with empty data sources list and create the EigenLayer folder in Grafana.",
		RunE: func(cmd *cobra.Command, args []string) error {
			// Create folder
			_, err := gClient.FolderByUID(config.FolderUID)
			if err != nil {
				if errors.Is(err, grafana.ErrFolderNotFound) {
					if err := gClient.CreateFolder(models.Folder{
						Title: config.FolderTitle,
						UID:   config.FolderUID,
					}); err != nil {
						return err
					}
				} else {
					return err
				}
			}
			// Create config file if it doesn't exist
			return config.InitConfigFile()
		},
	}
	return cmd
}
