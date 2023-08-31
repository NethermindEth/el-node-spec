package config

import "errors"

var (
	ErrFolderNotFound          = errors.New("folder not found")
	ErrFolderAlreadyExists     = errors.New("folder already exists")
	ErrDatasourceNotFound      = errors.New("datasource not found")
	ErrDatasourceAlreadyExists = errors.New("datasource already exists")
)
