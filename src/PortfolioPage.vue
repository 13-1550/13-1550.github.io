<template>
  <div class="box">
    <div class="frontpage">
      <NavBar />
      <HeroSection />
      <LogoSection />
      <AboutSection />
      <EducationSection />
      <ProjectsSection />
      <CertificationsSection />
      <ContactSection />
      <ThankYouSection />
      <FooterSection />
    </div>
  </div>
</template>

<script setup>
import NavBar from "./components/NavBar.vue";
import HeroSection from "./components/HeroSection.vue";
import LogoSection from "./components/LogoSection.vue";
import AboutSection from "./components/AboutSection.vue";
import EducationSection from "./components/EducationSection.vue";
import ProjectsSection from "./components/ProjectsSection.vue";
import CertificationsSection from "./components/CertificationsSection.vue";
import ContactSection from "./components/ContactSection.vue";
import ThankYouSection from "./components/ThankYouSection.vue";
import FooterSection from "./components/FooterSection.vue";
</script>

<style scoped>
.box {
  padding-left: 26px;
  padding-right: 26px;
  background-color: #0e0e0e;
}

@media (max-width: 991px) {
  .box {
    padding-left: 20px;
  }
}

.frontpage {
  background-color: rgba(14, 14, 14, 1);
  position: relative;
  display: flex;
  width: 100%;
  flex-direction: column;
  overflow: hidden;
  align-items: stretch;
  justify-content: start;
}

@media (max-width: 991px) {
  .frontpage {
    max-width: 100%;
  }
}
</style>
