package config

import (
	"errors"
	"fmt"
	"os"

	"graft/models"
	"graft/util"

	"gopkg.in/yaml.v3"
)

const (
	DefaultPath = "graft.yml"
	FolderUID   = "el-folder"
	FolderTitle = "Eigen Layer"
)

type Config struct {
	path        string
	DataSources []models.DataSource `yaml:"datasources"`
}

func NewConfig(path string) (*Config, error) {
	configYAML, err := util.ReadFile(path)
	if err != nil {
		return nil, err
	}
	var s Config
	s.path = path
	return &s, yaml.Unmarshal(configYAML, &s)
}

func (s *Config) Validate() error {
	// TODO: Validate configuration
	return nil
}

func (s *Config) Save() error {
	configYAML, err := yaml.Marshal(&s)
	if err != nil {
		return err
	}
	return os.WriteFile(s.path, configYAML, 0o644)
}

func (s *Config) GetDatasource(uid string) (models.DataSource, error) {
	for _, ds := range s.DataSources {
		if ds.UID == uid {
			return ds, nil
		}
	}
	return models.DataSource{}, fmt.Errorf("%w: %s", ErrDatasourceNotFound, uid)
}

func (s *Config) AddDataSource(d models.DataSource) error {
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

func (s *Config) DeleteDatasource(uid string) error {
	for i, ds := range s.DataSources {
		if ds.UID == uid {
			s.DataSources = append(s.DataSources[:i], s.DataSources[i+1:]...)
			return s.Save()
		}
	}
	return fmt.Errorf("%w: %s", ErrDatasourceNotFound, uid)
}
