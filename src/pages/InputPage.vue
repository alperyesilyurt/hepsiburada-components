<template>
<div class="input">
 
<comp-input
inputPlaceholder="Placeholder"
:disabled=true
inputType="primary" 



/>
<p>{{name}}</p>

</div>
  
  
</template>

<script>
import compInput from "../components/Input.vue"

export default{

components : {
  compInput
}




}
</script>


<style scoped>
.input{
  gap: 20px;
  margin-top: 40px;
  margin-left: 100px;
}
</style>