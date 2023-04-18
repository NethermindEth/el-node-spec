package cli

import (
	"graft/config"
	"graft/grafana"
	"graft/models"

	"github.com/spf13/cobra"
)

func InitCommand(gClient grafana.Client) *cobra.Command {
	cmd := &cobra.Command{
		Use:   "init",
		Short: "Initialize configuration",
		Long:  "Initialize configuration file with empty data sources list and create the Eigen Layer folder in Grafana.",
		RunE: func(cmd *cobra.Command, args []string) error {
			// Create folder
			newFolder := models.Folder{
				Title: config.FolderTitle,
				UID:   config.FolderUID,
			}
			currentFolder, err := gClient.FolderByUID(config.FolderUID)
			if err != nil {
				return err
			}
			if !currentFolder.Equal(newFolder) {
				if err := gClient.CreateFolder(models.Folder{
					Title: config.FolderTitle,
					UID:   config.FolderUID,
				}); err != nil {
					return err
				}
			}
			// Create config file if it doesn't exist
			return config.InitConfigFile()
		},
	}
	return cmd
}
