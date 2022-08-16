<template>
  <div class="drawer">
    <compDrawer 
    
    
    
    />
  </div>
</template>

<script>
import compDrawer from "../components/Drawer.vue";
export default {
  components: {
    compDrawer,
  },
   methods: {
    func1() {
      console.log("func1");
    },}
};
</script>

<style lang="scss" scoped>

.drawer{
    margin: 50px;
}
</style>