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
	folder, err := c.FolderByUID(libraryPanel.FolderUID)
	if err != nil {
		return err
	}
	_, err = apiClient.NewLibraryPanel(gapi.LibraryPanel{
		Folder: folder.ID,
		Kind:   1, // Use 1 for library panels or 2 for library variables. https://grafana.com/docs/grafana/latest/developers/http_api/library_element/#get-all-library-elements
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
			folderUIDCache[apiPanel.Folder] = folderUID
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
