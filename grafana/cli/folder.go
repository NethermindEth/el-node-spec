package cli

import (
	"tool/grafana"
	"tool/models"

	"github.com/spf13/cobra"
)

func FolderCommand(gClient grafana.Client) *cobra.Command {
	folderCmd := &cobra.Command{
		Use:   "folder",
		Short: "Manage folders",
		Long:  "Create and delete Grafana folders. All the changes are reflected in the state file.",
	}
	folderCmd.AddCommand(createFolder(gClient))
	folderCmd.AddCommand(deleteFolderCommand(gClient))
	return folderCmd
}

func createFolder(gClient grafana.Client) *cobra.Command {
	var folder models.Folder
	cmd := &cobra.Command{
		Use:   "create [folder-uid]",
		Short: "Create a new folder",
		Long:  "Create a new folder in Grafana and add it to the state file. The folder-uid is a required argument.",
		Args:  cobra.ExactArgs(1),
		PreRun: func(cmd *cobra.Command, args []string) {
			folder.UID = args[0]
		},
		RunE: func(cmd *cobra.Command, args []string) error {
			// Create folder in Grafana
			if err := gClient.CreateFolder(folder); err != nil {
				return err
			}
			// Update state file
			return currentState.AddFolder(folder)
		},
	}
	cmd.Flags().StringVarP(&folder.Title, "title", "t", "New folder", "Folder title")
	return cmd
}

func deleteFolderCommand(gClient grafana.Client) *cobra.Command {
	var folder models.Folder
	return &cobra.Command{
		Use:   "delete [folder-uid]",
		Short: "Delete a folder",
		Long:  "Delete a folder from Grafana and remove it from the state file. The folder-uid is a required argument.",
		Args:  cobra.ExactArgs(1),
		PreRun: func(cmd *cobra.Command, args []string) {
			folder.UID = args[0]
		},
		RunE: func(cmd *cobra.Command, args []string) error {
			if err := gClient.DeleteFolder(folder); err != nil {
				return err
			}
			return currentState.DeleteFolder(folder.UID)
		},
	}
}
