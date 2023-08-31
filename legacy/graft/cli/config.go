package cli

import (
	"graft/config"
	"graft/grafana"

	"github.com/spf13/cobra"
)

func ConfigCommand(gClient grafana.Client) *cobra.Command {
	cmd := &cobra.Command{
		Use:   "config",
		Short: "Manage graft configuration",
	}
	cmd.AddCommand(configValidateCommand())
	cmd.AddCommand(configDiffCommand(gClient))
	cmd.AddCommand(configApplyCommand(gClient))
	return cmd
}

func configValidateCommand() *cobra.Command {
	return &cobra.Command{
		Use:   "validate",
		Short: "Validate configuration",
		RunE: func(cmd *cobra.Command, args []string) error {
			// Validate configuration
			return currentConfig.Validate()
		},
	}
}

func configDiffCommand(gClient grafana.Client) *cobra.Command {
	return &cobra.Command{
		Use:   "diff",
		Short: "Show differences between configuration file and Grafana",
		RunE: func(cmd *cobra.Command, args []string) error {
			// Validate configuration
			if err := currentConfig.Validate(); err != nil {
				return err
			}
			// Diff configuration
			actions, err := config.Diff(gClient, currentConfig)
			if err != nil {
				return err
			}
			for _, action := range actions {
				println(action.Long())
			}
			return nil
		},
	}
}

func configApplyCommand(gClient grafana.Client) *cobra.Command {
	return &cobra.Command{
		Use:   "apply",
		Short: "Apply configuration to Grafana",
		RunE: func(cmd *cobra.Command, args []string) error {
			// Diff configuration
			actions, err := config.Diff(gClient, currentConfig)
			if err != nil {
				return err
			}
			// Apply configuration
			if err := config.Apply(gClient, actions); err != nil {
				return err
			}
			return nil
		},
	}
}
