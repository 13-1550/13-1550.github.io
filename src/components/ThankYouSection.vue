<template>
  <section class="section-cta">
    <div class="section-banner-2">
      <div class="banner-line-top"></div>
      <div class="banner-line-bottom"></div>
      <div class="banner-content">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/a5286a6735c6f1f9b499f78460212691dfa2ea52?placeholderIfAbsent=true&apiKey=d2ab0b210c4c42ff93ea2ccc3ba7e6d7"
          class="banner-image"
          alt="Banner decoration"
        />
      </div>
    </div>
    <div class="thank-you-content">
      <div class="thank-you-text">
        <h2 class="thank-you-title">Thank you</h2>
        <p class="thank-you-subtitle">Always aspiring to be better</p>
      </div>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/72224489862a1148b253235236acd3647ce90f68?placeholderIfAbsent=true&apiKey=d2ab0b210c4c42ff93ea2ccc3ba7e6d7"
        class="decoration-left"
        alt="Decorative element"
      />
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/72224489862a1148b253235236acd3647ce90f68?placeholderIfAbsent=true&apiKey=d2ab0b210c4c42ff93ea2ccc3ba7e6d7"
        class="decoration-right"
        alt="Decorative element"
      />
    </div>
  </section>
</template>

<style scoped>
.section-cta {
  z-index: 0;
  width: 100%;
  overflow: hidden;
}

@media (max-width: 991px) {
  .section-cta {
    max-width: 100%;
  }
}

.section-banner-2 {
  width: 100%;
}

@media (max-width: 991px) {
  .section-banner-2 {
    max-width: 100%;
  }
}

@media (max-width: 640px) {
  .section-banner-2 {
    padding-left: 1px;
    margin-bottom: -41px;
    margin-top: -24px;
  }
}

.banner-line-top {
  display: flex;
  min-height: 1px;
  width: 100%;
  background-color: rgba(218, 197, 167, 0.15);
}

@media (max-width: 991px) {
  .banner-line-top {
    max-width: 100%;
  }
}

.banner-line-bottom {
  display: flex;
  min-height: 1px;
  width: 100%;
  background-color: rgba(218, 197, 167, 0.15);
}

@media (max-width: 991px) {
  .banner-line-bottom {
    max-width: 100%;
  }
}

.banner-content {
  border-radius: 2px;
  background-color: rgba(218, 197, 167, 0.1);
  display: flex;
  width: 100%;
  padding-top: 16px;
  padding-bottom: 16px;
  align-items: start;
  gap: 32px;
  justify-content: start;
}

@media (max-width: 991px) {
  .banner-content {
    max-width: 100%;
  }
}

@media (max-width: 640px) {
  .banner-content {
    padding-top: 12px;
    margin-top: 20px;
  }
}

.banner-image {
  aspect-ratio: 31.25;
  object-fit: contain;
  object-position: center;
  width: 1920px;
  min-width: 240px;
  flex: 1;
  flex-shrink: 1;
  flex-basis: 0%;
}

@media (max-width: 991px) {
  .banner-image {
    max-width: 100%;
  }
}

.thank-you-content {
  align-items: start;
  position: relative;
  display: flex;
  width: 100%;
  padding: 160px 48px;
  flex-direction: column;
  font-weight: 400;
  text-align: center;
  justify-content: start;
  background-color: rgba(218, 197, 167, 0.05);
}

@media (max-width: 991px) {
  .thank-you-content {
    max-width: 100%;
    padding: 100px 20px;
  }
}

@media (max-width: 640px) {
  .thank-you-content {
    margin-top: -13px;
    margin-bottom: -4px;
  }
}

.thank-you-text {
  box-shadow: 10px -4px 7px rgba(97, 5, 6, 1);
  align-self: center;
  z-index: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
}

@media (max-width: 991px) {
  .thank-you-text {
    max-width: 100%;
  }
}

.thank-you-title {
  color: #dac5a7;
  font-family:
    Stardom,
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
  font-size: 128px;
  line-height: 1;
  letter-spacing: 10px;
  text-shadow: 8px 1px 3px rgba(84, 5, 5, 1);
  margin: 0;
}

@media (max-width: 991px) {
  .thank-you-title {
    max-width: 100%;
    font-size: 40px;
  }
}

.thank-you-subtitle {
  color: #fff0db;
  font-family:
    Chillax,
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
  font-size: 20px;
  line-height: 34px;
  margin-top: 8px;
}

@media (max-width: 991px) {
  .thank-you-subtitle {
    max-width: 100%;
  }
}

.decoration-left {
  aspect-ratio: 0.7;
  object-fit: contain;
  object-position: center;
  width: 170px;
  position: absolute;
  z-index: 0;
  max-width: 100%;
  left: 11px;
  top: 0px;
  height: 242px;
}

@media (max-width: 640px) {
  .decoration-left {
    left: -69px;
    top: -9px;
  }
}

.decoration-right {
  aspect-ratio: 0.7;
  object-fit: contain;
  object-position: center;
  width: 170px;
  position: absolute;
  z-index: 0;
  max-width: 100%;
  right: 0px;
  bottom: 0px;
  height: 242px;
}

@media (max-width: 640px) {
  .decoration-right {
    left: 256px;
    top: 19px;
  }
}
</style>
