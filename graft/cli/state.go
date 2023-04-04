package cli

import (
	"graft/grafana"
	"graft/state"

	"github.com/spf13/cobra"
)

func StateCommand(gClient grafana.Client) *cobra.Command {
	cmd := &cobra.Command{
		Use:   "state",
		Short: "Manage Grafana state",
		Long:  "State can be validated, diffed, and applied.",
	}
	cmd.AddCommand(stateValidateCommand())
	cmd.AddCommand(stateDiffCommand(gClient))
	cmd.AddCommand(stateApplyCommand(gClient))
	return cmd
}

func stateValidateCommand() *cobra.Command {
	return &cobra.Command{
		Use:   "validate",
		Short: "Validate state",
		RunE: func(cmd *cobra.Command, args []string) error {
			// Validate state
			return currentState.Validate()
		},
	}
}

func stateDiffCommand(gClient grafana.Client) *cobra.Command {
	return &cobra.Command{
		Use:   "diff",
		Short: "Show differences between state and Grafana",
		RunE: func(cmd *cobra.Command, args []string) error {
			// Validate state
			if err := currentState.Validate(); err != nil {
				return err
			}
			// Diff state
			actions, err := state.Diff(gClient, currentState)
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

func stateApplyCommand(gClient grafana.Client) *cobra.Command {
	return &cobra.Command{
		Use:   "apply",
		Short: "Apply state to Grafana",
		RunE: func(cmd *cobra.Command, args []string) error {
			// Diff state
			actions, err := state.Diff(gClient, currentState)
			if err != nil {
				return err
			}
			// Apply state
			if err := state.Apply(gClient, actions); err != nil {
				return err
			}
			return nil
		},
	}
}
