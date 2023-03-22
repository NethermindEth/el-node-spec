package grafana

import (
	"strings"

	gapi "github.com/grafana/grafana-api-golang-client"
	"tool/models"
)

type DataSourceAPI interface {
	DataSourceByUID(uid string) (*models.DataSource, error)
	CreateDataSource(dataSource models.DataSource) error
	DeleteDataSource(dataSource models.DataSource) error
}

func (c *gClient) DataSourceByUID(uid string) (*models.DataSource, error) {
	apiClient, err := c.apiClient()
	if err != nil {
		return nil, err
	}
	apiDataSource, err := apiClient.DataSourceByUID(uid)
	if err != nil {
		if strings.Contains(err.Error(), "404") && strings.Contains(err.Error(), "Data source not found") {
			return nil, ErrDataSourceNotFound
		}
		return nil, err
	}
	return &models.DataSource{
		UID:  apiDataSource.UID,
		Name: apiDataSource.Name,
		Type: apiDataSource.Type,
		URL:  apiDataSource.URL,
	}, nil
}

func (c *gClient) CreateDataSource(dataSource models.DataSource) error {
	apiClient, err := c.apiClient()
	if err != nil {
		return err
	}
	_, err = apiClient.NewDataSource(&gapi.DataSource{
		Name:   dataSource.Name,
		UID:    dataSource.UID,
		Type:   dataSource.Type,
		URL:    dataSource.URL,
		Access: "proxy",
	})
	return err
}

func (c *gClient) DeleteDataSource(dataSource models.DataSource) error {
	apiClient, err := c.apiClient()
	if err != nil {
		return err
	}
	apiDatasource, err := apiClient.DataSourceByUID(dataSource.UID)
	if err != nil {
		// TODO: add custom error
		return err
	}
	return apiClient.DeleteDataSource(apiDatasource.ID)
}
