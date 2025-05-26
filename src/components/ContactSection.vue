<template>
  <section class="section-contact">
    <img
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/12a85e643233361d157eb1a9450338fa3fced9ce?placeholderIfAbsent=true&apiKey=d2ab0b210c4c42ff93ea2ccc3ba7e6d7"
      class="contact-background"
      alt="Background decoration"
    />
    <div class="container-6">
      <h2 id="contac" class="contact-heading">CONTACT<br />ME</h2>
      <div class="contact-content">
        <article class="contact-card">
          <div class="contact-card-content">
            <p class="contact-label">Contact</p>
            <h3 class="contact-title">Let's get in touch.</h3>
          </div>
        </article>
        <div class="social-links">
          <div class="social-links-container">
            <a
              href="https://github.com/13-1550"
              target="_blank"
              class="social-card"
            >
              <div class="social-info">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/8f21722fdaf95646a72a1485bab424bb4523c651?placeholderIfAbsent=true&apiKey=d2ab0b210c4c42ff93ea2ccc3ba7e6d7"
                  class="social-icon"
                  alt="GitHub icon"
                />
                <div class="social-placeholder"></div>
                <p class="social-name">Github</p>
              </div>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/05282c2dcaeb11fbed547f99e0fd302d45c299c5?placeholderIfAbsent=true&apiKey=d2ab0b210c4c42ff93ea2ccc3ba7e6d7"
                class="social-arrow"
                alt="Arrow"
              />
            </a>
            <a
              href="https://www.linkedin.com/public-profile/settings?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_self_edit_contact-info%3BlsHcghG5QS%2BTqEVNLYPyMQ%3D%3D"
              target="_blank"
              class="social-card"
            >
              <div class="social-info">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/e822ba8c859bef2201540534be85b2763bebd352?placeholderIfAbsent=true&apiKey=d2ab0b210c4c42ff93ea2ccc3ba7e6d7"
                  class="social-icon"
                  alt="LinkedIn icon"
                />
                <p class="social-name">Linked in</p>
              </div>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/c8442d8b6b971487ae7e6f86192bb069549d63b2?placeholderIfAbsent=true&apiKey=d2ab0b210c4c42ff93ea2ccc3ba7e6d7"
                class="social-arrow"
                alt="Arrow"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="section-banner">
      <div class="banner-line-top"></div>
      <div class="banner-line-bottom"></div>
      <div class="banner-content">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/0621fba5e1d3226394987d71616e06d731e94814?placeholderIfAbsent=true&apiKey=d2ab0b210c4c42ff93ea2ccc3ba7e6d7"
          class="banner-image"
          alt="Banner decoration"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
.section-contact {
  align-self: center;
  position: relative;
  z-index: 0;
  display: flex;
  min-height: 875px;
  width: 100%;
  max-width: 1920px;
  padding-top: 99px;
  padding-bottom: 35px;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;
}

@media (max-width: 991px) {
  .section-contact {
    max-width: 100%;
  }
}

.contact-background {
  aspect-ratio: 2.33;
  object-fit: contain;
  object-position: center;
  width: 1097px;
  position: absolute;
  z-index: 0;
  max-width: 100%;
  left: 0px;
  bottom: -61px;
  height: 837px;
}

@media (max-width: 640px) {
  .contact-background {
    height: 999px;
    padding-bottom: 22px;
    margin-bottom: -17px;
    width: 1097px;
    margin-top: -76px;
  }
}

.container-6 {
  position: relative;
  z-index: 0;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: start;
}

@media (max-width: 991px) {
  .container-6 {
    max-width: 100%;
  }
}

@media (max-width: 640px) {
  .container-6 {
    padding-top: 6px;
    margin-top: -18px;
  }
}

.contact-heading {
  color: rgba(255, 236, 210, 1);
  text-shadow: 20px 17px 6px rgba(255, 244, 229, 0.25);
  font-size: 180px;
  font-family:
    Boska,
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
  font-weight: 900;
  line-height: 277px;
  letter-spacing: 17px;
  text-align: right;
  text-transform: uppercase;
  align-self: stretch;
  z-index: 0;
  margin: auto 0;
  width: 830px;
  margin-left: 66px;
  padding-top: 53px;
}

@media (max-width: 991px) {
  .contact-heading {
    max-width: 100%;
    font-size: 40px;
    line-height: 68px;
  }
}

.contact-content {
  align-self: stretch;
  z-index: 0;
  min-width: 240px;
  margin: auto 0;
  font-family:
    Satoshi,
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
  width: 1042px;
  padding-left: 200px;
  margin-left: 87px;
  margin-right: 63px;
}

@media (max-width: 991px) {
  .contact-content {
    max-width: 100%;
  }
}

@media (max-width: 640px) {
  .contact-content {
    justify-content: center;
    display: inline-grid;
    flex-direction: column;
    padding-right: 712px;
    padding-top: 112px;
    margin-top: auto;
    min-width: 228px;
    margin-right: -1px;
    margin-bottom: auto;
    margin-left: -160px;
    width: 872px;
    align-items: center;
    padding-bottom: 3px;
  }
}

.contact-card {
  justify-content: center;
  align-items: stretch;
  border-radius: 2px;
  border: 1px solid var(--border-default, rgba(218, 197, 167, 0.15));
  backdrop-filter: blur(15px);
  display: flex;
  width: 100%;
  padding: 43px 45px 48px 48px;
  flex-direction: column;
  background-color: rgba(218, 197, 167, 0.05);
}

@media (max-width: 991px) {
  .contact-card {
    max-width: 100%;
    padding: 43px 20px 48px;
  }
}

@media (max-width: 640px) {
  .contact-card {
    padding-left: 19px;
  }
}

.contact-card-content {
  width: 100%;
}

@media (max-width: 991px) {
  .contact-card-content {
    max-width: 100%;
  }
}

.contact-label {
  color: #fbead2;
  font-size: 13px;
  font-weight: 400;
  line-height: 1.6;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  margin: 0;
}

.contact-title {
  color: #dac5a7;
  font-size: 48px;
  font-weight: 300;
  line-height: 1.1;
  margin-top: 8px;
  margin: 8px 0 0 0;
}

@media (max-width: 991px) {
  .contact-title {
    max-width: 100%;
    font-size: 40px;
  }
}

.social-links {
  margin-top: 16px;
  width: 100%;
  font-size: 13px;
  color: #dac5a7;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  line-height: 1.6;
}

@media (max-width: 991px) {
  .social-links {
    max-width: 100%;
  }
}

.social-links-container {
  display: flex;
  width: 100%;
  align-items: start;
  gap: 16px;
  justify-content: start;
  flex-wrap: wrap;
}

@media (max-width: 991px) {
  .social-links-container {
    max-width: 100%;
  }
}

.social-card {
  justify-content: space-between;
  align-items: center;
  border-radius: 2px;
  border: 1px solid var(--border-default, rgba(218, 197, 167, 0.15));
  backdrop-filter: blur(15px);
  display: flex;
  min-width: 240px;
  padding: 16px;
  gap: 40px 100px;
  white-space: nowrap;
  flex: 1;
  flex-shrink: 1;
  flex-basis: 0%;
  cursor: pointer;
  pointer-events: auto;
  background-color: rgba(218, 197, 167, 0.05);
  text-decoration: none;
}

@media (max-width: 991px) {
  .social-card {
    white-space: initial;
  }
}

.social-info {
  align-self: stretch;
  display: flex;
  margin: auto 0;
  align-items: center;
  gap: 16px;
  justify-content: start;
}

@media (max-width: 991px) {
  .social-info {
    white-space: initial;
  }
}

.social-icon {
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 28px;
  align-self: stretch;
  margin: auto 0;
  flex-shrink: 0;
}

.social-placeholder {
  align-self: stretch;
  display: flex;
  margin: auto 0;
  width: 24px;
  flex-shrink: 0;
  height: 24px;
}

.social-name {
  color: #dac5a7;
  align-self: stretch;
  margin: auto 0;
}

.social-arrow {
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 16px;
  align-self: stretch;
  margin: auto 0;
  flex-shrink: 0;
}

.section-banner {
  align-self: start;
  position: absolute;
  z-index: 0;
  display: flex;
  min-width: 240px;
  width: 1920px;
  padding-left: 25px;
  flex-direction: column;
  left: -26px;
  top: -22px;
  height: 96px;
}

@media (max-width: 991px) {
  .section-banner {
    max-width: 100%;
  }
}

@media (max-width: 640px) {
  .section-banner {
    padding-top: 3px;
  }
}

.banner-line-top {
  display: flex;
  width: 1894px;
  flex-shrink: 0;
  max-width: 100%;
  height: 1px;
  background-color: rgba(218, 197, 167, 0.15);
}

.banner-line-bottom {
  display: flex;
  width: 1894px;
  flex-shrink: 0;
  max-width: 100%;
  height: 1px;
  background-color: rgba(218, 197, 167, 0.15);
}

.banner-content {
  border-radius: 2px;
  background-color: rgba(218, 197, 167, 0.1);
  display: flex;
  margin-right: -25px;
  min-height: 94px;
  padding-top: 16px;
  padding-bottom: 16px;
  align-items: start;
  gap: 32px;
  justify-content: start;
}

@media (max-width: 640px) {
  .banner-content {
    padding-top: 44px;
    margin-top: -2px;
  }
}

.banner-image {
  aspect-ratio: 31.25;
  object-fit: contain;
  object-position: center;
  width: 1920px;
  min-width: 240px;
}
</style>
