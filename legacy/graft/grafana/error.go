package grafana

import "errors"

var (
	ErrFolderNotFound     = errors.New("folder not found")
	ErrDataSourceNotFound = errors.New("data source not found")
)
