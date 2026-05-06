<template>
  <div class="card" :class="car.type" @click="goToDetails">


    <img :src="car.brandLogo" class="brand" />

    <div class="image-wrapper">
      <img :src="car.image" :alt="car.name" class="car-img"/>
    </div>

      <div class="info">

      <h2>{{ car.name }}</h2>

      <div class="stats">
        <span>{{ car.hp }} HP</span>
        <span>{{ car.topSpeed }} km/h</span>
      </div>
        <div class="meta">
      <span>{{ car.engine }}</span>
      <span>{{ car.year }}</span>
    </div>

    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const props = defineProps({
  car: Object
})

function goToDetails() {
  console.log('clicked', props.car.id)
  router.push({
    path: `/car/${props.car.id}`
  })
}

</script>

<style>
.card {
  background: transparent;
  border: none;
  padding: 0;
  position: relative;

  cursor: pointer;
  transition: 0.3s;
}
.card * {
  pointer-events: none;
}

.card {
  pointer-events: auto;
}



.brand{
  position: absolute;
  top: 10px;
  left: 1px;
  margin: -40px;

  width: 50px;
  z-index: 2;

  opacity: 0.7;
  filter: drop-shadow(0 0 4px rgba(218, 204, 186, 0.2));
  transition: 0.3s;
}


.card:hover .brand {
  filter: none;
  opacity: 0.3;
}


.card:hover {
  transform: translateY(-4px);
  border-color: rgba(255,255,255,0.2);
}


.image-wrapper {
  height: 220px;
  display: flex;
  align-items: center;
  justify-content: center;

  margin-bottom: 10px;
}


.car-img{
    max-width: 100%;
    height: 220;
    object-fit: contain;
    transition: 0.4s;
}


.card:hover img {
   transform: scale(1.05);
}

.info {
  padding: 10px 15px;
  margin-top: 5px;
}


.meta{
  display: flex;
  gap: 12px;
  font-size: 13px;
  color: #666;
}

.meta span:first-child {
  color: #ccc;
}

h2 {
    font-size: 18px;
    margin-bottom: 6px;
}

.card h2 {
  font-family: var(--font-heading);
  font-size: 28px;
  margin-bottom: 5px;
  font-weight: 400;
}

.stats {
  display: flex;
  justify-content: space-between;
  color: #aaa;
  font-size: 13px;
}

.card::after {
  content: '';
  display: block;
  margin-top: 15px;
  height: 1px;
  background: rgba(255,255,255,0.05);
}


.car-list:hover .card {
  opacity: 0.6;
}

.car-list .card:hover {
  opacity: 1;
}

.card:hover .car-img{
    transform: scale(1.05);
}


</style>