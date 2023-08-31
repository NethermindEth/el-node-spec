package models

const (
	DataSourceTypePrometheus string = "prometheus"
)

type DataSource struct {
	UID    string `yaml:"uid"`
	Name   string `yaml:"name"`
	Type   string `yaml:"type"`
	URL    string `yaml:"url"`
	Access string `yaml:"access"`
}
