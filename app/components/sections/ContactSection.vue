<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { contactLinks } from '~/data/contact'
</script>

<template>
  <section id="contact" class="content-section">
    <div class="container">
      <div class="section-heading">
        <h2>Contact</h2>
        <p>Terbuka untuk freelance project, kolaborasi, dan full-time role.</p>
      </div>
      <div class="contact-grid">
        <a
          v-for="link in contactLinks"
          :key="link.href"
          :href="link.href"
          :target="link.external ? '_blank' : undefined"
          :rel="link.external ? 'noopener noreferrer' : undefined"
        >
          <Icon :icon="link.icon" class="icon" />
          {{ link.label }}
        </a>
      </div>
    </div>
  </section>
</template>
