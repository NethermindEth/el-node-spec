package config

import (
	"fmt"
	"log"

	"graft/grafana"
	"graft/models"
)

type createFolder struct {
	folder models.Folder
}

func NewCreateFolder(folder models.Folder) ConfigAction {
	return createFolder{folder: folder}
}

func (a createFolder) Apply(gClient grafana.Client) error {
	log.Println("Creating folder", a.folder.Title, a.folder.UID)
	return gClient.CreateFolder(a.folder)
}

func (a createFolder) String() string {
	return fmt.Sprintf("+ FOLDER %s (%s)", a.folder.Title, a.folder.UID)
}

func (a createFolder) Long() string {
	return fmt.Sprintf("+ FOLDER %s (%s)", a.folder.Title, a.folder.UID)
}

type updateFolder struct {
	currentFolder models.Folder
	newFolder     models.Folder
}

func NewUpdateFolder(currentFolder models.Folder, newFolder models.Folder) ConfigAction {
	return updateFolder{currentFolder: currentFolder, newFolder: newFolder}
}

func (a updateFolder) Apply(gClient grafana.Client) error {
	log.Println("Updating folder", a.currentFolder.UID)
	return gClient.UpdateFolder(a.newFolder)
}

func (a updateFolder) String() string {
	return fmt.Sprintf("~ FOLDER %s (%s)", a.currentFolder.Title, a.currentFolder.UID)
}

func (a updateFolder) Long() string {
	message := a.String()
	if a.currentFolder.Title != a.newFolder.Title {
		message += fmt.Sprintf("\n  ~ Title: %s -> %s", a.currentFolder.Title, a.newFolder.Title)
	}
	return message
}

type deleteFolder struct {
	folder models.Folder
}

func NewDeleteFolder(folder models.Folder) ConfigAction {
	return deleteFolder{folder: folder}
}

func (a deleteFolder) Apply(gClient grafana.Client) error {
	log.Println("Deleting folder", a.folder.UID)
	return gClient.DeleteFolder(a.folder)
}

func (a deleteFolder) String() string {
	return fmt.Sprintf("- FOLDER %s (%s)", a.folder.Title, a.folder.UID)
}

func (a deleteFolder) Long() string {
	return a.String()
}
