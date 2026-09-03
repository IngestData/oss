// Catalogue of what IngestData builds in the open.
//
// To add a new project, append an entry to `projects`.
// Set `status` to "coming-soon" for projects that are announced but not yet public.

export const organization = {
  name: 'IngestData',
  tagline: 'What we build in the open',
  url: 'https://github.com/IngestData',
  website: 'https://ingestdata.io',
  avatar: 'https://avatars.githubusercontent.com/u/255770213?v=4',
  intro:
    'This catalogue hosts the open source components of IngestData\'s products, like Pipe and Viz. Orion is the first — others will follow.',
}

export const products = [
  {
    name: 'Pipe',
    description:
      'IngestData\'s data pipeline product. Its user-supplied transformer code is kept safe in the open by Orion.',
  },
  {
    name: 'Viz',
    description:
      'IngestData\'s visualization product. Open components for Viz will appear in this catalogue as they are released.',
  },
]

export const statuses = {
  active: { label: 'Active', tone: 'green' },
  'coming-soon': { label: 'Coming soon', tone: 'amber' },
  planned: { label: 'Planned', tone: 'slate' },
}

export const projects = [
  {
    name: 'Orion',
    tagline: 'Hunter of the hidden',
    status: 'active',
    product: 'Pipe',
    url: 'https://github.com/IngestData/orion',
    language: 'Go',
    languageColor: '#00ADD8',
    license: null,
    description:
      'Orion is a software composition analysis (SCA) tool deployed within IngestData Pipe. It analyzes transformer code for potential security vulnerabilities and determines whether the code is safe to run.',
    features: [
      'Runs after every change to a project\'s transformer code to ensure it is safe to run.',
      'Reports vulnerabilities and blocks deployment until they are fixed.',
      'Detects memory leaks and other code issues beyond known vulnerabilities.',
      'Flags unauthorized network requests made by transformer code.',
      'Verifies that transformers always sanitize their input and output.',
    ],
  },
  {
    name: 'More to follow',
    tagline: 'The next open components',
    status: 'coming-soon',
    product: null,
    url: 'https://github.com/IngestData',
    language: null,
    languageColor: null,
    license: null,
    description:
      'Orion is only the beginning. IngestData will keep publishing open source components of Pipe, Viz and future products here as they are released.',
    features: [],
  },
]

export const languages = [
  ...new Set(projects.map((p) => p.language).filter(Boolean)),
]
