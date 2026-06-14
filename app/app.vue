<script setup lang="ts">
useHead({
  title: 'RISMANDEV - Frontend Website & Flutter Developer',
  meta: [
    {
      name: 'description',
      content:
        'Portfolio resmi Risman Abdilah - Frontend Website & Flutter Developer dari Majalengka, Indonesia.',
    },
    {
      name: 'keywords',
      content:
        'frontend developer, flutter developer, web developer, portfolio, majalengka, indonesia',
    },
    { property: 'og:title', content: 'RISMANDEV - Frontend Website & Flutter Developer' },
    {
      property: 'og:description',
      content:
        'Portfolio resmi Risman Abdilah - Frontend Website & Flutter Developer dari Majalengka, Indonesia.',
    },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://rismandev.site/' },
    { property: 'og:image', content: 'https://rismandev.site/assets/images/profile/1.jpeg' },
    { property: 'og:site_name', content: 'RISMANDEV' },
    { property: 'og:locale', content: 'id_ID' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'RISMANDEV - Frontend Website & Flutter Developer' },
    {
      name: 'twitter:description',
      content:
        'Portfolio resmi Risman Abdilah - Frontend Website & Flutter Developer dari Majalengka, Indonesia.',
    },
    {
      name: 'twitter:image',
      content: 'https://rismandev.site/assets/images/profile/1.jpeg',
    },
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: 'Risman Abdilah',
        url: 'https://rismandev.site/',
        image: 'https://rismandev.site/assets/images/profile/1.jpeg',
        jobTitle: 'Frontend Web Developer & Flutter Developer',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Majalengka',
          addressRegion: 'Jawa Barat',
          addressCountry: 'ID',
        },
        email: 'mailto:rismandev@gmail.com',
        telephone: '+6289647329246',
        sameAs: [
          'https://www.linkedin.com/in/rismandev',
          'https://www.github.com/rismandev',
          'https://www.instagram.com/rismandev',
          'https://www.tiktok.com/@rismandev',
        ],
      }),
    },
  ],
})
</script>

<template>
  <div>
    <NuxtRouteAnnouncer />
    <AppHeader />
    <main>
      <NuxtPage />
    </main>
    <AppFooter />
  </div>
</template>
