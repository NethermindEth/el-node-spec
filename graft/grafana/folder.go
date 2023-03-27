package grafana

import (
	"strings"

	"graft/models"
)

type FolderAPI interface {
	FolderByUID(uid string) (*models.Folder, error)
	CreateFolder(folder models.Folder) error
	UpdateFolder(folder models.Folder) error
	DeleteFolder(folder models.Folder) error
}

func (c *gClient) FolderByUID(uid string) (*models.Folder, error) {
	apiClient, err := c.apiClient()
	if err != nil {
		return nil, err
	}
	apiFolder, err := apiClient.FolderByUID(uid)
	if err != nil {
		if strings.Contains(err.Error(), "404") && strings.Contains(err.Error(), "folder not found") {
			return nil, ErrFolderNotFound
		}
		return nil, err
	}
	return &models.Folder{
		UID:   apiFolder.UID,
		ID:    apiFolder.ID,
		Title: apiFolder.Title,
	}, nil
}

func (c *gClient) CreateFolder(folder models.Folder) error {
	apiClient, err := c.apiClient()
	if err != nil {
		return err
	}
	_, err = apiClient.NewFolder(folder.Title, folder.UID)
	return err
}

func (c *gClient) UpdateFolder(folder models.Folder) error {
	apiClient, err := c.apiClient()
	if err != nil {
		return err
	}
	return apiClient.UpdateFolder(folder.UID, folder.Title)
}

func (c *gClient) DeleteFolder(folder models.Folder) error {
	apiClient, err := c.apiClient()
	if err != nil {
		return err
	}
	return apiClient.DeleteFolder(folder.UID)
}
