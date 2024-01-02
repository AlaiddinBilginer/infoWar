<template>
  <li>
    <router-link :to="warDetailsLink">
      <img :src="img" alt="War Image" />
      <div class="content">
        <div class="title">
          <h3>{{ name }}</h3>
          <base-badge :is_it_over="is_it_over"></base-badge>
        </div>
        <p class="starting_date">Başlangıç Tarihi: {{ starting_date }}</p>
      </div>
    </router-link>
  </li>
</template>

<script>
import BaseBadge from "../ui/BaseBadge.vue";
export default {
  components: { BaseBadge },
  props: ["id", "name", "starting_date", "is_it_over", "img"],
  computed: {
    warDetailsLink() {
      return this.$route.path + "/" + this.id;
    },
  },
};
</script>

<style scoped>
li {
  padding: 0.4rem;
  background-color: var(--primary-color);
  transition: transform 0.3s ease-out;
}

li:hover {
  transform: scale(1.02);
  opacity: 0.8;
}

li img {
  width: 100%;
}

li .content {
  margin-top: 0.5rem;
}

li a {
  width: 100%;
  height: 100%;
}

.title {
  margin-bottom: 0.5rem;
}

.title h3 {
  margin-bottom: 0.5rem;
}

.starting_date {
  margin-top: 0.5rem;
  font-style: italic;
}

@media screen and (max-width: 420px) {
  li {
    margin-bottom: 1rem;
  }
}
</style>