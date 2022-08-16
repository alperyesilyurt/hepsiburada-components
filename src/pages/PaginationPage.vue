<template>
  <div class="pagination">
    <compPagination 
    
    
    
    />
  </div>
</template>

<script>
import compPagination from "../components/Pagination.vue";
export default {
  components: {
    compPagination,
  },
   methods: {
    func1() {
      console.log("func1");
    },}
};
</script>

<style lang="scss" scoped>

.pagination{
    margin: 50px;
}
</style>