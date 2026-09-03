# oss

**What we do in the open** — a catalogue of everything [IngestData](https://github.com/IngestData)
builds in the open, starting with [Orion](https://github.com/IngestData/orion).

The site is a [Vue 3](https://vuejs.org/) + [Vite](https://vite.dev/) single-page app and is
hosted on **GitHub Pages** at <https://ingestdata.github.io/oss/>.

## The catalogue

All content lives in [`src/data/projects.js`](src/data/projects.js). To publish a new open
source project, add an entry to the `projects` array:

- `status: 'active'` for a project with a public repository, `'coming-soon'` or `'planned'`
  for projects that are announced but not yet public.
- `features` lists what the project does and is rendered on the project card.

## Development

```sh
npm install
npm run dev      # local dev server
npm run build    # production build into dist/
npm run preview  # preview the production build
```

## Deployment

The site deploys automatically to GitHub Pages on every push to `main` via
[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).

One-time setup: in the repository settings under **Pages**, set the source to
**GitHub Actions**.

The Vite `base` path defaults to `/oss/` (the repository name, as required for project
pages). Override it with the `VITE_BASE` environment variable when serving the site from a
custom domain.
