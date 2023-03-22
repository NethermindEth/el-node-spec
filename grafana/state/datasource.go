package state

import (
	"fmt"
	"log"

	"tool/grafana"
	"tool/models"
)

type createDataSource struct {
	dataSource models.DataSource
}

func NewCreateDataSource(dataSource models.DataSource) StateAction {
	return createDataSource{dataSource: dataSource}
}

func (a createDataSource) Apply(gClient grafana.Client) error {
	log.Println("Creating data source", a.dataSource.Name, a.dataSource.UID)
	return gClient.CreateDataSource(a.dataSource)
}

func (a createDataSource) String() string {
	return fmt.Sprintf("+ DATA SOURCE %s (%s)", a.dataSource.Name, a.dataSource.UID)
}

func (a createDataSource) Long() string {
	message := a.String()
	message += fmt.Sprintf("\n  + Name: %s", a.dataSource.Name)
	message += fmt.Sprintf("\n  + UID: %s", a.dataSource.UID)
	message += fmt.Sprintf("\n  + Type: %s", a.dataSource.Type)
	message += fmt.Sprintf("\n  + URL: %s", a.dataSource.URL)
	message += fmt.Sprintf("\n  + Access: %s", a.dataSource.Access)
	return message
}

type deleteDatasource struct {
	datasource models.DataSource
}

func NewDeleteDataSource(datasource models.DataSource) StateAction {
	return deleteDatasource{datasource: datasource}
}

func (a deleteDatasource) Apply(gClient grafana.Client) error {
	log.Println("Deleting data source", a.datasource.Name, a.datasource.UID)
	return gClient.DeleteDataSource(a.datasource)
}

func (a deleteDatasource) String() string {
	return fmt.Sprintf("- DATA SOURCE %s (%s)", a.datasource.Name, a.datasource.UID)
}

func (a deleteDatasource) Long() string {
	return a.String()
}
