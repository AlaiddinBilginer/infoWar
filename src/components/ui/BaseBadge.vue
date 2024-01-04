<template>
  <span class="badge green" v-if="is_it_over">Bitti</span>
  <span class="badge red" v-if="!is_it_over">Devam Ediyor</span>
</template>

<script>
export default {
  props: ["is_it_over"],
};
</script>

<style scoped>
.badge {
  border-radius: 25px;
  padding: 0.3rem 1rem;
  display: inline-block;
}

.red {
  background-color: var(--secondary-color);
  color: #fff;
}

.green {
  background-color: rgb(22, 148, 22);
  color: #fff;
}
</style>