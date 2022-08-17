<template>
  <div class="divider">
    <span class="myDivider"    >
      <div  v-show="dividerType=='hepsiburada'" class="hepsiburada">
        <div class="div1"></div>
        <div class="div2"></div>
        <div class="div3"></div>
        <div class="div4"></div>
        <div class="div5"></div>
        <div class="div6"></div>
      </div>
      <div v-show="dividerType=='normal'" class="normal">
        <div class="div7"></div>
      </div>
    </span>
  </div>
</template>

<script>
export default {
  props: {
    dividerType: {
      type: String,
      default: "hepsiburada",
    },
    dividersize: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss" scoped>
.myDivider { 
  display: flex;
  flex-direction: column;

}
.hepsiburada {
  display: flex;  
}
.div1 {
  background: #8216e3;
  width: 32.15px;
  height: 2px;
}
.div2 {
  background: #00caf0;
  width: 53.59px;
  height: 2px;
}
.div3 {
  background: #ff5200;
  width: 97.36px;
  height: 2px;
}
.div4 {
  background: #ff9b00;
  width: 44.66px;
  height: 2px;
}
.div5 {
  background: #74155f;
  width: 31.26px;
  height: 2px;
}
.div6 {
  background: #00ba93;
  width: 41.98px;
  height: 2px;
}
.div7 {
  background: #DADADA;
  width: 300px;
  height: 1px;
}
</style>