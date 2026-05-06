<template>
  <div class="garage">
    <section class="hero">
      <p class="label">P R I V A T E ✦ C O L L E C T I O N</p>
      <h1>Virtual Garage</h1>
      <p class="subtitle">Mastery of the craft.</p>
    </section>

    <CarList />
  </div>
</template>

<script setup>
import CarList from '../components/CarList.vue'
</script>

<style>
.garage {
  padding: 40px 20px;
  min-height: 100vh;
  color: white;

  background: radial-gradient(circle at top, #111, #000);
}

@media (min-width: 768px) {
  .garage {
    padding: 60px;
  }
}

.hero {
  margin-top: 60px;
  margin-bottom: 80px;
  max-width: 600px;

}

.hero h1 {
  font-family: var(--font-Title);
  font-size: 64px;
  font-weight: 300;
  margin: 10px 0;
  line-height: 1.1;
}
.subtitle {
  color: #777;
  font-size: 15px;
  font-family: gambetta, sans-serif;
}

.hero p {
  color: #555;
  margin-top: 10px;
}
body {
  font-family: 'Oswald', sans-serif;
}


@media (max-width: 768px) {
  .hero h1 {
    font-size: 42px;
  }

  .hero {
    margin-bottom: 40px;
  }
}

</style>
