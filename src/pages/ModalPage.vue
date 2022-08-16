<template>
  <div class="modal">
    <compModal 
    
    
    
    />
  </div>
</template>

<script>
import compModal from "../components/Modal.vue";
export default {
  components: {
    compModal,
  },
   methods: {
    func1() {
      console.log("func1");
    },}
};
</script>

<style lang="scss" scoped>

.modal{
    margin: 50px;
}
</style>