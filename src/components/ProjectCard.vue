<script setup>
import { computed } from 'vue'
import { statuses } from '../data/projects.js'

const props = defineProps({
  project: { type: Object, required: true },
})

const status = computed(() => statuses[props.project.status] ?? statuses.planned)
const isPlaceholder = computed(() => props.project.status !== 'active')
</script>

<template>
  <article class="card" :class="{ 'card--placeholder': isPlaceholder }">
    <div class="card-top">
      <div class="card-title">
        <h3>{{ project.name }}</h3>
        <p v-if="project.tagline" class="card-tagline">{{ project.tagline }}</p>
      </div>
      <span class="badge" :data-tone="status.tone">{{ status.label }}</span>
    </div>

    <p class="card-description">{{ project.description }}</p>

    <ul v-if="project.features.length" class="card-features">
      <li v-for="feature in project.features" :key="feature">{{ feature }}</li>
    </ul>

    <div class="card-footer">
      <div class="card-meta">
        <span v-if="project.language" class="meta-language">
          <span class="language-dot" :style="{ backgroundColor: project.languageColor }"></span>
          {{ project.language }}
        </span>
        <span v-if="project.product" class="meta-product">Part of {{ project.product }}</span>
        <span v-if="project.license" class="meta-license">{{ project.license }}</span>
      </div>
      <a class="card-link" :href="project.url" target="_blank" rel="noopener">
        {{ isPlaceholder ? 'Follow the org' : 'View on GitHub' }} &rarr;
      </a>
    </div>
  </article>
</template>
