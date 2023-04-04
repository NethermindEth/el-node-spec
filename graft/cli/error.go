package cli

import "errors"

var (
	ErrInvalidArgs               = errors.New("invalid arguments")
	ErrFolderNotFoundInState     = errors.New("folder not found in state")
	ErrDataSourceNotFoundInState = errors.New("data source not found in state")
	ErrNoFolders                 = errors.New("no folders found in state")
)
