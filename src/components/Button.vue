<template>
   <div class="button-wrapper">
        <button 
        :class="buttonType"
        :disabled="disabled"
        @click="handleButton($event)"
        
        >
        {{buttonText}}
        </button>
       
   </div>
</template>


<script>


export default {


    props : {

        buttonText: {
            type: String,
            default: ()=> 'Primary Button'
        },

        buttonType: {
            type: String,
            default: ()=> "primary"
        },
            
        disabled: {
            type: Boolean,
            default: false
            
        },
        icon: {
            type: String,
            default: ''
        },


    },
    methods :{
        handleButton(e){
            this.$emit('click', e);
        }
    }
    
}
</script>


<style lang="scss" scoped>

button{
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 12px 16px ;
border-radius: 8px;
border: none;

&[disabled]{
cursor: not-allowed;
opacity: 0.38;
}
&.primary{
background-color: #FF6000;
color: #FFFFFF;
}
&.variant{
background-color: #FFEFE5;
color: #FF6000;
}
&.secondary{
background-color: #6B83FA;
color: #FFFFFF;
}
}


</style>
