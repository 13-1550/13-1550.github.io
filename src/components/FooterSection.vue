<template>
  <footer class="footer">
    <div class="footer-container">
      <div class="footer-content">
        <div class="footer-column">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/775b14de1f0f256d8d02dd07008c6a53e3c409c8?placeholderIfAbsent=true&apiKey=d2ab0b210c4c42ff93ea2ccc3ba7e6d7"
            class="footer-logo"
            alt="Logo"
          />
          <div class="contact-info">
            <div class="contact-item">
              <div class="contact-badge">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/5e4a0615721a73dd9a9ac184f359b2ab45f7086a?placeholderIfAbsent=true&apiKey=d2ab0b210c4c42ff93ea2ccc3ba7e6d7"
                  class="contact-icon"
                  alt="Email icon"
                />
              </div>
              <p class="contact-text">Howynaa@gmail.com</p>
            </div>
            <div class="contact-item">
              <div class="contact-badge">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/8ee6a9d76d1e0eaa7186857a1f6611f5f73eb8f3?placeholderIfAbsent=true&apiKey=d2ab0b210c4c42ff93ea2ccc3ba7e6d7"
                  class="contact-icon"
                  alt="GitHub icon"
                />
              </div>
              <p class="contact-text">13-1550</p>
            </div>
            <div class="contact-item">
              <div class="contact-badge">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/9687ffaa68be23b170db36f73e8d7ff79c1ab9de?placeholderIfAbsent=true&apiKey=d2ab0b210c4c42ff93ea2ccc3ba7e6d7"
                  class="contact-icon"
                  alt="Location icon"
                />
              </div>
              <p class="contact-text">Jeddah, Saudi Arabia</p>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <div class="to-top-container">
          <button class="to-top-button" @click="scrollToTop">To Top</button>
          <div class="to-top-badge">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/80ea710b18f16d3a9477ebfec19a527242ea1530?placeholderIfAbsent=true&apiKey=d2ab0b210c4c42ff93ea2ccc3ba7e6d7"
              class="to-top-icon"
              alt="Arrow up icon"
            />
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
</script>

<style scoped>
.footer {
  align-items: center;
  z-index: 0;
  display: flex;
  width: 100%;
  padding: 64px 16px;
  flex-direction: column;
  justify-content: center;
  background-color: rgba(218, 197, 167, 0.05);
}

@media (max-width: 991px) {
  .footer {
    max-width: 100%;
  }
}

.footer-container {
  width: 1600px;
  max-width: 100%;
}

.footer-content {
  display: flex;
  width: 100%;
  align-items: stretch;
  gap: 40px 64px;
  justify-content: start;
}

@media (max-width: 991px) {
  .footer-content {
    max-width: 100%;
  }
}

.footer-column {
  border-radius: 16px;
  display: flex;
  min-width: 240px;
  width: 460px;
  flex-direction: column;
  align-items: start;
  justify-content: space-between;
}

.footer-logo {
  aspect-ratio: 1.04;
  object-fit: contain;
  object-position: center;
  width: 81px;
}

.contact-info {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: start;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 16px;
  justify-content: start;
}

.contact-item + .contact-item {
  margin-top: 16px;
}

.contact-badge {
  justify-content: center;
  align-items: center;
  border-radius: 500px;
  border: 1px solid var(--border-default, rgba(218, 197, 167, 0.15));
  backdrop-filter: blur(15px);
  align-self: stretch;
  display: flex;
  margin: auto 0;
  min-height: 38px;
  padding: 0 10px;
  flex-direction: column;
  width: 38px;
  height: 38px;
  background-color: rgba(218, 197, 167, 0.05);
}

.contact-icon {
  aspect-ratio: 1.29;
  object-fit: contain;
  object-position: center;
  width: 18px;
  border-radius: 0;
}

.contact-text {
  color: #fbead2;
  text-align: justify;
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
  margin: auto 0;
}

.footer-bottom {
  border-radius: 16px;
  display: flex;
  margin-top: 80px;
  width: 100%;
  align-items: center;
  gap: 40px 48px;
  justify-content: start;
  flex-wrap: wrap;
}

@media (max-width: 991px) {
  .footer-bottom {
    max-width: 100%;
    margin-top: 40px;
  }
}

.to-top-container {
  align-self: stretch;
  display: flex;
  margin: auto 0;
  align-items: center;
  gap: 16px;
  justify-content: start;
}

.to-top-button {
  color: #dac5a7;
  text-align: justify;
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
  margin: auto 0;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
}

.to-top-badge {
  justify-content: center;
  align-items: center;
  border-radius: 500px;
  border: 1px solid var(--border-default, rgba(218, 197, 167, 0.15));
  backdrop-filter: blur(15px);
  display: flex;
  width: 46px;
  height: 46px;
  background-color: rgba(218, 197, 167, 0.05);
  cursor: pointer;
}

.to-top-icon {
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 20px;
}
</style>
