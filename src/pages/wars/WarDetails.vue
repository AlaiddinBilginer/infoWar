<template>
  <section>
    <header>
      <div class="section-title">
        <h2>{{ selectedWar.name }}</h2>
      </div>
      <div class="line"></div>
    </header>
    <div class="info">
      <div class="content">
        <div class="flex">
          <h3>Savaş Bilgileri</h3>
          <base-badge :is_it_over="selectedWar.is_it_over"></base-badge>
        </div>
        <p class="total-death">Toplam Ölüm Sayısı: {{ totalDeaths }}</p>
        <p>Başlangıç Tarihi: {{ selectedWar.starting_date }}</p>
        <p>{{ selectedWar.info }}</p>
      </div>
      <div class="war-image">
        <img :src="selectedWar.img" alt="War Image" />
      </div>
    </div>
    <div class="statistic">
      <ul>
        <war-chart
          v-for="statistic in statistics"
          :key="statistic.id"
          :id="statistic.ic"
          :warId="statistic.warId"
          :countryId="statistic.countryId"
          :adultDeath="statistic.adult_death"
          :childDeath="statistic.child_death"
          :soldierDeath="statistic.soldier_death"
          :totalDeath="totalDeaths"
        ></war-chart>
      </ul>
    </div>
  </section>
</template>

<script>
import WarChart from "../../components/wars/WarChart.vue";

export default {
  components: {
    WarChart,
  },
  props: ["id"],
  data() {
    return {
      selectedWar: null,
    };
  },
  computed: {
    statistics() {
      return this.$store.getters["statistics/statistics"].filter(
        (statistic) => statistic.warId === this.id
      );
    },
    totalDeaths() {
      let total = 0;
      this.statistics.forEach((item) => {
        total += item.soldier_death + item.adult_death + item.child_death;
      });
      return total;
    },
  },
  methods: {
    getCountry(id) {
      return this.$store.getters["countries/countries"].find(
        (country) => country.id === id
      );
    },
    async loadStatistics() {
      await this.$store.dispatch("statistics/loadStatistics");
    },
  },
  created() {
    this.selectedWar = this.$store.getters["wars/wars"].find(
      (war) => war.id === this.id
    );

    this.loadStatistics();
  },
};
</script>

<style scoped>
.info {
  display: flex;
  padding: 2rem 6rem;
  gap: 2rem;
}

.info .content {
  flex: 3;
}

.info .war-image {
  flex: 1.5;
}

.info .war-image img {
  object-fit: cover;
  border: 3px solid var(--primary-color);
}

.info h3 {
  font-size: 2rem;
  margin-bottom: 0.5rem;
}

.info p {
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
}

.flex {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.total-death {
  color: var(--light-color);
  font-style: italic;
  font-weight: bolder;
}

.chart {
  width: 300px;
  background-color: #f0f0f0;
  border: 5px solid var(--secondary-color);
  border-radius: 15px;
}

.statistic {
  padding: 2rem 6rem;
}

ul {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(310px, 1fr));
  gap: 2rem;
}

@media screen and (max-width: 850px) {
  .info {
    display: block;
  }

  .content {
    margin-bottom: 2rem;
  }
}

@media screen and (max-width: 510px) {
  ul {
    display: block;
  }

  .info,
  .statistic {
    padding: 2rem;
  }
}
</style>