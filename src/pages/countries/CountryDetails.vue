<template>
  <div>
    <section>
      <header>
        <div class="section-title">
          <h2>{{ name }}</h2>
        </div>
        <div class="line"></div>
      </header>
      <div class="content">
        <div class="left">
          <h3>Ülke Hakkında</h3>
          <p>{{ info }}</p>
        </div>
        <div class="right">
          <img :src="flag" alt="Flag" />
          <p>Kuruluş Yılı: {{ establishment }}</p>
          <p>Bölge: {{ region }}</p>
          <p>Nüfus: {{ population }}</p>
        </div>
      </div>
    </section>
    <!-- President -->
    <section class="president">
      <div class="flex-items">
        <div class="image-item">
          <img :src="president.image" alt="President Image" />
          <h4>{{ president.first_name }} {{ president.last_name }}</h4>
          <p>Yaş: {{ president.age }}</p>
        </div>
        <div class="info-item">
          <h3>Başkan Hakkında</h3>
          <p>{{ president.info }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      selectedCountry: null,
    };
  },
  computed: {
    name() {
      return this.selectedCountry.name;
    },
    info() {
      return this.selectedCountry.info;
    },
    establishment() {
      return this.selectedCountry.establishment;
    },
    population() {
      return this.selectedCountry.population;
    },
    region() {
      return this.selectedCountry.region;
    },
    flag() {
      return this.selectedCountry.flag;
    },
    presidentId() {
      return this.selectedCountry.presidentId;
    },
    president() {
      return this.$store.getters["countries/presidents"].find(
        (president) => president.id === this.presidentId
      );
    },
  },
  created() {
    this.selectedCountry = this.$store.getters["countries/countries"].find(
      (country) => country.id === this.id
    );
  },
};
</script>

<style scoped>
.content {
  padding: 2rem 6rem;
  display: flex;
  gap: 3rem;
}

.left {
  flex: 3;
}

h3 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

p {
  font-size: 1.2rem;
}

.right {
  flex: 1.5;
}

.right img {
  margin-bottom: 0.5rem;
}

.right p {
  margin-bottom: 0.5rem;
  text-align: center;
  padding-bottom: 0.3rem;
  font-style: italic;
}

/* President */
.president {
  padding: 2rem 6rem;
}
.flex-items {
  display: flex;
  padding: 1rem;
  border: 1px solid var(--secondary-color);
}

.president .image-item {
  flex: 1;
  margin-right: 2rem;
}

.president .image-item img {
  border-radius: 60px;
  margin-bottom: 0.5rem;
}

.president .image-item h4,
.president .image-item p {
  text-align: center;
}

.president .info-item {
  flex: 6;
}

@media screen and (max-width: 800px) {
  .president {
    padding: 2rem 1.5rem;
  }
  .content {
    flex-direction: column;
    padding: 2rem 3rem;
  }

  .flex-items {
    flex-direction: column;
  }

  .flex-items .image-item {
    margin-bottom: 2rem;
    margin-right: 0;
  }
}
</style>

