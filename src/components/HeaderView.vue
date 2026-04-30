<template>
  <div class="header-container">
    <h2 class="side-text" :class="{ hidden: scrolled }">
      WELCOME TO {{ siteConfig.brand.name.toUpperCase() }}
    </h2>
    <div class="content">
      <img class="avatar animated-avatar" :src="siteConfig.assets.avatar" alt="Underflo avatar" />

      <div class="content-text">
        <p class="p-input animated-element" style="margin-bottom: 16px; animation-delay: 0.1s">
          <span style="color: #00d9ff">{{ shellPrompt }}</span>
          <span style="color: #69707b">:</span>
          <span style="color: #a78bfa">~</span>
          <span style="color: #69707b">$</span>
          <span style="color: #f2f2f2"> whoami</span>
        </p>
        <h1 class="animated-element" style="animation-delay: 0.2s">
          <span style="color: #8b949e">&gt;</span>
          <span style="color: white">{{ siteConfig.brand.name }}</span>
          <span class="animated" style="color: #00d9ff">_</span>
        </h1>
        <p
          class="p-font animated-element"
          style="margin-bottom: 24px; animation-delay: 0.3s"
          data-delay="0.6">
          <span style="color: #737a83">[ </span>
          <span style="color: white">{{ siteConfig.roleLine }}</span>
          <span style="color: #737a83"> ]</span>
        </p>
        <p class="note animated-element" style="animation-delay: 0.4s">
          "Forge ahead bravely against all uncertainties."
        </p>
        <p
          class="p-eye animated-element"
          style="color: #585f68; font-size: 14px; animation-delay: 0.5s"
          data-delay="1.0">
          <span style="margin-right: 8px">//</span>
          <span>Studying and wanting to make more friends.</span>
        </p>
        <div class="apps" style="animation-delay: 0.6s">
          <div
            v-for="(app, index) in apps"
            :key="app.id"
            class="app animated-element-1 cursor-pointer"
            :style="{ animationDelay: `${0.55 + index * 0.1}s` }"
            @click="handleAppClick(app)">
            <div class="bg" :style="{ backgroundColor: app.color }"></div>
            <div
              class="icon"
              :style="{
                color: app.color,
                fill: app.color,
                width: `${app.size}px`,
                height: `${app.size}px`,
              }"
              v-html="app.icon"></div>
          </div>
        </div>
        <div class="btns animated-element" style="animation-delay: 0.85s">
          <button class="btn" @click="scrollToAbout">
            <span>About</span>
            <div class="btn-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                <path
                  d="M566.6 342.6C579.1 330.1 579.1 309.8 566.6 297.3L406.6 137.3C394.1 124.8 373.8 124.8 361.3 137.3C348.8 149.8 348.8 170.1 361.3 182.6L466.7 288L96 288C78.3 288 64 302.3 64 320C64 337.7 78.3 352 96 352L466.7 352L361.3 457.4C348.8 469.9 348.8 490.2 361.3 502.7C373.8 515.2 394.1 515.2 406.6 502.7L566.6 342.7z" />
              </svg>
            </div>
          </button>
          <button class="btn" @click="openStatusPage">
            <span>Sites</span>
            <div class="btn-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                <path
                  d="M566.6 342.6C579.1 330.1 579.1 309.8 566.6 297.3L406.6 137.3C394.1 124.8 373.8 124.8 361.3 137.3C348.8 149.8 348.8 170.1 361.3 182.6L466.7 288L96 288C78.3 288 64 302.3 64 320C64 337.7 78.3 352 96 352L466.7 352L361.3 457.4C348.8 469.9 348.8 490.2 361.3 502.7C373.8 515.2 394.1 515.2 406.6 502.7L566.6 342.7z" />
              </svg>
            </div>
          </button>
          <button class="g-btn" @click="openContact">
            <span style="position: relative; top: 1px">Get in Touch</span>
            <div class="g-btn-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                <path
                  d="M576 304C576 436.5 461.4 544 320 544C282.9 544 247.7 536.6 215.9 523.3L97.5 574.1C88.1 578.1 77.3 575.8 70.4 568.3C63.5 560.8 62 549.8 66.8 540.8L115.6 448.6C83.2 408.3 64 358.3 64 304C64 171.5 178.6 64 320 64C461.4 64 576 171.5 576 304z" />
              </svg>
            </div>
          </button>
        </div>
      </div>
    </div>
    <div @click="scrollToAbout" class="down" :class="{ hidden: scrolled }" data-delay="1.6">
      <svg fill="#5f656c" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
        <path
          d="M297.4 438.6C309.9 451.1 330.2 451.1 342.7 438.6L502.7 278.6C515.2 266.1 515.2 245.8 502.7 233.3C490.2 220.8 469.9 220.8 457.4 233.3L320 370.7L182.6 233.4C170.1 220.9 149.8 220.9 137.3 233.4C124.8 245.9 124.8 266.2 137.3 278.7L297.3 438.7z" />
      </svg>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, onUnmounted, ref } from 'vue';
import { socialIcons } from '@/site-icons';
import { siteConfig } from '@/site-config';

const scrolled = ref(false);

const apps = siteConfig.socials.map((social) => ({
  ...social,
  icon: socialIcons[social.id],
}));

const shellPrompt = `user@${siteConfig.brand.shellHandle}`;

const handleScroll = () => {
  scrolled.value = window.scrollY > 0;
};

const scrollToAbout = () => {
  document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
};

const openExternal = (url: string) => {
  window.open(url, '_blank', 'noopener,noreferrer');
};

const openContact = () => {
  window.location.href = siteConfig.contact.primaryCta;
};

const openStatusPage = () => {
  openExternal(siteConfig.statusPage);
};

const handleAppClick = (app: (typeof apps)[number]) => {
  if (app.external) {
    openExternal(app.url);
  } else {
    window.location.href = app.url;
  }
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
.down {
  width: 34px;
  cursor: pointer;
  position: fixed;
  bottom: 24px;
  animation: 1s linear infinite bounce;
  transition: opacity 0.3s ease !important;
}

@keyframes bounce {
  0%,
  100% {
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    transform: translateY(-25%);
  }

  50% {
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    transform: translateY(0);
  }
}

.btn-icon {
  margin-left: 10px;
  width: 18px;
  height: 18px;
  fill: white;
  position: relative;
  transition: all 0.3s ease !important;
}

.p-font {
  font-size: 1rem;
}

.avatar {
  width: 410px;
  height: 410px;
  border-radius: 32px;
  margin-right: 50px;
  object-fit: cover;
}

.animated-avatar {
  animation: avatar-scale 0.8s ease-out forwards;
  transform: scale(0);
  opacity: 0;
}

@keyframes avatar-scale {
  0% {
    transform: scale(0);
    opacity: 0;
  }

  100% {
    transform: scale(1);
    opacity: 1;
  }
}

.btn {
  padding: 10px 20px;
  border-radius: 999px;
  display: flex;
  align-items: center;
  border: none;
  font-weight: 600;
  color: white;
  font-family: 'Google Sans Code', sans-serif;
  margin-right: 15px;
  font-size: 16px;
  background-color: rgba(255, 255, 255, 0.1);
  cursor: pointer;
  transition: all 0.2s ease !important;
}

.btn:hover {
  background-color: rgba(255, 255, 255, 0.2);
}

.btn:hover .btn-icon {
  transform: translateX(5px);
}

.g-btn-icon {
  margin-left: 10px;
  width: 18px;
  height: 18px;
  fill: black;
  position: relative;
  transition: all 0.3s ease !important;
}

.g-btn {
  padding: 10px 20px;
  border-radius: 999px;
  display: flex;
  align-items: center;
  border: none;
  font-weight: 600;
  color: black;
  font-family: 'Google Sans Code', sans-serif;
  margin-right: 15px;
  font-size: 16px;
  background-color: rgba(255, 255, 255);
  cursor: pointer;
  transition: all 0.2s ease !important;
}

.g-btn:hover .g-btn-icon {
  transform: scale(1.25);
}

.btns {
  display: flex;
}

.bg {
  width: 44px;
  height: 44px;
  position: absolute;
  opacity: 0.2;
  border-radius: 999px;
  transition: opacity 0.2s ease !important;
}

.apps {
  display: flex;
  gap: 16px;
  margin-top: 24px;
  margin-bottom: 24px;
}

.app {
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  transition: transform 0.2s ease !important;
}

.app:hover {
  transform: scale(1.1);
}

.app:hover .bg {
  opacity: 0.3;
}

.icon :deep(svg) {
  width: 100%;
  height: 100%;
}

.header-container {
  width: 100vw;
  height: 100vh;
  color: #343434;
  display: flex;
  align-items: center;
  justify-content: center;
}

.note {
  border-left: 3px solid #a78bfa;
  height: 40px;
  padding: 8px;
  padding-inline: 16px;
  margin-bottom: 16px;
  font-size: 18px;
  color: white;
}

h1 {
  font-size: 60px;
  margin-bottom: 24px;
}

.animated {
  animation: typing-cursor 1.2s step-end infinite;
}

@keyframes typing-cursor {
  0%,
  100% {
    opacity: 1;
  }

  50% {
    opacity: 0;
  }
}

.content {
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 1152px;
}

.content-text {
  font-family: 'Google Sans Code', sans-serif;
}

.side-text {
  writing-mode: vertical-rl;
  position: fixed;
  top: 50%;
  transform: translateY(-50%);
  font-size: 1.25rem;
  left: 10px;
  line-height: 1.75rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  opacity: 1;
  transition: opacity 0.3s ease !important;
}

.hidden {
  opacity: 0 !important;
  pointer-events: none !important;
}

.animated-element {
  opacity: 0;
  transform: translateY(20px);
  animation: fade-in-up 0.255s ease-out forwards;
}

@keyframes fade-in-up {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.animated-element-1 {
  opacity: 0;
  animation: fade-in-up-1 0.255s ease-out forwards;
}

@keyframes fade-in-up-1 {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

@media (max-width: 1250px) {
  .avatar {
    max-width: 320px;
    max-height: 320px;
    width: 44vw;
    height: 44vw;
    border-radius: 24px;
    margin-right: 0;
    margin-bottom: 30px;
  }

  .content {
    flex-direction: column;
  }

  .btns {
    flex-wrap: wrap;
  }

  @media (max-height: 920px) {
    .avatar {
      max-width: 280px;
      max-height: 280px;
      width: 44vw;
      height: 44vw;
      border-radius: 24px;
      margin-right: 0;
      margin-bottom: 30px;
    }

    .content {
      flex-direction: column;
    }

    p {
      margin-bottom: 8px;
      font-size: 14px;
    }

    h1 {
      font-size: 38px;
      margin-bottom: 8px;
    }

    .p-font {
      font-size: 0.875rem;
    }

    .note {
      font-size: 14px;
      height: auto;
      margin-bottom: 12px !important;
    }

    .p-input,
    .p-eye {
      margin-bottom: 8px !important;
    }

    .p-font {
      margin-bottom: 16px !important;
    }

    .apps {
      margin-top: 12px;
      margin-bottom: 12px;
    }

    .content {
      width: calc(100vw - 66px);
    }

    .btns {
      flex-wrap: wrap;
    }

    .btn,
    .g-btn {
      margin-bottom: 15px;
    }
  }
}

@media (max-width: 648px) {
  .avatar {
    max-width: 280px;
    max-height: 280px;
    width: 44vw;
    height: 44vw;
    border-radius: 24px;
    margin-right: 0;
    margin-bottom: 30px;
  }

  .content {
    flex-direction: column;
  }

  .side-text {
    left: 0px;
  }

  p {
    margin-bottom: 8px;
    font-size: 14px;
  }

  h1 {
    font-size: 38px;
    margin-bottom: 8px;
  }

  .p-font {
    font-size: 0.875rem;
  }

  .note {
    font-size: 14px;
    height: auto;
    margin-bottom: 12px !important;
  }

  .p-input,
  .p-eye {
    margin-bottom: 8px !important;
  }

  .p-font {
    margin-bottom: 16px !important;
  }

  .apps {
    margin-top: 12px;
    margin-bottom: 12px;
  }

  .content {
    width: calc(100vw - 66px);
  }

  .btns {
    flex-wrap: wrap;
  }

  .btn,
  .g-btn {
    margin-bottom: 15px;
  }
}

.cursor-pointer {
  cursor: pointer;
}
</style>
