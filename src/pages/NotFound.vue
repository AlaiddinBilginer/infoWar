<template>
  <section>
    <div>
      <h2>Sayfa Bulunamadı</h2>
      <router-link to="/">Ana Sayfaya Git</router-link>
    </div>
  </section>
</template>

<style scoped>
section {
  height: calc(99vh - 5rem);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 2rem;
}
div {
  padding: 3rem;
  border: 3px solid var(--primary-color);
  display: inline-block;
  text-align: center;
}
h2 {
  font-size: 3rem;
  margin-bottom: 2rem;
}
a {
  padding: 1rem 2rem;
  color: var(--secondary-color);
  background-color: #fff;
  border: none;
  font-size: 1.2rem;
  transition: all 0.3s ease-out;
}
a:hover {
  background-color: var(--secondary-color);
  color: #fff;
}
</style>