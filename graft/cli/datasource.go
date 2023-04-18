package cli

import (
	"graft/grafana"
	"graft/models"

	"github.com/spf13/cobra"
)

func DatasourceCommand(gClient grafana.Client) *cobra.Command {
	cmd := &cobra.Command{
		Use:   "datasource",
		Short: "Manage datasources.",
		Long:  "Create and delete Grafana datasources. All the changes are reflected in the configuration file.",
	}
	cmd.AddCommand(deleteDataSourceCommand(gClient))
	cmd.AddCommand(createDataSourceCommand(gClient))
	return cmd
}

func createDataSourceCommand(gClient grafana.Client) *cobra.Command {
	var dataSource models.DataSource
	cmd := &cobra.Command{
		Use:   "create [datasource-uid]",
		Short: "Create a datasource.",
		Long:  "Create a datasource in Grafana and add it to the configuration file. The datasource-uid is a required argument.",
		Args:  cobra.ExactArgs(1),
		PreRun: func(cmd *cobra.Command, args []string) {
			dataSource.UID = args[0]
		},
		RunE: func(cmd *cobra.Command, args []string) error {
			if err := gClient.CreateDataSource(dataSource); err != nil {
				return err
			}
			return currentConfig.AddDataSource(dataSource)
		},
	}
	cmd.Flags().StringVar(&dataSource.Name, "name", "", "Data source name (required)")
	cmd.MarkFlagRequired("name")
	cmd.Flags().StringVar(&dataSource.Type, "type", "prometheus", "Data source type")
	cmd.Flags().StringVar(&dataSource.URL, "url", "http://prometheus:9090", "Data source URL")
	cmd.Flags().StringVar(&dataSource.Access, "access", "proxy", "Data source access mode")
	return cmd
}

func deleteDataSourceCommand(gClient grafana.Client) *cobra.Command {
	var datasourceUID string
	cmd := &cobra.Command{
		Use:   "delete [datasource-uid]",
		Short: "Delete a datasource.",
		Long:  "Delete a datasource from Grafana and remove it from the configuration file. The datasource-uid is a required argument.",
		Args:  cobra.ExactArgs(1),
		PreRun: func(cmd *cobra.Command, args []string) {
			datasourceUID = args[0]
		},
		RunE: func(cmd *cobra.Command, args []string) error {
			dataSource, err := currentConfig.GetDatasource(datasourceUID)
			if err != nil {
				return err
			}
			if err := gClient.DeleteDataSource(dataSource); err != nil {
				return err
			}
			return currentConfig.DeleteDatasource(datasourceUID)
		},
	}
	return cmd
}
