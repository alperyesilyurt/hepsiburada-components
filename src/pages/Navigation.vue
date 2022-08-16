<template>
  <div class="navigation">
    <router-link class="pages" tag="a" to="/buttonpage">
      <a class="nav-link" href="#">Button Page</a>
    </router-link>
    <router-link class="pages" tag="a" to="inputpage">
      <a class="nav-link" href="#">Input Page</a>
    </router-link>
    <router-link class="pages" tag="a" to="checkboxandradiopage">
      <a class="nav-link" href="#">Checkbox-Radio Page</a>
    </router-link>
    <router-link class="pages" tag="a" to="">
      <a class="nav-link" href="#">Switch Page</a>
    </router-link>
    <router-link class="pages" tag="a" to="">
      <a class="nav-link" href="#">Checkbox Page</a>
    </router-link>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.navigation {
  display: flex;
  flex-direction: column;
  background-color: #ff6000;
  border-radius: 8px;
  padding: 12px 16px;
  gap: 16px;
}

.pages {
  display: flex;
  padding: 12px 16px;
  background-color: #ffffff;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  font-family: sans-serif;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  text-decoration: none;
}
.pages:hover {
  background-color: #bf4800;
}

.nav-link {
  text-decoration: none;
  color: black;
}
.nav-link:hover {
  text-decoration: none;
  color: white;
}
</style>
