<template>


    <div v-if="car" class="details">
    <button class="back" @click="$router.back()"> « Back</button>

    <!-- HERO -->
    <section class="hero">

        <div class="car-container">
    <img :src="car.image" class="hero-car" />
    <img :src="car.image" class="reflection" />
  </div>


      <div class="hero-info">
        <h1>{{ car.name }}</h1>
        <p>{{ car.year }} • {{ car.identity.engine }}</p>
      </div>
    </section>
      <div class="ownership fade-up delay">

  <p>
    {{ car.market.fuel }}
  </p>

  <p :class="car.market.resale.includes('+') ? 'profit' : 'loss'">
    {{ car.market.resale }}
  </p>

</div>

    <!-- SPECS -->
    <div class="identity fade-up delay">
        
  <span>Engineered by {{ car.identity.engineer }}</span>
</div>
    <section class="specs fade-up delay">


  <div class="spec-card">
    <p>Horsepower</p>
    <h2>{{ car.performance.hp }}</h2>
  </div>

  <div class="spec-card">
  <p>Torque</p>
  <h2>{{ car.performance.torque }}</h2>
</div>

  <div class="spec-card">
    <p>Top Speed</p>
    <h2>{{ car.performance.topSpeed }} km/h</h2>
  </div>

  <div class="spec-card">
    <p>0–100</p>
    <h2>{{ car.performance.acceleration }}</h2>
  </div>

</section>
<div class="engineering fade-up delay">

  <div>
    <p>Drivetrain</p>
    <span>{{ car.engineering.drivetrain }}</span>
  </div>

  <div>
    <p>Transmission</p>
    <span>{{ car.performance.transmission }}</span>
  </div>

  <div>
    <p>Weight</p>
    <span>{{ car.engineering.weight }}</span>
  </div>
  </div>

<section class="market">

   <div class="market-card">
  <div class="market-label">
    <span class="fi fi-sa "></span>
    <span>KSA</span>
  </div>
  <span class="price">{{ car.market.ksa }}</span>
</div>

  <div class="market-card">
  <div class="market-label">
    <span class="fi fi-ae"></span><span class="fi fi-kw"></span>
    <span>GCC</span>
  </div>
  <span class="price">{{ car.market.gcc }}</span>
</div>


 <div class="market-card">
  <div class="market-label">
    <span class="fi fi-eu"></span>
    <span>EU</span>
  </div>
  <span class="price">{{ car.market.eu }}</span>
</div>

  <div class="market-card">
  <div class="market-label">
    <span class="fi fi-jp"></span>
    <span>Asia</span>
  </div>
  <span class="price">{{ car.market.asia }}</span>
</div>
</section>


    </div>
     <p v-else>Car not found</p>

</template>

<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
const id = route.params.id

const cars = [
{
    id: 1,
    name: 'Mercedes SLS AMG',
    image: '/cars/sls.png',
    year: 2011,

    identity: {
      engine: 'M159 6.2L V8',
      engineer: 'Friedrich Eichler'
    },

    performance: {
      hp: 563,
      torque: '650 Nm',
      acceleration: '3.8s 0–100',
      transmission: "manual"
    },

    engineering: {
      drivetrain: "RWD",
      suspension: 'Sport tuned (road + track)',
      heat: 'High performance cooling',
      weight: "1350 kg"
    },

    market: {
      ksa: '1.400.000 SAR',
      gcc: '1.300.000 SAR',
      eu: '750.000 SAR',
      asia: '700.00 SAR',
      fuel: '280 SAR / tank',
      resale: '+18%'
    }
  },

{
    id: 2,
  name: 'Mercedes CLS 63 S AMG',
  image: '/cars/cls.png',
  year: 2017,

  identity: {
    engine: 'M157 5.5L Twin-Turbo V8',
    engineer: 'AMG Affalterbach'
  },

  performance: {
    hp: 577,
    torque: '800 Nm',
    acceleration: '3.6s 0–100',
    topSpeed: 300,
    transmission: '7-speed AMG Speedshift'
  },

  engineering: {
    drivetrain: 'AWD (4MATIC)',
    suspension: 'AMG Ride Control',
    heat: 'Track-capable cooling',
    weight: '1870 kg'
  },

  market: {
    ksa: '~220,000 SAR',
    gcc: '~210,000 SAR',
    eu: '~200,000 SAR',
    asia: '~195,000 SAR',
    fuel: '300 SAR / tank',
    resale: '-40% (2017 → 2026)'
  }},

  {
    id: 3,
  name: 'Porsche Panamera GTS',
  image: '/cars/panamera.png',
  year: 2023,

  identity: {
    engine: '4.0L Twin-Turbo V8',
    engineer: 'Porsche Engineering Team'
  },

  performance: {
    hp: 493,
    torque: '660 Nm',
    acceleration: '3.9s 0–100',
    topSpeed: 302,
    transmission: '8-speed PDK'
  },

  engineering: {
    drivetrain: 'AWD',
    suspension: 'Adaptive air suspension',
    heat: 'High efficiency thermal management',
    weight: '2070 kg'
  },

  market: {
    ksa: '~750,000 SAR',
    gcc: '~730,000 SAR',
    eu: '~720,000 SAR',
    asia: '~700,000 SAR',
    fuel: '220 SAR / tank',
    resale: '-25% (2023 → 2026)'
  }
  },
  {
  id: 4,
  name: 'Mercedes SLR McLaren',
  image: '/cars/slr.png',
  year: 2012,

  identity: {
    engine: 'M155 5.4L Supercharged V8',
    engineer: 'AMG + McLaren'
  },

  performance: {
    hp: 617-650,
    torque: '780 Nm',
    acceleration: '3.5s 0–100',
    topSpeed: 334,
    transmission: '5-speed automatic'
  },

  engineering: {
    drivetrain: 'RWD',
    suspension: 'Carbon fiber chassis tuned',
    heat: 'Race-grade cooling',
    weight: '1768 kg'
  },

  market: {
    ksa: '~2,200,000 SAR',
    gcc: '~2,100,000 SAR',
    eu: '~2,000,000 SAR',
    asia: '~1,950,000 SAR',
    fuel: '320 SAR / tank',
    resale: '+60% (collector value)'
  }
},

{
  id: 5,
  name: 'Ferrari 812 Competizione',
  image: '/cars/812.png',
  year: 2022,

  identity: {
    engine: '6.5L Naturally Aspirated V12',
    engineer: 'Ferrari Centro Stile'
  },

  performance: {
    hp: 819,
    torque: '692 Nm',
    acceleration: '2.8s 0–100',
    topSpeed: 340,
    transmission: '7-speed dual-clutch'
  },

  engineering: {
    drivetrain: 'RWD',
    suspension: 'Magnetorheological suspension',
    heat: 'Extreme track cooling',
    weight: '1487 kg'
  },

  market: {
    ksa: '~2,800,000 SAR',
    gcc: '~2,700,000 SAR',
    eu: '~2,600,000 SAR',
    asia: '~2,500,000 SAR',
    fuel: '350 SAR / tank',
    resale: '+30% (limited production)'
  }
},


{
  id: 6,
  name: 'Aston Martin DB12',
  image: '/cars/db12.png',
  year: 2023,

  identity: {
    engine: '4.0L Twin-Turbo V8',
    engineer: 'Aston Martin x AMG'
  },

  performance: {
    hp: 671,
    torque: '800 Nm',
    acceleration: '3.5s 0–100',
    topSpeed: 325,
    transmission: '8-speed automatic'
  },

  engineering: {
    drivetrain: 'RWD',
    suspension: 'Adaptive damping system',
    heat: 'Enhanced GT cooling',
    weight: '1788 kg'
  },

  market: {
    ksa: '~1,100,000 SAR',
    gcc: '~1,050,000 SAR',
    eu: '~1,000,000 SAR',
    asia: '~980,000 SAR',
    fuel: '260 SAR / tank',
    resale: '-10% (new model)'
  }
}

]

const car = cars.find(c => c.id == id)
</script>

<style>
body{
    overflow-x: hidden;
}
 .details {
  min-height: 100vh;
  padding: 20px;
  background: #050505;
  color: white;

 display: flex;
 flex-direction: column;
  

  margin: 0 auto;


  animation: fadeIn 0.5s ease;

}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* BACK BUTTON */
.back {
    position:fixed;
    z-index: 10;
  background: none;
  border: none;
  color: #888;
  margin-top: 10px;
  margin-bottom: 20px;
  cursor: pointer;
}



/* HERO */
.hero {

position:relative;
  
 display: flex;
  flex-direction: column;
  padding: 0;
    
  align-items: center;
  text-align: center;
  justify-content: center;
    align-content: center;

width: 100%;
margin: 0 auto;
    
  transition: transform 0.2s ease;
  
}


.fade-up {
  opacity: 0;
  transform: translateY(30px);
  animation: fadeUp 0.8s ease forwards;
}

.delay {
  animation-delay: 0.2s;
}

@keyframes fadeUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.hero-info {
  display: flex;
  flex-direction: column;
  align-items: center;   
  text-align: center;

  margin-top: 0px;
}

.hero-info h1 {
word-break:break-all;
position: relative;
  font-size: 48px;
  letter-spacing: 1px;
  font-weight: 400;
  font-family: var(--font-performance);
  max-width: none;
  text-align: center;
}

.hero-info p {
    margin-top: 10px;
letter-spacing: 1px;
  color: #777;
}

.hero::before {
  content: '';
  position: absolute;

  width: 700px;
  height: 300px;

  background: radial-gradient(
    ellipse at center,
    rgba(255,255,255,0.05),
    transparent 70%
  );
  
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 0;
}

/* CAR */
.car-container {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;  
  margin-bottom: -30px;

  object-fit: contain;
  object-position: center;

  overflow: hidden;
}

.hero-car {
  width: 100%;
  max-width: 900px;
  z-index: 2;

  object-fit: contain;
  object-position: center;
  display: block;

  position: relative;

  opacity: 0;
  transform: scale(0.96);

  animation: carReveal 2s ease forwards;

  filter: drop-shadow(0 40px 60px rgba(0,0,0,0.6));
}


@keyframes carReveal {
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.reflection {
  width: 80%;
  max-width: 900px;

  transform: scaleY(-1);
  opacity: 0.15;

  margin-top: -80px;

  filter: blur(4px);
   mask-image: linear-gradient(to bottom,rgba(0,0,0,0.7),transparent 80%);
  -webkit-mask-image: linear-gradient(to bottom, rgba(0,0,0,0.4), transparent 70%);

  pointer-events: none;
}
.reflection {
  animation: fadeIn 2s ease forwards;
}

.car-container::after {
  content: '';
  position: absolute;

  width: 60%;
  height: 40px;

  bottom: 10px;

  background: radial-gradient(
    ellipse at center,
    rgba(255,255,255,0.06),
    transparent
  );

  filter: blur(10px);
  z-index: 0;
}



/* SPECS */
.specs {
  margin-top: 80px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;

  animation-delay: 0.4s;

}


.spec-card {
  background: rgba(255,255,255,0.01);
  padding-bottom: 10px;
  transition: 0.3s;
  text-align: center;
}

.spec-card:hover {
  transform: translateY(-4px);
  border-color: rgba(255,255,255,0.1);
}

.spec-card p {
  color: #666;
  font-size: 16px;
}

.spec-card h2 {
  font-size: 22px;
  font-weight: 100;
  margin-top: 5px;
}

.extra {
  margin-top: 50px;

  display: flex;
  justify-content: center;
  gap: 40px;

  color: #777;
  font-size: 14px;
}

.extra div {
  text-align: center;
}

.extra span {
  display: block;
  margin-top: 5px;
  color: #aaa;
}


.market {

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: center;
  gap: 10px;
  margin-top: 50px;
  text-align: center;
  color: #aaa;
}

.market-label {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;

  font-size: 12px;
  color: #666;
}

.market-label .fi {
  width: 18px;
  height: 14px;
  border-radius: 2px;
}

.price {
  display: block;
  margin-top: 6px;
  color: #ccc;
  font-size: 14px;
}

.market div {
  font-size: 14px;
}

.market-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  background: rgba(255,255,255,0.02);
  padding: 15px;
  border-radius: 12px;
}

.market-card p {
  color: #666;
  font-size: 15px;
}

.market-card span {
  color: #ccc;
  font-size: 14px;
}
.market-card:hover .fi {
  transform: scale(1.05);
  transition: 0.2s;
}



.identity {
  text-align: left;
  color: #666;
  font-size: 13px;
  margin-top: 20px;
}

.identity span {
  color: #666;
  font-size: 13px;
}
.identity p {
  color: #ccc;
}

.engineering {
  margin-top: 40px;
  display: grid;
  align-self: center;
  justify-content: center;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  color: #777;
}

.engineering span {
  display: block;
  margin-top: 5px;
  color: #aaa;
}

.ownership {
  margin-top: 40px;
  text-align: right;
  color: #666;
  font-size: 14px;
}

.profit {
  color: #4ade80; /* green */
}

.loss {
  color: #f87171; /* red */
}

/*desktop/ tablet view */
@media (min-width: 680px) {
  .specs {
    grid-template-columns: repeat(4, 1fr);
  }

  .engineering {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 40px;
  }
  .market{
    grid-template-columns: repeat(4, 1fr);
  }
}

</style>