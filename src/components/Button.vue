<template>
   <div class="button-wrapper">
        <button 
        :class="buttonType"
        :disabled="disabled"
        @click="handleButton($event)"
        
        
        >
        {{buttonText}}
        <img :src="resolveSvg(icon)"/>

        </button>
       
   </div>
</template>


<script>


export default {

    props : {

        buttonText: {
            type: String,
            default: 'Primary Button'
        },

        buttonType: {
            type: String,
            default: "primary"
        },
            
        disabled: {
            type: Boolean,
            default: false
            
        },
        icon: {
            type: Object,
            default: 'settings.svg'
        },


    },
    methods :{
        handleButton(e){
            this.$emit('click', e);
        },
        resolveSvg: function (path) {
            let images = require.context('../assets/', false, /\.svg$|\.jpg$/)
            return images("./"+path)
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
gap: 10px;
&[disabled]{
cursor: not-allowed;
opacity: 0.38;
}
&.primary{
background-color: #FF6000;
color: #FFFFFF;
}
&.primary:hover{
background-color: #BF4800;
}
&.variant{
background-color: #FFEFE5;
color: #FF6000;
}
&.variant:hover{
background-color: #FFBF99;
color: #BF4800;
}
&.secondary{
background-color: #6B83FA;
color: #FFFFFF;
}
&.secondary:hover{
background-color: #5365BF;

}
&.bordered{
padding: 10px 14px ;
background-color: transparent;
border: 2px solid #DADADA;
color: #212121;
}
&.bordered:hover{
background-color: #F0F0F0;

}
&.ghost{
background-color: transparent;
color: #212121;
}
&.ghost:hover{
background-color: #F0F0F0;

}



}




</style>
