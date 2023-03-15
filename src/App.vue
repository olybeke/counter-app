<template>
  <div id="app">
    <nav>
      <div class="header">Counter App</div>
      <div class="routes">
        <router-link to="/">Home</router-link>
        <router-link to="/counter">Counter</router-link>
      </div>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
#app {
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
}
nav {
  display: flex;
  z-index: 5;
  justify-content: space-around;
  align-items: center;
  background-color: inherit;
  color: inherit;
  width: 100%;
  padding: 14px;
  margin: 0 auto;
  box-shadow: 1px 1px 3px #555;
}

.header {
  font-size: 2.4rem;
  color: rgb(23, 23, 177);
  font-family: header;
  font-weight: light;
  letter-spacing: 2px;
  margin-left: 15px;
}

.routes {
  display: flex;
  gap: 10px;
  justify-content: space-between;
  align-items: center;
  margin-right: 15px;
}

.routes a {
  color: inherit;
  text-decoration: none;
  margin-right: 1rem;
  font-weight: bolder;
  font-size: 1.6rem;
  color: rgb(23, 23, 177);
}

</style>
