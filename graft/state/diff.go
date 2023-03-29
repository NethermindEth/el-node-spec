package state

import (
	"errors"

	"graft/grafana"
)

// StateAction is an action that can be applied to a Grafana instance to
// bring it to a desired state.
type StateAction interface {
	Apply(grafana.Client) error
	String() string
	Long() string
}

// Diff return a list of actions that need to be applied to a Grafana instance
// to bring it to the desired state.
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

// diffFolders returns a list of actions that need to be applied to a Grafana
// instance to bring it to the desired folders state.
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

// diffDataSources returns a list of actions that need to be applied to a Grafana
// instance to bring it to the desired data sources state.
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
