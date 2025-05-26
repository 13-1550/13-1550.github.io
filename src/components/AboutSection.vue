<template>
  <section class="section-services">
    <div class="container">
      <div class="grid-4">
        <article id="about" class="card">
          <div class="card-content">
            <div class="card-header">
              <div class="card-number">01</div>
              <h2 class="card-title">About me</h2>
            </div>
            <p class="card-description">
              I have always been fascinated by the capabilities of artificial
              intelligence, this has made me interested in the technicalities of
              building machine learning models and exploring their limits. I
              aspire to add something new to the field and build solutions that
              make day-to-day tasks easier by utilizing AI technologies.
            </p>
          </div>
        </article>
        <article class="card">
          <div class="card-content">
            <div class="card-header">
              <div class="card-number">02</div>
              <h2 class="card-title">STudies</h2>
            </div>
            <p class="card-description">
              Currently perusing a bachelor's degree in computer science with a
              concentration in artificial intelligence in Effat University.
            </p>
          </div>
          <div class="button-text"></div>
        </article>
        <article class="card">
          <div class="card-content">
            <div class="card-header">
              <div class="card-number">03</div>
              <h2 class="card-title">Field of interest</h2>
            </div>
            <p class="card-description">
              Interested in machine learning, IOT, and app development.
            </p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.section-services {
  align-self: center;
  z-index: 0;
  display: flex;
  max-width: 100%;
  width: 1920px;
  padding-left: 64px;
  padding-right: 64px;
  padding-top: 80px;
  flex-direction: column;
  align-items: center;
  justify-content: start;
}

@media (max-width: 991px) {
  .section-services {
    padding-left: 20px;
    padding-right: 20px;
  }
}

@media (max-width: 640px) {
  .section-services {
    margin-top: -3px;
  }
}

.container {
  width: 1400px;
  max-width: 100%;
}

.grid-4 {
  display: flex;
  height: 314px;
  width: 100%;
  align-items: start;
  gap: 32px;
  justify-content: start;
  flex-wrap: wrap;
}

@media (max-width: 991px) {
  .grid-4 {
    max-width: 100%;
  }
}

.card {
  justify-content: center;
  align-items: stretch;
  border-radius: 2px;
  border: 1px solid var(--border-default, rgba(218, 197, 167, 0.15));
  display: flex;
  min-width: 240px;
  padding: 48px;
  flex-direction: column;
  flex: 1;
  flex-shrink: 1;
  flex-basis: 0%;
  background-color: rgba(218, 197, 167, 0.05);
}

@media (max-width: 991px) {
  .card {
    max-width: 100%;
    padding: 20px;
  }
}

.card-content {
  width: 100%;
}

.card-header {
  width: 100%;
  font-family:
    Satoshi,
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
  text-transform: uppercase;
}

.card-number {
  color: #fbead2;
  font-size: 13px;
  font-weight: 400;
  line-height: 1.6;
  letter-spacing: 1.5px;
}

.card-title {
  color: #dac5a7;
  font-size: 24px;
  font-weight: 300;
  line-height: 1.3;
  letter-spacing: 1px;
  margin-top: 4px;
  margin: 4px 0 0 0;
}

.card-description {
  color: #fbead2;
  font-family:
    Chillax,
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 29px;
  margin-top: 8px;
}

.button-text {
  align-self: start;
  display: flex;
  margin-top: 32px;
  align-items: center;
  gap: 12px;
  justify-content: start;
}
</style>
