package state

import (
	"errors"

	"tool/grafana"
)

type StateAction interface {
	Apply(grafana.Client) error
	String() string
	Long() string
}

func Diff(gClient grafana.Client, state State) ([]StateAction, error) {
	var actions []StateAction
	// Folders
	folderActions, err := diffFolders(gClient, state)
	if err != nil {
		return nil, err
	}
	actions = append(actions, folderActions...)
	// Data sources
	dataSourcesActions, err := diffDataSources(gClient, state)
	if err != nil {
		return nil, err
	}
	actions = append(actions, dataSourcesActions...)
	return actions, nil
}

func diffFolders(gClient grafana.Client, state State) ([]StateAction, error) {
	var actions []StateAction
	for _, newFolder := range state.Folders {
		currentFolder, err := gClient.FolderByUID(newFolder.UID)
		if err != nil {
			if errors.Is(err, grafana.ErrFolderNotFound) {
				actions = append(actions, NewCreateFolder(newFolder))
				continue
			}
			return nil, err
		}
		if !currentFolder.Equal(newFolder) {
			actions = append(actions, NewUpdateFolder(*currentFolder, newFolder))
		}
	}
	return actions, nil
}

func diffDataSources(gClient grafana.Client, state State) ([]StateAction, error) {
	var actions []StateAction
	for _, newDataSource := range state.DataSources {
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
