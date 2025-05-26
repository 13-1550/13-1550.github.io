<template>
  <section class="section-logos">
    <div class="logo-container">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/968cde70e1ce7be194c589bce50d4a78bcd39341?placeholderIfAbsent=true&apiKey=d2ab0b210c4c42ff93ea2ccc3ba7e6d7"
        class="logo-image"
        alt="Partner logos"
      />
    </div>
  </section>
</template>

<style scoped>
.section-logos {
  z-index: 0;
  display: flex;
  min-height: 322px;
  width: 100%;
  padding-top: 7px;
  flex-direction: column;
  align-items: center;
  justify-content: start;
}

@media (max-width: 991px) {
  .section-logos {
    max-width: 100%;
  }
}

@media (max-width: 640px) {
  .section-logos {
    min-height: 0px;
    margin-top: -1px;
    padding-bottom: 200px;
    justify-content: flex-start;
    align-items: center;
    margin-right: 4px;
    margin-bottom: -102px;
  }
}

.logo-container {
  max-width: 100%;
  width: 1920px;
}

.logo-image {
  aspect-ratio: 5.87;
  object-fit: contain;
  object-position: center;
  width: 100%;
}

@media (max-width: 991px) {
  .logo-image {
    max-width: 100%;
  }
}
</style>
