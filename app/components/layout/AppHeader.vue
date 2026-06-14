<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import { Icon } from '@iconify/vue'
import { useNavToggle } from '~/composables/useNavToggle'

const { isOpen, toggle, closeOnMobile } = useNavToggle()

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#experience', label: 'Experience' },
  { href: '#portfolio', label: 'Portfolio' },
  { href: '#contact', label: 'Contact' },
]

function handleResize() {
  if (window.innerWidth > 767) {
    if (isOpen.value) isOpen.value = false
  }
}

onMounted(() => window.addEventListener('resize', handleResize))
onUnmounted(() => window.removeEventListener('resize', handleResize))
</script>

<template>
  <header class="site-header">
    <div class="container">
      <div class="header-wrap">
        <a href="#home" class="brand">RISMANDEV</a>

        <button
          class="nav-toggle"
          type="button"
          :aria-expanded="String(isOpen)"
          aria-controls="primary-nav"
          @click="toggle"
        >
          <Icon :icon="isOpen ? 'fa6-solid:xmark' : 'fa6-solid:bars'" />
          Menu
        </button>

        <nav
          id="primary-nav"
          class="site-nav"
          :class="{ 'is-open': isOpen }"
        >
          <a
            v-for="link in navLinks"
            :key="link.href"
            :href="link.href"
            @click="closeOnMobile"
          >
            {{ link.label }}
          </a>
        </nav>
      </div>
    </div>
  </header>
</template>
