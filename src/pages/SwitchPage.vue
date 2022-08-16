<template>
  <div class="switch">
    <compSwitch 
    @switchFunc="func1"
    
    
    />
  </div>
</template>

<script>
import compSwitch from "../components/Switch.vue";
export default {
  components: {
    compSwitch,
  },
   methods: {
    func1() {
      console.log("func1");
    },}
};
</script>

<style lang="scss" scoped>

.switch{
    margin: 50px;
}
</style>