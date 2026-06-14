<script setup lang="ts">
import { skills, focusAreas } from '~/data/skills'
</script>

<template>
  <section id="about" class="content-section">
    <div class="container">
      <div class="section-heading">
        <h2>About Me</h2>
        <p>
          Saya adalah Frontend Web &amp; Flutter Developer yang fokus pada
          pengalaman pengguna, performa aplikasi, dan code quality jangka
          panjang. Saya senang menerjemahkan ide bisnis menjadi produk
          digital yang tidak hanya terlihat menarik, tetapi juga stabil,
          mudah dikembangkan, dan siap tumbuh bersama kebutuhan pengguna.
        </p>
        <p class="about-extra">
          Dalam proses kerja, saya mengutamakan komunikasi yang jelas,
          eksekusi yang terstruktur, dan perhatian pada detail agar setiap
          fitur benar-benar memberi dampak nyata untuk user maupun bisnis.
        </p>
      </div>
      <div class="row g-4">
        <div class="col-md-6">
          <div class="info-card">
            <h3>Fokus Utama</h3>
            <ul>
              <li v-for="area in focusAreas" :key="area">{{ area }}</li>
            </ul>
          </div>
        </div>
        <div class="col-md-6">
          <div class="info-card">
            <h3>Tech Stack</h3>
            <div class="skills-grid">
              <span v-for="skill in skills" :key="skill">{{ skill }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
