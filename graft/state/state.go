package state

import (
	"errors"
	"fmt"
	"os"

	"graft/models"
	"graft/util"

	"gopkg.in/yaml.v3"
)

const (
	DefaultStatePath = "state.yaml"
)

type State struct {
	path        string
	Folders     []models.Folder     `yaml:"folders,omitempty"`
	DataSources []models.DataSource `yaml:"datasources,omitempty"`
}

func NewState(path string) (*State, error) {
	stateYAML, err := util.ReadFile(path)
	if err != nil {
		return nil, err
	}
	var s State
	s.path = path
	return &s, yaml.Unmarshal(stateYAML, &s)
}

func (s *State) Validate() error {
	// TODO: Validate state
	return nil
}

func (s *State) Save() error {
	stateYAML, err := yaml.Marshal(&s)
	if err != nil {
		return err
	}
	return os.WriteFile(s.path, stateYAML, 0o644)
}

func (s *State) Folder(uid string) (models.Folder, error) {
	for _, f := range s.Folders {
		if f.UID == uid {
			return f, nil
		}
	}
	return models.Folder{}, fmt.Errorf("%w: %s", ErrFolderNotFound, uid)
}

func (s *State) AddFolder(f models.Folder) error {
	_, err := s.Folder(f.UID)
	if err == nil {
		return fmt.Errorf("%w: %s", ErrFolderAlreadyExists, f.UID)
	}
	if !errors.Is(err, ErrFolderNotFound) {
		return err
	}
	s.Folders = append(s.Folders, f)
	return s.Save()
}

func (s *State) DeleteFolder(uid string) error {
	for i, f := range s.Folders {
		if f.UID == uid {
			s.Folders = append(s.Folders[:i], s.Folders[i+1:]...)
			return s.Save()
		}
	}
	return fmt.Errorf("%w: %s", ErrFolderNotFound, uid)
}

func (s *State) GetDatasource(uid string) (models.DataSource, error) {
	for _, ds := range s.DataSources {
		if ds.UID == uid {
			return ds, nil
		}
	}
	return models.DataSource{}, fmt.Errorf("%w: %s", ErrDatasourceNotFound, uid)
}

func (s *State) AddDataSource(d models.DataSource) error {
	_, err := s.GetDatasource(d.UID)
	if err == nil {
		return fmt.Errorf("%w: %s", ErrDatasourceAlreadyExists, d.UID)
	}
	if !errors.Is(err, ErrDatasourceNotFound) {
		return err
	}
	s.DataSources = append(s.DataSources, d)
	return s.Save()
}

func (s *State) DeleteDatasource(uid string) error {
	for i, ds := range s.DataSources {
		if ds.UID == uid {
			s.DataSources = append(s.DataSources[:i], s.DataSources[i+1:]...)
			return s.Save()
		}
	}
	return fmt.Errorf("%w: %s", ErrDatasourceNotFound, uid)
}
