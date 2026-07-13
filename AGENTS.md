# AGENTS.md

## Cursor Cloud specific instructions

`big-trip` is a purely client-side webpack app (HTML Academy "Big Trip" travel planner). It uses local mock data (`src/mock/`); there is no backend, database, API, or secrets to configure.

### Services / commands
This is a single frontend service. Standard scripts live in `package.json`:
- Dev server: `npm run dev` (webpack-dev-server, development mode)
- Lint: `npm run lint` (ESLint over `src/`)
- Build: `npm run build` (production build to `build/`)

### Non-obvious notes
- The dev server is reachable at `http://localhost:8080/` (root). Do NOT use the path from `webpack.config.js` `output.publicPath` (`/your-repo-name/`) — that value is only for the GitHub Pages production build; `webpack-dev-server` serves the app and bundle at `/` in dev mode.
- `package.json` `engines` requests Node 20, but the app installs, lints, builds, and runs fine on the Node 22 present in this environment.
