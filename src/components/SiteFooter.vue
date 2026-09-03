<script setup>
import { organization } from '../data/projects.js'

const year = new Date().getFullYear()
</script>

<template>
  <footer class="site-footer">
    <p>
      &copy; {{ year }} {{ organization.name }} &middot;
      <a :href="organization.website" target="_blank" rel="noopener">ingestdata.io</a> &middot;
      <a :href="organization.url" target="_blank" rel="noopener">GitHub</a>
    </p>
    <p class="footer-note">Built with Vue, hosted on GitHub Pages.</p>
  </footer>
</template>
