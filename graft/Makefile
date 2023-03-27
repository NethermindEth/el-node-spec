.DEFAULT_GOAL := help

build: ## Build graft
	go build -o ./bin/graft main.go

format: ## Format code with gofmt
	gofumpt -l -w .

check: ## Run staticchek linter
	staticcheck ./...

help: ## Show this help
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'
