package util

import (
	"fmt"
	"io"
	"os"
)

func ReadFile(path string) (data []byte, err error) {
	file, err := os.Open(path)
	if err != nil {
		return nil, err
	}
	defer closeFile(file, &err)

	fi, err := file.Stat()
	if err != nil {
		return nil, err
	}
	if fi.IsDir() {
		return nil, fmt.Errorf("path %s is a directory: %w", path, ErrInvalidFile)
	}
	return io.ReadAll(file)
}

func closeFile(f io.Closer, err *error) {
	// If there is already an error, don't overwrite it
	if *err != nil {
		return
	}
	// If there is no error, close the file and set the error if there is one
	if cErr := f.Close(); cErr != nil {
		*err = cErr
	}
}
