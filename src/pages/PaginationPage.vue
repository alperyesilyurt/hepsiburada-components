<template>
<div class="pagination">
 
    <comp-pagination
    v-model="email"
        label="Email"
        hint="Input your email"
        icon="email"
        placeholder="Please input a valid email address"
        color="red"
    
    
    />

</div>
  
  
</template>

<script>
import compPagination from "../components/Pagination.vue"


export default{
  data: () => ({
    firstname: "",
    email: "",
    address: ""
  }),
components:{
  compPagination
}


}
</script>


<style scoped>
.pagination{
  gap: 20px;
  margin-top: 40px;
  margin-left: 100px;
}
</style>