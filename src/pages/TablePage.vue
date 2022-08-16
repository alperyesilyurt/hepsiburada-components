<template>
  <div class="table">
    <compTable 
    
    
    
    />
  </div>
</template>

<script>
import compTable from "../components/Table.vue";
export default {
  components: {
    compTable,
  },
   methods: {
    func1() {
      console.log("func1");
    },}
};
</script>

<style lang="scss" scoped>

.table{
    margin: 50px;
}
</style>