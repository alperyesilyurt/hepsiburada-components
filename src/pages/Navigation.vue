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
    <router-link class="pages" tag="a" to="switchpage">
      <a class="nav-link" href="#">Switch Page</a>
    </router-link>
    <router-link class="pages" tag="a" to="tabpage">
      <a class="nav-link" href="#">Tab Page</a>
    </router-link>
    <router-link class="pages" tag="a" to="modalpage">
      <a class="nav-link" href="#">Modal Page</a>
    </router-link>
    <router-link class="pages" tag="a" to="drawerpage">
      <a class="nav-link" href="#">Drawer Page</a>
    </router-link>
    <router-link class="pages" tag="a" to="toastpage">
      <a class="nav-link" href="#">Toast Message Page</a>
    </router-link>
    <router-link class="pages" tag="a" to="tablepage">
      <a class="nav-link" href="#">Table Page</a>
    </router-link>
    <router-link class="pages" tag="a" to="paginationpage">
      <a class="nav-link" href="#">Pagination Page</a>
    </router-link>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>

.navigation {
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 20px;
  
}

.pages {
  display: flex;
  padding: 12px 16px;
  background-color: #ffffff;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 3px 2px 0px;
  font-family: sans-serif;
  border-radius: 8px;
  text-decoration: none;
  
}
.pages:hover {
  background-color: #32a848;
}


.nav-link {
  text-decoration: none;
  color: black;
}

</style>
