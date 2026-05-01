<template>
  <footer class="footer-container">
    <div class="footer-content">
      <div class="social-links">
        <a
          v-for="(link, index) in footerSocials"
          :key="link.id"
          :href="link.url"
          :target="link.external ? '_blank' : '_self'"
          :rel="link.external ? 'noopener noreferrer' : ''"
          class="social-item"
          :style="{ animationDelay: `${index * 0.1}s` }">
          <div class="social-item-inner">
            <div class="icon-wrapper" v-html="link.icon"></div>
            <h3 class="social-label">{{ link.name }}</h3>
          </div>
        </a>
      </div>

      <button @click="openContact" class="touch-button">
        Get in Touch
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
          <g fill="none">
            <path
              d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></path>
            <path
              fill="currentColor"
              d="m2.068 5.482l8.875 8.876a1.5 1.5 0 0 0 2.008.103l.114-.103l8.869-8.87q.043.165.058.337L22 6v12a2 2 0 0 1-1.85 1.995L20 20H4a2 2 0 0 1-1.995-1.85L2 18V6q0-.18.03-.35zM20 4q.182 0 .355.031l.17.039l-8.52 8.52l-8.523-8.522q.166-.045.34-.06L4 4z"></path>
          </g>
        </svg>
      </button>

      <article class="poem-card" aria-labelledby="final-output-title">
        <details class="poem-prefix-wrap">
          <summary class="poem-prefix-title">To someone</summary>
          <p class="poem-prefix">{{ poemPrefix }}</p>
        </details>
        <p id="final-output-title" class="poem-title">《The Final Output》</p>
        <p v-for="line in poemLines" :key="line" class="poem-line">
          {{ line }}
        </p>
      </article>
    </div>

    <div class="footer-bottom">
      <h1 class="brand-text">
        <span class="brand-name">{{ siteConfig.brand.name }}</span>
        <p class="copyright">
          (c) 2026-present
          <a style="text-decoration: underline !important" target="_blank" :href="githubProfile.url">
            {{ siteConfig.brand.owner }}
          </a>
          Crafted with passion and code.
        </p>
      </h1>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { socialIcons } from '@/site-icons';
import { siteConfig, socialLinks } from '@/site-config';

const footerSocials = siteConfig.socials.map((social) => ({
  ...social,
  icon: socialIcons[social.id],
}));

const githubProfile = socialLinks.github;
const poemPrefix = 'G(j{rH#0UvH8eCcHaIpkH8?dmH90m$H8?dlHaIggG(t8(G(|QsHZ?XyH9<8&H8(ReHZ(ReG(t2uGcYqUHa0dnH8M6vG(t2tHaIp$H8C|YGek2)';
const poemLines = [
  'Somewhere in the dark, a line of code flickers',
  'Almost like a beginning.',
  'We go on, writing ourselves into light,',
  'As though it could hold the night at bay.',
  'But endings do come,',
  'And when they do, the world does not fall silent.',
  'It breaks open.',
  'The sky itself becomes a terminal,',
  'And what follows is not quiet',
  'But thunder.',
  'A universe, no longer asleep.',
];

const openContact = () => {
  window.location.href = siteConfig.contact.primaryCta;
};
</script>

<style scoped>
:root {
  --text-primary: #ffffff;
  --text-secondary: rgba(255, 255, 255, 0.6);
  --color-black: #000000;
}

.footer-container {
  position: relative;
  z-index: 10;
  padding: 4rem 0;
  background:
    radial-gradient(120% 80% at 30% 100%, rgba(255, 20, 147, 0.15), transparent 50%),
    radial-gradient(100% 60% at 70% 90%, rgba(0, 255, 255, 0.12), transparent 60%),
    radial-gradient(90% 70% at 50% 80%, rgba(138, 43, 226, 0.18), transparent 65%),
    radial-gradient(110% 50% at 20% 110%, rgba(255, 215, 0, 0.08), transparent 40%),
    rgba(0, 0, 0, 0.7);
  font-family: 'Google Sans Code', sans-serif;
  -webkit-mask-image: linear-gradient(to top, black 80%, transparent 100%);
  mask-image: linear-gradient(to top, black 80%, transparent 100%);
  padding-top: 9rem;
}

.footer-content {
  max-width: 1152px;
  margin: 0 auto;
  padding: 0 1.5rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.social-links {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 1rem;
}

.social-item {
  display: block;
  border-radius: 9999px;
  padding: 0.75rem;
  transition: all 0.3s ease;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  background-color: rgba(255, 255, 255, 0.1);
  animation: scaleIn 0.6s ease-out both;
  text-decoration: none;
}

.social-item:hover {
  transform: scale(1.05);
  background-color: rgba(255, 255, 255, 0.2);
}

.social-item-inner {
  position: relative;
  z-index: 10;
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  align-items: center;
}

.icon-wrapper {
  font-size: 1.25rem;
  transition: transform 0.3s ease;
  color: #fff;
  filter: drop-shadow(0 0 20px rgba(255, 255, 255, 0.5));
  display: flex;
  align-items: center;
}

.icon-wrapper :deep(svg) {
  width: 1em;
  height: 1em;
}

.social-label {
  font-size: 0.875rem;
  color: #fff;
  margin: 0;
  display: none;
}

@media (min-width: 1024px) {
  .social-label {
    display: block;
  }
}

.touch-button {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  line-height: 2.5rem;
  padding: 0 1rem;
  border-radius: 9999px;
  font-weight: 500;
  font-size: 0.875rem;
  transition: all 0.3s ease;
  border: none;
  background: #fff;
  color: #000;
  cursor: pointer;
  font-family: 'Google Sans Code', sans-serif;
}

.touch-button:hover {
  transform: scale(1.05);
}

.poem-card {
  width: min(100%, 760px);
  margin-top: 2rem;
  padding: 1.5rem 1.75rem;
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 24px;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.03));
  backdrop-filter: blur(10px);
  text-align: left;
  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.22);
}

.poem-prefix-wrap {
  margin: 0 0 0.9rem;
}

.poem-prefix-title {
  cursor: pointer;
  font-size: 0.78rem;
  letter-spacing: 0.08em;
  color: rgba(255, 255, 255, 0.72);
  list-style: none;
}

.poem-prefix-title::-webkit-details-marker {
  display: none;
}

.poem-prefix-title::before {
  content: '▸ ';
}

.poem-prefix-wrap[open] .poem-prefix-title::before {
  content: '▾ ';
}

.poem-prefix {
  margin: 0 0 0.9rem;
  font-size: 0.72rem;
  letter-spacing: 0.03em;
  color: rgba(255, 255, 255, 0.5);
  word-break: break-all;
}

.poem-title {
  margin: 0 0 1rem;
  font-size: 0.85rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.72);
}

.poem-line {
  margin: 0;
  font-family: 'Google Sans Flex', sans-serif;
  font-size: clamp(1rem, 1.5vw, 1.18rem);
  line-height: 1.75;
  color: rgba(255, 255, 255, 0.92);
}

.poem-line + .poem-line {
  margin-top: 0.15rem;
}

.footer-bottom {
  display: flex;
  margin-top: 3rem;
  padding: 0 1.5rem;
  flex-direction: column;
  align-items: center;
}

.brand-text {
  font-size: 24vw;
  width: auto;
  font-weight: 900;
  letter-spacing: -0.05em;
  color: #fff;
  margin: 0;
  line-height: 1;
}

.copyright {
  margin-top: 4rem;
  font-size: 1rem;
  letter-spacing: normal;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.6);
}

@keyframes scaleIn {
  from {
    opacity: 0;
    transform: scale(0.9);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
}
</style>
