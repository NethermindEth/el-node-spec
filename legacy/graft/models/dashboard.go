package models

type Dashboard struct {
	Title     string                 `json:"title"`
	Model     map[string]interface{} `json:"model"`
	FolderUID string                 `json:"folderUid,omitempty"`
}
