<template>
  <header>
    <nav>
      <h1>
        <router-link to="/">
          <img src="../../../img/icon/peace.svg" alt="Peace Icon" />
          Info<span class="text">War</span></router-link
        >
      </h1>
      <ul>
        <li><router-link to="/ana-sayfa">Ana Sayfa</router-link></li>
        <li><router-link to="/savaslar">Savaşlar</router-link></li>
        <li><router-link to="/ulkeler">Ülkeler</router-link></li>
      </ul>
    </nav>
  </header>
  <div class="bottom-line"></div>
</template>

<style scoped>
header {
  width: 100%;
  height: 5rem;
  background-color: #140d0d;
  display: flex;
  justify-content: center;
  align-items: center;
}

header a {
  text-decoration: none;
  color: var(--third-color);
  display: inline-block;
  padding: 0.75rem 1.5rem;
  border: 1px solid transparent;
}

a:active,
a:hover,
a.router-link-active {
  border: 1px solid var(--light-color);
}

h1 {
  font-size: 2rem;
}

h1 a {
  color: white;
  padding: 0;
  transition: transform 0.3s ease-out;
  display: flex;
}

h1 a:hover {
  transform: scale(1.1);
  opacity: 0.9;
}

h1 a:hover,
h1 a:active,
h1 a.router-link-active {
  border-color: transparent;
}

h1 a img {
  width: 40px;
}

header nav {
  width: 80%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

header ul {
  display: flex;
  justify-content: center;
  align-items: center;
}

li {
  margin: 0 0.5rem;
}

.text {
  color: var(--third-color);
}

@media screen and (max-width: 670px) {
  header {
    height: 10rem;
  }
  header nav {
    flex-direction: column;
    width: 100%;
  }
  h1 {
    margin-bottom: 0.75rem;
  }

  header a {
    padding: 0.75rem 1rem;
  }
}
</style>