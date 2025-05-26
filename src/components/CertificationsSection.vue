<template>
  <section class="section-testimonials">
    <div class="container-4">
      <div class="certifications-header">
        <h2 class="certifications-title">Certifications</h2>
        <p class="certifications-subtitle">Further Certifications</p>
      </div>
    </div>
    <div class="container-5">
      <div class="certifications-grid">
        <div class="certifications-column">
          <article class="certification-card">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/c53e6104cf973fd81f5b4b777a64e39e1d06776e?placeholderIfAbsent=true&apiKey=d2ab0b210c4c42ff93ea2ccc3ba7e6d7"
              class="certification-image"
              alt="Certification"
            />
          </article>
          <article class="certification-card-empty"></article>
        </div>
        <div class="certifications-column">
          <article class="certification-card-2">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/649f45aea31f312979fd29e6f69bfacf4adfacdb?placeholderIfAbsent=true&apiKey=d2ab0b210c4c42ff93ea2ccc3ba7e6d7"
              class="certification-image-2"
              alt="Certification"
            />
          </article>
          <article class="certification-card-empty-2"></article>
          <div class="certifications-spacer"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.section-testimonials {
  z-index: 0;
  display: flex;
  min-height: 1291px;
  width: 100%;
  padding-top: 160px;
  flex-direction: column;
  align-items: center;
  justify-content: start;
}

@media (max-width: 991px) {
  .section-testimonials {
    max-width: 100%;
    padding-top: 100px;
  }
}

@media (max-width: 640px) {
  .section-testimonials {
    padding-bottom: 58px;
    margin-bottom: -322px;
  }
}

.container-4 {
  border-radius: 16px;
  display: flex;
  width: 1200px;
  max-width: 100%;
  align-items: end;
  font-weight: 400;
  text-align: center;
  justify-content: space-between;
}

.certifications-header {
  display: flex;
  min-width: 240px;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  flex: 1;
  flex-shrink: 1;
  flex-basis: 0%;
}

@media (max-width: 991px) {
  .certifications-header {
    max-width: 100%;
  }
}

.certifications-title {
  color: #dac5a7;
  text-shadow: 0px -34px 4px rgba(218, 197, 167, 0.15);
  font-family:
    Stardom,
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
  font-size: 128px;
  line-height: 1.1;
  margin: 0;
}

@media (max-width: 991px) {
  .certifications-title {
    max-width: 100%;
    font-size: 40px;
  }
}

.certifications-subtitle {
  color: #fbead2;
  font-family:
    Chillax,
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
  font-size: 18px;
  line-height: 1.6;
  margin-top: 16px;
}

@media (max-width: 991px) {
  .certifications-subtitle {
    max-width: 100%;
  }
}

.container-5 {
  margin-top: 64px;
  width: 1200px;
  max-width: 100%;
}

@media (max-width: 991px) {
  .container-5 {
    margin-top: 40px;
  }
}

.certifications-grid {
  display: flex;
  width: 100%;
  align-items: start;
  gap: 32px;
  justify-content: start;
  flex-wrap: wrap;
}

@media (max-width: 991px) {
  .certifications-grid {
    max-width: 100%;
  }
}

.certifications-column {
  min-width: 240px;
  flex: 1;
  flex-shrink: 1;
  flex-basis: 0%;
}

@media (max-width: 991px) {
  .certifications-column {
    max-width: 100%;
  }
}

.certification-card {
  justify-content: center;
  align-items: fill;
  border-radius: 2px;
  border: 1px solid var(--border-default, rgba(218, 197, 167, 0.15));
  backdrop-filter: blur(15px);
  display: flex;
  min-height: 462px;
  width: 561px;
  max-width: 100%;
  padding: 24px 12px;
  flex-direction: column;
  background-color: rgba(218, 197, 167, 0.05);
}

.certification-image {
  aspect-ratio: 1.3;
  object-fit: contain;
  object-position: center;
  width: 100%;
  border-radius: 3px;
}

.certification-card-empty {
  border-radius: 2px;
  border: 1px solid var(--border-default, rgba(218, 197, 167, 0.15));
  backdrop-filter: blur(15px);
  display: flex;
  min-height: 120px;
  margin-top: 32px;
  width: 95.8%;
  padding: 24px 12px;
  background-color: rgba(218, 197, 167, 0.05);
}

@media (max-width: 991px) {
  .certification-card-empty {
    max-width: 100%;
    display: contain;
  }
}

@media (max-width: 640px) {
  .certification-card-empty {
    display: none;
  }
}

.certification-card-2 {
  justify-content: center;
  align-items: fill;
  border-radius: 2px;
  border: 1px solid var(--border-default, rgba(218, 197, 167, 0.15));
  background-color: rgba(218, 197, 167, 0.05);
  display: flex;
  min-height: 462px;
  width: 561px;
  max-width: 100%;
  padding: 24px 12px;
  flex-direction: column;
}

@media (max-width: 991px) {
  .certification-card-2 {
    max-width: 100%;
    padding: 19px 20px;
  }
}

@media (max-width: 640px) {
  .certification-card-2 {
    min-height: 288px;
  }
}

.certification-image-2 {
  aspect-ratio: 1.3;
  object-fit: contain;
  object-position: center;
  width: 100%;
  max-width: 100%;
  border-radius: 3px;
}

.certification-card-empty-2 {
  border-radius: 2px;
  border: 1px solid var(--border-default, rgba(218, 197, 167, 0.15));
  background-color: rgba(218, 197, 167, 0.05);
  display: flex;
  min-height: 120px;
  margin-top: 32px;
  width: 95.8%;
  padding: 24px 12px;
}

@media (max-width: 991px) {
  .certification-card-empty-2 {
    max-width: 100%;
    display: flex;
  }
}

@media (max-width: 640px) {
  .certification-card-empty-2 {
    display: none;
  }
}

.certifications-spacer {
  border-radius: 2px;
  margin-top: 32px;
  width: 100%;
}

@media (max-width: 991px) {
  .certifications-spacer {
    max-width: 100%;
  }
}
</style>
