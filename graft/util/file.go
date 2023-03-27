package util

import (
	"fmt"
	"io"
	"os"
)

func ReadFile(path string) ([]byte, error) {
	file, err := os.Open(path)
	if err != nil {
		return nil, err
	}
	defer file.Close()
	fi, err := file.Stat()
	if err != nil {
		return nil, err
	}
	if fi.IsDir() {
		return nil, fmt.Errorf("path %s is a directory: %w", path, ErrInvalidFile)
	}
	return io.ReadAll(file)
}
