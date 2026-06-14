<script setup lang="ts">
import { portfolio } from '~/data/portfolio'
</script>

<template>
  <section id="portfolio" class="content-section section-alt">
    <div class="container">
      <div class="section-heading">
        <h2>Portfolio</h2>
        <p>Beberapa karya terbaik yang pernah saya kerjakan.</p>
      </div>
      <div class="row g-3">
        <div
          v-for="item in portfolio"
          :key="item.title"
          class="col-sm-6 col-lg-4"
        >
          <article class="portfolio-card">
            <img
              :src="item.image"
              :alt="item.imageAlt"
              class="portfolio-image"
              loading="lazy"
              decoding="async"
            />
            <h3>{{ item.title }}</h3>
            <p>{{ item.description }}</p>
            <div class="portfolio-tech">
              <span v-for="tech in item.tech" :key="tech">{{ tech }}</span>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>
