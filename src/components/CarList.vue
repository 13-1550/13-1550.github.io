<template>
  <div class="car-list">
    <CarCard
      v-for="car in cars"
      :key="car.id"
      :car="car"
    />
  </div>
</template>

<script setup>
import CarCard from './CarCard.vue'

const cars = [
  {
    id: 1,
    name: 'Mercedes SLS AMG',
    type: 'performance',
    image: '/cars/sls.png',
    brandLogo: '/brands/amg.png',
    engine: '6.2L V8',
    year: 2011,
    hp: 563,
    topSpeed: 317,
  },
  {
    id: 2,
    name: 'Mercedes-Benz CLS 63s',
    image: '/cars/cls.png',
    brandLogo: '/brands/merc.png',
    engine: 'M157 5.5L Twin-Turbo V8',
    year: 2017,
    hp: 577,
    topSpeed: +300,
  },
  {
    id: 3,
    name: 'Porsche Panamera GTS',
    image: '/cars/panamera.png',
    brandLogo: '/brands/porsche.png',
    engine: '4.0L V8',
    year: 2021,
    hp: 493,
    topSpeed: 302,
  },
  {
    id: 4,
    name: 'Mercedes SLR McLaren',
    image: '/cars/slr.png',
    type: 'performance',
    brandLogo: '/brands/McL.png',
    engine: '5.4L SuperCharged V8',
    year: 2012,
    hp: 650,
    topSpeed: 330,
  },
  {
    id: 5,
    name: 'Ferrari 812 Competizione',
    image: '/cars/812.png',
    brandLogo: '/brands/Ferrari.png',
    engine: '6.5L Naturally Aspirated V12',
    year: 2022,
    hp: 812,
    topSpeed: 340,
  },
  {
    id: 6,
    name: 'Aston Martin DB12',
    image: '/cars/db12.png',
    brandLogo: '/brands/aston.png',
    engine: '4.0L Twin-Turbo V8',
    year: 2023,
    hp: 671,
    topSpeed: 325,
  }
  
]
</script>

<style>
.car-list {
  display: grid;
    grid-template-columns: repeat(3, 1fr);

  gap: 60px; /* bigger gap */
  margin-top: 40px;
}




</style>

