<template>
   <div>
    <label @click="changeStatus" class="switch">
  <input   type="checkbox" > 
  <span class="slider round"></span>
</label>
   
   </div> 
</template>
<script>
export default {
    props: {
      statusFromParent : {
      type: Object,
      default: {},
    }

    }
    ,



    methods : {
        changeStatus(){
            this.$emit("statusFromChild",this.statusFromParent)
        }
    }
    
   
    
}
</script>

<style scoped>

.switch {
  position: absolute;
  width: 56px;
  height: 32px;
}
.switch input { 
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: -2px;
  bottom: 0;
  background: #F0F0F0;
  border: 2px solid #DADADA;
  border-radius: 32px;
  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 24px;
  width: 24px;
  left: 2px;
  bottom: 2px;
  background-color: #006907;
  -webkit-transition: .4s;
  transition: .4s;
}




input:checked + .slider {

background: #E5FFE7;
border: 2px solid #008A09;
border-radius: 32px;
}

input + .slider:before {
 background: #8C8C8C;
}
input:checked + .slider:before {
 background: #006907;

}


input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}


/* Rounded sliders */
.slider.round {
  border-radius: 32px;
  
}

.slider.round:before {
  border-radius: 50%;
}
</style>