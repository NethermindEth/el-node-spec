package grafana

import (
	"graft/models"

	gapi "github.com/grafana/grafana-api-golang-client"
)

type DashboardAPI interface {
	Dashboards() ([]models.Dashboard, error)
	AddDashboard(title string, dashboard models.Dashboard) error
}

func (c *gClient) Dashboards() ([]models.Dashboard, error) {
	apiClient, err := c.apiClient()
	if err != nil {
		return nil, err
	}
	apiDashboards, err := apiClient.Dashboards()
	if err != nil {
		return nil, err
	}
	var dashboards []models.Dashboard
	for _, apiDashboard := range apiDashboards {
		d, err := apiClient.DashboardByUID(apiDashboard.UID)
		if err != nil {
			return nil, err
		}
		dashboards = append(dashboards, models.Dashboard{
			Title:     d.Model["title"].(string),
			Model:     d.Model,
			FolderUID: apiDashboard.FolderUID,
		})
	}
	return dashboards, nil
}

func (c *gClient) AddDashboard(title string, dashboard models.Dashboard) error {
	apiClient, err := c.apiClient()
	if err != nil {
		return err
	}
	dashboard.Model["title"] = title
	_, err = apiClient.NewDashboard(gapi.Dashboard{
		FolderUID: dashboard.FolderUID,
		Model:     dashboard.Model,
	})
	return err
}
