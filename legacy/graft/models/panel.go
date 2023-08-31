package models

type LibraryPanel struct {
	Name      string                 `json:"name"`
	Model     map[string]interface{} `json:"model"`
	FolderUID string                 `json:"folderUid,omitempty"`
	UID       string                 `json:"uid,omitempty"`
}
