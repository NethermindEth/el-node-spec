package models

type Folder struct {
	ID    int64  `yaml:"-"`
	UID   string `yaml:"uid"`
	Title string `yaml:"title"`
}

func (f Folder) Equal(other Folder) bool {
	return f.UID == other.UID && f.Title == other.Title
}
