package config

import "graft/grafana"

func Apply(gClient grafana.Client, actions []ConfigAction) error {
	for _, action := range actions {
		if err := action.Apply(gClient); err != nil {
			return err
		}
	}
	return nil
}
