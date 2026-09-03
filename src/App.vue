<script setup>
import { computed, ref } from 'vue'
import SiteHeader from './components/SiteHeader.vue'
import SiteFooter from './components/SiteFooter.vue'
import ProjectCard from './components/ProjectCard.vue'
import { organization, products, projects, languages } from './data/projects.js'

const filters = ['All', ...languages]
const activeFilter = ref('All')

const visibleProjects = computed(() =>
  activeFilter.value === 'All'
    ? projects
    : projects.filter((p) => p.language === activeFilter.value),
)

const activeCount = computed(() => projects.filter((p) => p.status === 'active').length)
const upcomingCount = computed(() => projects.length - activeCount.value)
</script>

<template>
  <SiteHeader />

  <main>
    <section class="hero">
      <p class="hero-eyebrow">Open source at {{ organization.name }}</p>
      <h1>{{ organization.tagline }}</h1>
      <p class="hero-intro">{{ organization.intro }}</p>
      <div class="hero-actions">
        <a class="btn btn-primary" :href="organization.url" target="_blank" rel="noopener">
          Explore on GitHub
        </a>
        <a class="btn btn-ghost" href="#catalogue">Browse the catalogue</a>
      </div>
      <dl class="hero-stats">
        <div class="stat">
          <dt>Projects</dt>
          <dd>{{ activeCount }}</dd>
        </div>
        <div class="stat">
          <dt>In the pipeline</dt>
          <dd>{{ upcomingCount }}</dd>
        </div>
        <div class="stat">
          <dt>Products opened</dt>
          <dd>{{ products.length }}</dd>
        </div>
      </dl>
    </section>

    <section id="catalogue" class="section">
      <div class="section-heading">
        <h2>Project catalogue</h2>
        <p>Everything IngestData publishes in the open, in one place.</p>
      </div>

      <div class="filters" role="group" aria-label="Filter projects by language">
        <button
          v-for="filter in filters"
          :key="filter"
          class="filter-btn"
          :class="{ active: activeFilter === filter }"
          type="button"
          @click="activeFilter = filter"
        >
          {{ filter }}
        </button>
      </div>

      <div class="grid">
        <ProjectCard v-for="project in visibleProjects" :key="project.name" :project="project" />
      </div>
    </section>

    <section id="about" class="section">
      <div class="section-heading">
        <h2>Built by our products</h2>
        <p>Our open source work comes straight out of the products we build.</p>
      </div>
      <div class="grid grid--two">
        <article v-for="product in products" :key="product.name" class="card">
          <div class="card-top">
            <div class="card-title">
              <h3>{{ product.name }}</h3>
            </div>
          </div>
          <p class="card-description">{{ product.description }}</p>
        </article>
      </div>
    </section>
  </main>

  <SiteFooter />
</template>
