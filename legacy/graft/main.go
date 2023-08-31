package main

import (
	"errors"
	"fmt"
	"os"

	"graft/cli"
	"graft/grafana"
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
		grafanaPassword = "admin"
	}
}

func main() {
	grafanaClient := grafana.NewClient(grafana.ClientOptions{
		GrafanaUser:     grafanaUser,
		GrafanaPassword: grafanaPassword,
		GrafanaURL:      grafanaURL,
	})
	rootCmd := cli.RootCommand()
	rootCmd.AddCommand(cli.InitCommand(grafanaClient))
	rootCmd.AddCommand(cli.DatasourceCommand(grafanaClient))
	rootCmd.AddCommand(cli.DashboardCommand(grafanaClient))
	rootCmd.AddCommand(cli.PanelCommand(grafanaClient))
	rootCmd.AddCommand(cli.ConfigCommand(grafanaClient))
	if err := rootCmd.Execute(); err != nil {
		if errors.Is(err, grafana.ErrFolderNotFound) {
			fmt.Println("Use 'graft folder create' to create a folder")
		}
		os.Exit(1)
	}
}
