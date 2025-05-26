<template>
  <section class="section-work">
    <div class="container-3">
      <h2 id="proj" class="projects-title">Projects</h2>
      <div class="projects-grid">
        <div class="projects-row">
          <div class="project-column">
            <div class="project-image-wrapper">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/6fadfa4674981e80cad374c166297277802f4af7?placeholderIfAbsent=true&apiKey=d2ab0b210c4c42ff93ea2ccc3ba7e6d7"
                class="project-image"
                alt="Python project"
              />
              <div class="project-info">
                <h3 class="project-title">
                  Entry form to excel sheet using Python
                </h3>
                <p class="project-category">App Development</p>
              </div>
            </div>
          </div>
          <div class="project-column">
            <div class="project-image-container">
              <div class="project-image-wrapper-2">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/547ccc587354bb76e1050cc439968720dd8f87ff?placeholderIfAbsent=true&apiKey=d2ab0b210c4c42ff93ea2ccc3ba7e6d7"
                  class="project-image-2"
                  alt="NLP project"
                />
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/29af3515f5f40bd146ff2bddec62ae1d850ad8f8?placeholderIfAbsent=true&apiKey=d2ab0b210c4c42ff93ea2ccc3ba7e6d7"
                  class="project-image-3"
                  alt="NLP project details"
                />
                <div class="project-info-2">
                  <h3 class="project-title-2">
                    NLP model for detecting cyber bullying using GabHate Corpus,
                    Urban Dictionary API, and distilBERT.
                  </h3>
                  <p class="project-category-2">Machine Learning</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="projects-row-2">
          <div class="project-column-2">
            <div class="project-image-wrapper-3">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/515a59c45d186fe7c74d171e9e178265b373dc96?placeholderIfAbsent=true&apiKey=d2ab0b210c4c42ff93ea2ccc3ba7e6d7"
                class="project-image-4"
                alt="Website project"
              />
              <div class="project-info-3">
                <h3 class="project-title-3">
                  Website for a hypothetical company
                </h3>
                <p class="project-category-3">Web design and Development</p>
              </div>
            </div>
          </div>
          <div class="project-column-3">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/1f9c488a6226b92582eece089bbde9dc04edce4b?placeholderIfAbsent=true&apiKey=d2ab0b210c4c42ff93ea2ccc3ba7e6d7"
              class="project-image-5"
              alt="Additional project"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.section-work {
  z-index: 0;
  display: flex;
  min-height: 1512px;
  width: 100%;
  padding: 160px 64px 0;
  align-items: start;
  gap: 40px 40px;
  justify-content: center;
}

@media (max-width: 991px) {
  .section-work {
    max-width: 100%;
    padding: 100px 0px 0;
  }
}

.container-3 {
  display: flex;
  min-width: 240px;
  width: 1400px;
  flex-direction: column;
  align-items: stretch;
  justify-content: start;
}

.projects-title {
  color: #dac5a7;
  text-shadow: 0px -34px 4px rgba(218, 197, 167, 0.15);
  align-self: stretch;
  border-radius: 16px;
  width: 100%;
  padding: 0 32px 32px;
  font-family:
    Stardom,
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
  font-size: 128px;
  font-weight: 400;
  white-space: nowrap;
  text-align: center;
  line-height: 1.1;
  margin: 0;
}

@media (max-width: 991px) {
  .projects-title {
    max-width: 100%;
    font-size: 40px;
    padding: 0 20px 32px;
    white-space: initial;
  }
}

.projects-grid {
  align-self: center;
  width: 100%;
  max-width: 1400px;
}

@media (max-width: 991px) {
  .projects-grid {
    max-width: 100%;
  }
}

.projects-row {
  display: flex;
  width: 100%;
  align-items: start;
  gap: 32px;
  font-family:
    Satoshi,
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
  color: #dac5a7;
  justify-content: start;
  flex-wrap: wrap;
}

.project-column {
  border-radius: 2px;
  min-width: 630px;
  min-height: 540px;
  max-width: 630px;
  max-height: 540px;
  flex: 1;
  flex-shrink: 1;
  flex-basis: 0%;
}

@media (max-width: 991px) {
  .project-column {
    max-width: 90%;
  }
}

@media (max-width: 640px) {
  .project-column {
    min-height: 321px;
    padding-bottom: 118px;
    margin-bottom: -131px;
  
  }
}

.project-image-wrapper {
  border-radius: 2px;
  border: 1px solid var(--border-default, rgba(218, 197, 167, 0.15));
  width: 93%;
  padding: 39px 23px 26px;
  overflow: hidden;
}

@media (max-width: 991px) {
  .project-image-wrapper {
    max-width: 100%;
    padding: 39px 10px 26px;
  }
}

.project-image {
  aspect-ratio: 2.1;
  object-fit: contain;
  object-position: center;
  width: 100%;
}

@media (max-width: 995px) {
  .project-image {
    max-width: 100%;
  }
}

.project-info {
  border-radius: 2px;
  background-color: rgba(255, 255, 255, 0.05);
  border-color: rgba(255, 255, 255, 0.15);
  border-style: solid;
  border-width: 1px;
  display: flex;
  margin-top: 113px;
  margin-left: 20px;
  padding: 3PX 12px 12px;
  align-items: center;
  gap: 17px;
  justify-content: space-between;
  flex-wrap: wrap;
}

@media (max-width: 991px) {
  .project-info {
    margin-right: 9px;
    margin-top: 40px;
  }
}

@media (max-width: 640px) {
  .project-info {
    margin-bottom: -18px;
  }
}

.project-title {
  color: #dac5a7;
  font-size: 20px;
  font-weight: 300;
  line-height: 1.3;
  letter-spacing: 1px;
  align-self: stretch;
  margin: auto 0;
}

@media (max-width: 991px) {
  .project-title {
    max-width: 100%;
  }
}

@media (max-width: 640px) {
  .project-title {
    font-size: 16px;
  }
}

.project-category {
  color: #dac5a7;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.6;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  align-self: stretch;
  margin: auto 0;
}

@media (max-width: 640px) {
  .project-category {
    font-size: 10px;
  }
}

.project-column {
  border-radius: 2px;
  min-width: 240px;
  flex: 1;
  flex-shrink: 1;
  flex-basis: 0%;
}

@media (max-width: 991px) {
  .project-column {
    max-width: 100%;
  }
}

.project-image-container {
  border-radius: 2px;
  min-height: 549px;
  width: 100%;
}

@media (max-width: 991px) {
  .project-image-container {
    max-width: 100%;
  }
}

@media (max-width: 640px) {
  .project-image-container {
    padding-bottom: 111px;
    margin-bottom: -52px;
    min-height: 451px;
  }
}

.project-image-wrapper-2 {
  border-radius: 2px;
  border: 1px solid var(--border-default, rgba(218, 197, 167, 0.15));
  width: 93%;
  padding: 9px 13px 16px;
  overflow:visible ;
}

@media (max-width: 995px) {
  .project-image-wrapper-2 {
    max-width: 100%;
  }
}

@media (max-width: 640px) {
  .project-image-wrapper-2 {
    margin-bottom: -12px;
  }
}

.project-image-2 {
  aspect-ratio: 2.8;
  object-fit: cover;  
  object-position: center;
  width: 100%;
}

@media (max-width: 991px) {
  .project-image-2 {
    max-width: 100%;
  }
}

.project-image-3 {
  aspect-ratio: 3.1;
  object-fit: contain;
  object-position: center;
  width: 200px;
  align-self: auto;
  max-width: 100%;
  margin-left: px;
}

@media (max-width: 640px) {
  .project-image-3 {
    width: 292px;
    margin-left: 14px;
    padding-left: 18px;
    margin-right: -14px;
  }
}

.project-info-2 {
  border-radius: 2px;
  background-color: rgba(255, 255, 255, 0.05);
  border-color: rgba(255, 255, 255, 0.15);
  border-style: solid;
  border-width: 1px;
  z-index: 10;
  display: flex;
  min-height: 97px;
  padding: 4px 3px;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
}

@media (max-width: 991px) {
  .project-info-2 {
    margin-right: 10px;
  }
}

@media (max-width: 640px) {
  .project-info-2 {
    margin-left: 14px;
    margin-bottom: -2px;
  }
}

.project-title-2 {
  color: #dac5a7;
  font-size: 20px;
  font-weight: 300;
  line-height: 31px;
  letter-spacing: 1px;
  align-self: center;
  margin: auto 0;
  width: 511px;
}

@media (max-width: 991px) {
  .project-title-2 {
    max-width: 100%;
  }
}

@media (max-width: 640px) {
  .project-title-2 {
    font-family: Satoshi, sans-serif;
    font-size: 16px;
    margin-left: -5px;
    margin-right: 10px;
  }
}

.project-category-2 {
  color: #dac5a7;
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  align-self: flex-baseline;
  margin-left: 83%;
  width: 77px;
}

@media (max-width: 640px) {
  .project-category-2 {
    font-size: 10px;

  }
}

.projects-row-2 {
  display: flex;
  width: 100%;
  align-items: start;
  gap: 32px;
  justify-content: start;
  flex-wrap: wrap;
}

.project-column-2 {
  border-radius: 2px;
  font-family:
    Satoshi,
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
  color: #0e0e0e;
  min-width: 630px;
  min-height: 410px;
  max-height: 410px;
  max-width: 630px;
  flex: 1;
  flex-shrink: 1;
  flex-basis: 0%;
}

@media (max-width: 991px) {
  .project-column-2 {
    max-width: 100%;
  }
}

@media (max-width: 640px) {
  .project-column-2 {
    padding-bottom: 2px;
    margin-bottom: 1px;
  }
}

.project-image-wrapper-3 {
  border-radius: 2px;
  border: 1px solid var(--border-default, rgba(218, 197, 167, 0.15));
  width: 100%;
  overflow: hidden;
  margin-bottom: 4px;
}

@media (max-width: 991px) {
  .project-image-wrapper-3 {
    max-width: 93%;
  }
}

@media (max-width: 640px) {
  .project-image-wrapper-3 {
    justify-content: top-center;
    align-items:center;
  }
}

.project-image-4 {
  aspect-ratio: 9.4;
  object-fit: contain;
  object-position: top;
  width: 100%;
  min-height: 400px;
  padding: 12px 0px 0;
}

@media (max-width: 991px) {
  .project-image-4 {
    max-width: 93%;
    padding: 12px 10px 10px;
    margin-bottom: -150PX;
  }
}

@media (max-width: 640px) {
  .project-image-4 {
    min-height: 500px;
    max-width: 594px;
    padding-top: 5px;
    margin-left: -1px;
    margin-top: 14px;
    padding-bottom: 1px;
    margin-right: 13px;
    padding-right: 10px;
    margin-bottom: 2px;
  }
}

.project-info-3 {
  border-radius: 2px;
  background-color: rgba(255, 255, 255, 0.05);
  border-color: rgba(255, 255, 255, 0.15);
  border-style: solid;
  border-width: 1px;
  display: flex;
  padding: 3px 16px 12px;
  align-items: center;
  gap: 17px;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 2px;
}

@media (max-width: 991px) {
  .project-info-3 {
    margin-right: 3px;
    margin-left: 3px;
    margin-bottom: 3px;
    margin-top: 3px;
  }
}

@media (max-width: 640px) {
  .project-info-3 {
    margin-bottom: 0px;
    margin-left: 5px;
    padding-top: 0px;
    margin-right: 6px;
  }
}

.project-title-3 {
  font-size: 16px;
  font-weight: 300;
  line-height: 1.3;
  letter-spacing: 1px;
  align-self: stretch;
  margin: auto 0;
  color: rgba(217, 196, 166, 1);
  text-align: left;
}

@media (max-width: 640px) {
  .project-title-3 {
    padding-bottom: 1px;
    margin-top: -26px;
    padding-top: 20px;
    font-size: 16px;
    color: #d5c1a3;
  }
}

.project-category-3 {
  font-size: 10px;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  margin: auto 0;
  width: 135px;
  color: rgba(217, 196, 166, 1);
}

@media (max-width: 640px) {
  .project-category-3 {
    margin-left: auto;
    margin-top: -52px;
    color: #bdab91;
    font-size: 10px;
    padding-top: 22px;
    text-align: left;
    line-height: 15px;
    width: 110px;
    height: 84px;
    margin-bottom: auto;
  }
}

.project-column-3 {
  border-radius: 2px;
  display: flex;
  min-width: 240px;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  flex: 1;
  flex-shrink: 1;
  flex-basis: 0%;
}

@media (max-width: 991px) {
  .project-column-3 {
    max-width: 100%;
  }
}

.project-image-5 {
  aspect-ratio: 1.68;
  object-fit: contain;
  object-position: center;
  width: 630px;
  max-width: 100%;
}
</style>
