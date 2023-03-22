package grafana

import (
	"net/url"

	gapi "github.com/grafana/grafana-api-golang-client"
)

type Client interface {
	FolderAPI
	DataSourceAPI
	PanelAPI
	DashboardAPI
}

type ClientOptions struct {
	GrafanaUser     string
	GrafanaPassword string
	GrafanaURL      string
}

func NewClient(options ClientOptions) Client {
	return &gClient{
		grafanaUser:     options.GrafanaUser,
		grafanaPassword: options.GrafanaPassword,
		grafanaURL:      options.GrafanaURL,
	}
}

type gClient struct {
	grafanaUser     string
	grafanaPassword string
	grafanaURL      string
}

func (c *gClient) apiClient() (*gapi.Client, error) {
	return gapi.New(c.grafanaURL, gapi.Config{
		BasicAuth: url.UserPassword(c.grafanaUser, c.grafanaPassword),
	})
}
