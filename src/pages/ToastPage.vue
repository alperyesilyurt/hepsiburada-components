<template>
  <div class="toast">
    <compToast 
    
    
    
    />
  </div>
</template>

<script>
import compToast from "../components/Toast.vue";
export default {
  components: {
    compToast,
  },
   methods: {
    func1() {
      console.log("func1");
    },}
};
</script>

<style lang="scss" scoped>

.toast{
    margin: 50px;
}
</style>