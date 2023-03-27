package grafana

import (
	"graft/models"

	gapi "github.com/grafana/grafana-api-golang-client"
)

type PanelAPI interface {
	AddPanel(libraryPanel models.LibraryPanel) error
	LibraryPanels() ([]models.LibraryPanel, error)
}

func (c *gClient) AddPanel(libraryPanel models.LibraryPanel) error {
	apiClient, err := c.apiClient()
	if err != nil {
		return err
	}
	folder, err := apiClient.FolderByUID(libraryPanel.FolderUID)
	if err != nil {
		return err
	}
	_, err = apiClient.NewLibraryPanel(gapi.LibraryPanel{
		Folder: folder.ID,
		Kind:   1,
		Model:  libraryPanel.Model,
		Name:   libraryPanel.Name,
		UID:    libraryPanel.UID,
	})
	return err
}

func (c *gClient) LibraryPanels() ([]models.LibraryPanel, error) {
	apiClient, err := c.apiClient()
	if err != nil {
		return nil, err
	}
	apiPanels, err := apiClient.LibraryPanels()
	if err != nil {
		return nil, err
	}
	var panels []models.LibraryPanel
	folderUIDCache := make(map[int64]string)
	for _, apiPanel := range apiPanels {
		folderUID, ok := folderUIDCache[apiPanel.Folder]
		if !ok {
			folder, err := apiClient.Folder(apiPanel.Folder)
			if err != nil {
				return nil, err
			}
			folderUID = folder.UID
		}
		panels = append(panels, models.LibraryPanel{
			Name:      apiPanel.Name,
			Model:     apiPanel.Model,
			FolderUID: folderUID,
			UID:       apiPanel.UID,
		})
	}
	return panels, nil
}
