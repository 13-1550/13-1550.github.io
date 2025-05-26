<template>
  <section class="section-hero">
    <div class="image-wrapper">
      <div class="hero-content">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/880cb023bab2c190c0a9d8bc7c32d4c315a60bc2?placeholderIfAbsent=true&apiKey=d2ab0b210c4c42ff93ea2ccc3ba7e6d7"
          class="hero-image"
          alt="Background image"
        />
        <button class="hero-button"></button>
      </div>
      <div class="hero-text">
        <div class="name-container">
          <h1 class="name">Howyna Ahmed</h1>
          <p class="title">Computer Science Student</p>
        </div>
        <div class="about-badge-container">
          <div class="badge" @click="scrollToAbout">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/036b2f5622c16930aa266de46fe7fb790de518b8?placeholderIfAbsent=true&apiKey=d2ab0b210c4c42ff93ea2ccc3ba7e6d7"
              class="badge-icon"
              alt="About icon"
            />
          </div>
          <p class="about-text">ِِAbout Me</p>
        </div>
      </div>
      <div class="divider"></div>
    </div>
  </section>
</template>

<script setup>
const scrollToAbout = () => {
  document.getElementById("about").scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};
</script>

<style scoped>
.section-hero {
  z-index: 0;
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;
}

@media (max-width: 991px) {
  .section-hero {
    max-width: 100%;
  }
}

.image-wrapper {
  display: flex;
  width: 100%;
  padding-left: 18px;
  padding-right: 18px;
  padding-bottom: 71px;
  flex-direction: column;
  overflow: hidden;
  align-items: center;
}

@media (max-width: 991px) {
  .image-wrapper {
    max-width: 100%;
    
  }
}

.hero-content {
  display: flex;
  flex-direction: column;
  position: relative;
  margin-left: 25px;
  width: 726px;
  max-width: 100%;
}

@media (max-width: 640px) {
  .hero-content {
    margin-top: 200px;
  }
}

.hero-image {
  position: absolute;
  inset: 0;
  height: 100%;
  height: 400px;
  width: 400px;
  width: 100%;
  object-fit: contain;
  object-position: center;
  opacity: 75%;
}

.hero-button {
  all: unset;
  position: relative;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  box-sizing: border-box;
  margin-top: 65px;
  appearance: none;
  padding-top: 15px;
  padding-bottom: 15px;
  padding-left: 200px;
  padding-right: 110px;
  color: white;
  border-radius: 4px;
  text-align: center;
  cursor: pointer;
  margin-right: 682px;
  margin-left: -46px;
  width: auto;
  flex-grow: 0;
}

.hero-text {
  display: flex;
  margin-left: 25px;
  flex-direction: column;
  align-items: center;
  justify-content: start;
}

@media (max-width: 991px) {
  .hero-text {
    max-width: 100%;
  }
}

.name-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: 300;
  text-align: center;
  justify-content: start;
}

@media (max-width: 991px) {
  .name-container {
    max-width: 100%;
  }
}

.name {
  color: #dac5a7;
  font-family:
    Gambetta,
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
  font-size: 160px;
  line-height: 1;
  margin: 0;
}

@media (max-width: 991px) {
  .name {
    max-width: 100%;
    font-size: 40px;
  }
}

.title {
  color: #fbead2;
  font-family:
    Chillax,
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
  font-size: 24px;
  margin-top: 16px;
}

@media (max-width: 991px) {
  .title {
    max-width: 100%;
  }
}

.about-badge-container {
  display: flex;
  margin-top: 48px;
  align-items: center;
  gap: 16px;
  justify-content: start;
}

@media (max-width: 991px) {
  .about-badge-container {
    margin-top: 40px;
  }
}

.badge {
  justify-content: center;
  align-items: center;
  border-radius: 500px;
  border: 1px solid var(--border-default, rgba(218, 197, 167, 0.15));
  backdrop-filter: blur(15px);
  align-self: stretch;
  display: flex;
  margin-top: auto;
  margin-bottom: auto;
  min-height: 46px;
  padding-left: 12px;
  padding-right: 12px;
  flex-direction: column;
  width: 46px;
  height: 46px;
  background-color: rgba(218, 197, 167, 0.05);
  cursor: pointer;
}

.badge-icon {
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 20px;
}

.about-text {
  color: #dac5a7;
  font-family:
    Satoshi,
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
  font-size: 13px;
  font-weight: 400;
  line-height: 1.6;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  align-self: stretch;
  margin-top: auto;
  margin-bottom: auto;
}

.divider {
  border-color: rgba(251, 240, 224, 1);
  border-style: solid;
  border-width: 2px;
  align-self: stretch;
  margin-top: 88px;
  flex-shrink: 0;
  height: 2px;
}

@media (max-width: 991px) {
  .divider {
    max-width: 100%;
    margin-top: 40px;
  }
}
</style>
