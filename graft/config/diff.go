package config

import (
	"errors"

	"graft/grafana"
	"graft/models"
)

// ConfigAction is an action that can be applied to a Grafana instance to
// bring it to a desired configuration.
type ConfigAction interface {
	Apply(grafana.Client) error
	String() string
	Long() string
}

// Diff return a list of actions that need to be applied to a Grafana instance
// to bring it to the desired configuration.
func Diff(gClient grafana.Client, conf Config) ([]ConfigAction, error) {
	var actions []ConfigAction
	// Folder
	folder := models.Folder{
		UID:   FolderUID,
		Title: FolderTitle,
	}
	currentFolder, err := gClient.FolderByUID(FolderUID)
	if err != nil {
		if errors.Is(err, grafana.ErrFolderNotFound) {
			actions = append(actions, NewCreateFolder(folder))
		} else {
			return nil, err
		}
	}
	if !currentFolder.Equal(folder) {
		actions = append(actions, NewUpdateFolder(*currentFolder, folder))
	}
	// Data sources
	dataSourcesActions, err := diffDataSources(gClient, conf)
	if err != nil {
		return nil, err
	}
	actions = append(actions, dataSourcesActions...)
	return actions, nil
}

// diffDataSources returns a list of actions that need to be applied to a Grafana
// instance to bring it to the desired data sources configuration.
func diffDataSources(gClient grafana.Client, conf Config) ([]ConfigAction, error) {
	var actions []ConfigAction
	for _, newDataSource := range conf.DataSources {
		_, err := gClient.DataSourceByUID(newDataSource.UID)
		if err != nil {
			if errors.Is(err, grafana.ErrDataSourceNotFound) {
				actions = append(actions, NewCreateDataSource(newDataSource))
				continue
			}
			return nil, err
		}
		// TODO: update data source if necessary
	}
	return actions, nil
}
