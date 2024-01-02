<template>
  <li>
    <h3>{{ getCountry(countryId).name }}</h3>
    <div class="percentile">
      %{{
        (((childDeath + adultDeath + soldierDeath) / totalDeath) * 100).toFixed(
          2
        )
      }}
    </div>
    <div class="grid">
      <div class="grid-item">
        <p>
          Toplam Ölüm Sayısı
          <span>{{ childDeath + adultDeath + soldierDeath }}</span>
        </p>
      </div>
      <div class="grid-item">
        <p>
          Çocuk Ölüm Sayısı <span>{{ childDeath }}</span>
        </p>
        <div class="item-percentile">
          %{{
            (
              (childDeath / (childDeath + adultDeath + soldierDeath)) *
              100
            ).toFixed(2)
          }}
        </div>
      </div>
      <div class="grid-item">
        <p>
          Sivil Ölüm Sayısı <span>{{ adultDeath + childDeath }}</span>
        </p>
        <div class="item-percentile">
          %{{
            (
              (adultDeath / (childDeath + adultDeath + soldierDeath)) *
              100
            ).toFixed(2)
          }}
        </div>
      </div>
      <div class="grid-item">
        <p>
          Asker Ölüm Sayısı <span>{{ soldierDeath }}</span>
        </p>
        <div class="item-percentile">
          %{{
            (
              (soldierDeath / (childDeath + adultDeath + soldierDeath)) *
              100
            ).toFixed(2)
          }}
        </div>
      </div>
    </div>
  </li>
</template>

<script>
export default {
  props: [
    "id",
    "warId",
    "countryId",
    "childDeath",
    "adultDeath",
    "soldierDeath",
    "totalDeath",
  ],
  methods: {
    getCountry(id) {
      return this.$store.getters["countries/countries"].find(
        (country) => country.id === id
      );
    },
  },
};
</script>

<style scoped>
.chart {
  width: 300px;
  background-color: #f0f0f0;
  border: 5px solid var(--secondary-color);
  border-radius: 15px;
}

li {
  border: 2px solid var(--secondary-color);
  margin-bottom: 2rem;
  padding: 1rem;
  position: relative;
}

h3 {
  margin-bottom: 2rem;
  font-size: 2rem;
  text-align: center;
}

.grid {
  display: grid;
  padding: 2rem;
  gap: 1.5rem;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
}

.grid-item {
  background-color: var(--primary-color);
  padding: 1rem;
  font-size: 1.5rem;
  border-radius: 15px;
  transition: all 0.4s ease-out;
  position: relative;
}

.grid-item:hover {
  transform: scale(1.05);
  background-color: var(--secondary-color);
}

.grid-item p {
  text-align: center;
}

span {
  margin-top: 1rem;
  display: block;
  text-align: center;
}

.percentile {
  background-color: var(--secondary-color);
  display: inline;
  border-radius: 30px;
  padding: 1rem;
  position: absolute;
  right: 5px;
  top: 5px;
  transition: all 0.4s ease-out;
}

.percentile:hover {
  transform: scale(1.1);
  background-color: var(--primary-color);
}

.item-percentile {
  background-color: #03585d;
  font-size: 1rem;
  border-radius: 30px;
  display: inline;
  padding: 0.5rem;
  text-align: center;
  position: absolute;
}

@media screen and (max-width: 510px) {
  .grid {
    display: block;
  }

  .grid-item {
    margin-bottom: 2rem;
  }
}
</style>
