<script setup lang="ts">
import { Icon } from '@iconify/vue'
</script>

<template>
  <section id="home" class="hero-section">
    <div class="container">
      <div class="row align-items-center g-5">
        <div class="col-lg-7">
          <p class="eyebrow">Frontend Web Developer • Flutter Developer</p>
          <h1>Risman Abdilah</h1>
          <p class="lead">
            Saya membantu bisnis dan personal brand membangun produk digital
            yang modern, cepat, dan berorientasi hasil—mulai dari website
            performa tinggi hingga aplikasi mobile lintas platform yang
            nyaman dipakai setiap hari.
          </p>
          <div class="hero-actions">
            <a href="mailto:contact.risman@gmail.com" class="btn btn-main">
              <Icon icon="fa6-solid:paper-plane" />
              Hire Me
            </a>
            <a
              href="https://www.github.com/rismandev"
              target="_blank"
              rel="noopener noreferrer"
              class="btn btn-ghost"
            >
              <Icon icon="fa6-brands:github" />
              GitHub
            </a>
          </div>
        </div>
        <div class="col-lg-5">
          <div class="hero-card">
            <NuxtImg
              src="/assets/images/profile/1.jpeg"
              alt="Risman Abdilah"
              class="profile-image"
              width="853"
              height="1280"
              fetchpriority="high"
              loading="eager"
              format="webp"
            />
            <div class="hero-meta">
              <p>
                <span class="icon"><Icon icon="fa6-solid:location-dot" /></span>
                Majalengka, Indonesia
              </p>
              <p>
                <span class="icon"><Icon icon="fa6-solid:envelope" /></span>
                rismandev@gmail.com
              </p>
              <p>
                <span class="icon"><Icon icon="fa6-solid:phone" /></span>
                (+62) 896 4732 9246
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
