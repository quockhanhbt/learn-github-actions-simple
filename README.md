# Learn GitHub Actions (simple)

A tiny **static** Next.js site that shows a short GitHub Actions guideline.
It has no database and no API, so you can focus on building CI/CD around it.

## Run it (one command)

```bash
make
```

This installs dependencies and starts the dev server at http://localhost:3000.
Requires Node.js 20.9+ (see `.nvmrc`) and `make`.

## Commands

| Command          | What it does                                        |
| ---------------- | --------------------------------------------------- |
| `make` / `make up` | Install dependencies + start dev server           |
| `make install`   | `npm ci` (reproducible install from the lockfile)   |
| `make dev`       | Start dev server                                    |
| `make build`     | Build the static site into `./out`                  |
| `make start`     | Build, then serve `./out` at http://localhost:3000  |
| `make typecheck` | TypeScript type-check                               |
| `make test`      | Run unit tests (Node's built-in test runner)        |
| `make ci`        | install + typecheck + test + build (use this in CI) |
| `make clean`     | Remove `.next`, `out`, `node_modules`               |
| `make help`      | List all commands                                   |

## Project layout

```
app/              Next.js App Router pages (layout, page, CSS)
content/guide.json  The guideline text shown on the page - edit freely
tests/            Small tests for content/guide.json
next.config.mjs   output: "export" -> static HTML in ./out
Makefile          All commands, same locally and in CI
```

## GitHub Actions

No workflow is included - add your own in `.github/workflows/`.
A good first step is a job that runs `make ci`; the build output in `./out`
can then be uploaded as an artifact or deployed to GitHub Pages.
