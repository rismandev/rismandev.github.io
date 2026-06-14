<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { services } from '~/data/services'
</script>

<template>
  <section id="services" class="content-section section-alt">
    <div class="container">
      <div class="section-heading">
        <h2>Services</h2>
        <p>Layanan yang saya kerjakan untuk kebutuhan digital Anda.</p>
      </div>
      <div class="row g-4">
        <div
          v-for="service in services"
          :key="service.title"
          class="col-md-6 col-lg-3"
        >
          <article class="service-card">
            <Icon :icon="service.icon" class="icon" />
            <h3>{{ service.title }}</h3>
            <p>{{ service.description }}</p>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>
