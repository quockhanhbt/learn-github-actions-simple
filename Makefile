# Simple Makefile - run `make` (or `make up`) to install and start the dev server.

.DEFAULT_GOAL := up
.PHONY: up install dev build start typecheck test ci clean help

help: ## Show available commands
	@grep -E '^[a-z]+:.*## ' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*## "}; {printf "  make %-10s %s\n", $$1, $$2}'

up: install dev ## Install dependencies and start the dev server (one command)

install: ## Install dependencies (npm ci, reproducible from package-lock.json)
	npm ci

dev: ## Start the dev server at http://localhost:3000
	npm run dev

build: ## Build the static site into ./out
	npm run build

start: build ## Build and serve the static site at http://localhost:3000
	npm run start

typecheck: ## Type-check the TypeScript code
	npm run typecheck

test: ## Run the unit tests
	npm test

ci: install typecheck test build ## Everything CI should run

clean: ## Remove build output and dependencies
	rm -rf .next out node_modules *.tsbuildinfo
