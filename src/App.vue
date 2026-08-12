<script setup>
const projects = [
  {
    name: 'Data Ingest Core',
    description: 'Core ingestion framework for high-volume structured and unstructured data.',
    url: 'https://github.com/IngestData/oss',
  },
  {
    name: 'Schema Toolkit',
    description: 'Utilities to version, validate, and evolve event/data schemas across services.',
    url: 'https://github.com/IngestData/oss',
  },
  {
    name: 'Pipeline SDK',
    description: 'Developer SDK for building connectors and processors on top of our ingestion stack.',
    url: 'https://github.com/IngestData/oss',
  },
]
</script>

<template>
  <main class="container">
    <header>
      <h1>IngestData Open Source</h1>
      <p>Projects we build in the open.</p>
    </header>

    <section aria-label="Open source projects">
      <ul class="project-grid">
        <li v-for="project in projects" :key="project.name" class="project-card">
          <h2>{{ project.name }}</h2>
          <p>{{ project.description }}</p>
          <a :href="project.url" target="_blank" rel="noreferrer">View project</a>
        </li>
      </ul>
    </section>
  </main>
</template>
