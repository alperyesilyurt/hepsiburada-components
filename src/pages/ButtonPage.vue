<template>
<div class="buttons">

 <compButton 
 @click="func1" 
 :disabled=false 
 buttonType="primary" 
 buttonText="Primary"
 />

 <compButton 
 @click="func2" 
 :disabled=false 
 buttonType="variant"
 buttonText="Variant"  
 />

 <compButton 
 @click="func3" 
 :disabled=true 
 buttonType="secondary"
 buttonText="Secondary"  
 />

 <compButton 
 @click="func1" 
 :disabled=false
 buttonType="bordered" 
 buttonText="Bordered"
 />
 
 <compButton 
 @click="func1" 
 :disabled=false
 buttonType="ghost" 
 buttonText="Ghost"
 />


</div>
  
  
</template>

<script>

import compButton from "../components/Button.vue"

export default{

components : {
    compButton,
},

methods : {

    func1(){
        console.log("func1")
    },
    func2(){
        console.log("func2")
    },
    func3(){
        console.log("func3")
    }


}






}
</script>


<style scoped>
.buttons{
  gap: 10px;
  margin-top: 40px;
  margin-left: 100px;
}
</style>