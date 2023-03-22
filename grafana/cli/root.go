package cli

import (
	"tool/state"

	"github.com/spf13/cobra"
)

func RootCommand() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "tool [command]",
		Short: "tool is a CLI tool to manage Grafana dashboards and panels.",
		Long:  "Manage Grafana dashboards and panels using the Grafana Library Panels feature. Create folders and datasources, and start to create your panels and dashboards. When you are ready to share your panels, you can export then using the 'panel backup' and 'dashboard backup' commands.",
		PersistentPreRunE: func(cmd *cobra.Command, args []string) error {
			s, err := state.NewState(statePath)
			if err != nil {
				return err
			}
			currentState = *s
			// Validate state
			return currentState.Validate()
		},
	}
	cmd.PersistentFlags().StringVarP(&statePath, "state", "s", state.DefaultStatePath, "Path to state file")
	return cmd
}
