package config

import (
	"errors"
	"graft/util"
	"os"
)

func InitConfigFile() error {
	_, err := util.ReadFile(DefaultPath)
	if errors.Is(err, os.ErrNotExist) {
		c := Config{
			path:        DefaultPath,
		}
		return c.Save()
	}
	return err
}
