<template>
  <header class="header-2">
    <div>
      <img
        src="https://cdn.builder.io/api/v1/image/assets%2Fd2ab0b210c4c42ff93ea2ccc3ba7e6d7%2F824ef9570a92482fa7aa00d8ab112e31"
        class="img-3"
        alt="Logo"
      />
    </div>
    <div class="navbar-right-2">
      <nav
        role="navigation"
        id="mobile-nav"
        class="navbar-menu-2"
        :aria-hidden="!isMobileMenuOpen"
        :style="mobileMenuStyle"
      >
        <ul class="ul">
          <li class="li">
            <button
              class="aboutme-2"
              @click="scrollToSection('about')"
              data-nav-first="true"
            >
              About me
            </button>
          </li>
          <li>
            <button class="education-2" @click="scrollToSection('edu')">
              Education
            </button>
          </li>
          <li>
            <button class="projects-2" @click="scrollToSection('proj')">
              Projects
            </button>
          </li>
          <li>
            <button class="pages-2">
              <span>Pages</span>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/89e7b267f76cab0f725080ac9040b1e75514dd67?placeholderIfAbsent=true&apiKey=d2ab0b210c4c42ff93ea2ccc3ba7e6d7"
                class="img-4"
                alt="Dropdown arrow"
              />
            </button>
          </li>
        </ul>
      </nav>
      <button class="contact-button" @click="scrollToSection('contac')">
        Contact me
      </button>
    </div>
    <button
      class="menu-toggle"
      aria-label="Toggle navigation menu"
      aria-controls="mobile-nav"
      :aria-expanded="isMobileMenuOpen"
      @click="toggleMobileMenu"
      @keydown="handleKeyDown"
    >
      <div class="menu-icon"></div>
    </button>
  </header>
</template>

<script setup>
import { ref, computed } from "vue";

const isMobileMenuOpen = ref(false);
const menuOpacity = computed(() => (isMobileMenuOpen.value ? 1 : 0));
const menuVisibility = computed(() =>
  isMobileMenuOpen.value ? "visible" : "hidden",
);
const menuTransform = computed(() =>
  isMobileMenuOpen.value ? "translateY(0)" : "translateY(-10px)",
);

const mobileMenuStyle = computed(() => {
  return {
    "@media (max-width: 991px)": {
      position: "absolute",
      top: "100%",
      left: 0,
      right: 0,
      flexDirection: "column",
      background: "var(--background-muted, rgba(218, 197, 167, 0.05))",
      backdropFilter: "blur(15px)",
      padding: "16px",
      gap: "16px",
      borderTop: "1px solid var(--border-default, rgba(218, 197, 167, 0.15))",
      opacity: menuOpacity.value,
      visibility: menuVisibility.value,
      transform: menuTransform.value,
      transition:
        "opacity 0.3s ease, transform 0.3s ease, visibility 0.3s ease",
    },
  };
});

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

const handleKeyDown = (event) => {
  if (event.key === "Escape" && isMobileMenuOpen.value) {
    isMobileMenuOpen.value = false;
  }
};

const scrollToSection = (id) => {
  document.getElementById(id).scrollIntoView({
    behavior: "smooth",
  });

  // Close mobile menu after navigation
  if (isMobileMenuOpen.value) {
    isMobileMenuOpen.value = false;
  }
};
</script>

<style scoped>
.header-2 {
  justify-content: space-between;
  align-items: center;
  border-radius: 2px;
  border: 1px solid var(--border-default, rgba(218, 197, 167, 0.15));
  backdrop-filter: blur(15px);
  display: flex;
  background: rgba(218, 197, 167, 0.05);
  padding: 12px 24px;
  position: relative;
  background-color: rgba(17, 15, 15, 1);
  margin-bottom: -3px;
  padding-bottom: 53px;
  padding-top: 55px;
}

@media (max-width: 991px) {
  .header-2 {
    padding: 12px 20px;
  }
}

@media (max-width: 640px) {
  .header-2 {
    align-self: center;
    width: auto;
    flex-grow: 0;
    max-width: 525px;
    min-height: 186px;
    min-width: 200px;
    max-height: 500px;
    justify-content: center;
    display: flex;
    flex-direction: row;
    padding-top: 135px;
    margin-bottom: 23px;
    margin-left: 43px;
    gap: -8px;
    margin-top: -128px;
    padding-bottom: 41px;
    padding-left: 14px;
  }
}

.img-3 {
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 74px;
  align-self: stretch;
  margin-bottom: auto;
  overflow: hidden;
}

.navbar-right-2 {
  align-self: stretch;
  display: flex;
  min-width: 240px;
  margin-top: auto;
  margin-bottom: auto;
  align-items: center;
  gap: 16px;
  font-family:
    Satoshi,
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
  font-size: 13px;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  line-height: 1.6;
  justify-content: start;
  flex-wrap: wrap;
}

@media (max-width: 991px) {
  .navbar-right-2 {
    max-width: 100%;
  }
}

.navbar-menu-2 {
  align-self: stretch;
  display: flex;
  align-items: center;
  gap: 32px;
  color: #dac5a7;
}

@media (max-width: 640px) {
  .navbar-menu-2 {
    justify-content: flex-start;
    align-items: center;
  }
}

.ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  gap: 32px;
}

@media (max-width: 991px) {
  .ul {
    flex-direction: column;
    gap: 16px;
    width: 100%;
  }
}

@media (max-width: 640px) {
  .li {
    margin-top: -2px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    text-align: left;
  }
}

.aboutme-2 {
  color: #dac5a7;
  cursor: pointer;
  transition: opacity 0.2s ease;
  background: none;
  border: none;
  padding: 8px;
  font-size: inherit;
  font-family: inherit;
  text-transform: inherit;
  letter-spacing: inherit;
}

.education-2 {
  color: #dac5a7;
  cursor: pointer;
  background: none;
  border: none;
  padding: 8px;
  font-size: inherit;
  font-family: inherit;
  text-transform: inherit;
  letter-spacing: inherit;
}

.projects-2 {
  color: #dac5a7;
  cursor: pointer;
  background: none;
  border: none;
  padding: 8px;
  font-size: inherit;
  font-family: inherit;
  text-transform: inherit;
  letter-spacing: inherit;
}

.pages-2 {
  display: none;
  align-items: center;
  gap: 8px;
  color: #dac5a7;
  cursor: pointer;
  background: none;
  border: none;
  padding: 8px;
  font-size: inherit;
  font-family: inherit;
  text-transform: inherit;
  letter-spacing: inherit;
  white-space: nowrap;
}

@media (max-width: 991px) {
  .pages-2 {
    white-space: initial;
    display: none;
  }
}

@media (max-width: 640px) {
  .pages-2 {
    display: none;
  }
}

.img-4 {
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 18px;
  flex-shrink: 0;
  overflow: hidden;
}

.contact-button {
  border-radius: 4px;
  color: #0e0e0e;
  padding: 12px 24px;
  cursor: pointer;
  border: none;
  font-size: inherit;
  font-family: inherit;
  text-transform: inherit;
  letter-spacing: inherit;
  transition:
    transform 0.2s ease,
    background 0.2s ease;
  background-color: #dac5a7;
}

.menu-toggle {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
}

@media (max-width: 991px) {
  .menu-toggle {
    display: block;
  }
}

.menu-icon {
  width: 24px;
  height: 2px;
  position: relative;
  transition: background-color 0.3s ease;
}
</style>
