<script setup lang="ts">
import { experience } from '~/data/experience'
</script>

<template>
  <section id="experience" class="content-section">
    <div class="container">
      <div class="section-heading">
        <h2>Work Experiences</h2>
        <p>Ringkasan pengalaman kerja profesional berdasarkan data resume sebelumnya.</p>
      </div>
      <div class="timeline">
        <div
          v-for="(item, index) in experience"
          :key="index"
          class="timeline-item"
        >
          <div class="timeline-head">
            <NuxtImg
              :src="item.logo"
              :alt="item.logoAlt"
              class="company-logo"
              :width="item.logoWidth"
              :height="item.logoHeight"
              loading="lazy"
              format="webp"
            />
            <h3>{{ item.role }} — {{ item.company }}</h3>
          </div>
          <p>
            <strong>{{ item.period }}</strong><br />
            {{ item.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
