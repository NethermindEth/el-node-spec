package main

import (
	"os"

	"tool/cli"
	"tool/grafana"
)

var (
	grafanaUser     string
	grafanaPassword string
	grafanaURL      string
)

func init() {
	grafanaURL = os.Getenv("GRAFANA_URL")
	if grafanaURL == "" {
		grafanaURL = "http://localhost:3000"
	}
	grafanaUser = os.Getenv("GRAFANA_USER")
	if grafanaUser == "" {
		grafanaUser = "admin"
	}
	grafanaPassword = os.Getenv("GRAFANA_PASSWORD")
	if grafanaPassword == "" {
		grafanaPassword = "12345678"
	}
}

func main() {
	grafanaClient := grafana.NewClient(grafana.ClientOptions{
		GrafanaUser:     grafanaUser,
		GrafanaPassword: grafanaPassword,
		GrafanaURL:      grafanaURL,
	})
	rootCmd := cli.RootCommand()
	rootCmd.AddCommand(cli.FolderCommand(grafanaClient))
	rootCmd.AddCommand(cli.DatasourceCommand(grafanaClient))
	rootCmd.AddCommand(cli.DashboardCommand(grafanaClient))
	rootCmd.AddCommand(cli.PanelCommand(grafanaClient))
	rootCmd.AddCommand(cli.StateCommand(grafanaClient))
	if err := rootCmd.Execute(); err != nil {
		panic(err)
	}
}
