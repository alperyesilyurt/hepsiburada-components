<template>
  <div class="check-radio">
    <p class="text">{{values}} </p>
    <div class="checkbox">
      <p class="text">Checkbox</p>
      <compCheckbox
        checkboxStyle="primary"
        checkboxSize="small"
        @checkFunc="func1"
        :checkboxStatus="values"
        
        
      />
      <compCheckbox
        checkboxStyle="primary"
        checkboxSize="medium"
        @checkFunc="func2"

      />
      <compCheckbox
        checkboxStyle="primary"
        checkboxSize="large"
        @checkFunc="func3"
      />
      <compCheckbox
        checkboxStyle="secondary"
        checkboxSize="small"
        @checkFunc="func1"
      />

      <compCheckbox
        checkboxStyle="secondary"
        checkboxSize="medium"
        @checkFunc="func2"
      />

      <compCheckbox
        checkboxStyle="secondary"
        checkboxSize="large"
        @checkFunc="func3"
      />
    </div>
    <div class="radio">
      <p class="text">Radio</p>
      <compRadio radioStyle="primary" radioSize="small" @radioFunc="func1" />
      <compRadio radioStyle="primary" radioSize="medium" @radioFunc="func2" />
      <compRadio radioStyle="primary" radioSize="large" @radioFunc="func3" />
      <compRadio radioStyle="secondary" radioSize="small" @radioFunc="func1" />
      <compRadio radioStyle="secondary" radioSize="medium" @radioFunc="func2" />
      <compRadio radioStyle="secondary" radioSize="large" @radioFunc="func3" />
    </div>
  </div>
</template>

<script>
import compCheckbox from "../components/Checkbox.vue";
import compRadio from "../components/Radio.vue";
import axios from "axios"

export default {
  components: {
    compCheckbox,
    compRadio,
  },

  data(){
    return{
      values: null,
    }
  },

  mounted(){
    axios.get('http://localhost:6002/jsonRead').then(res=>{
        this.values = res.data;
        console.log("API",this.values)
      })
  },
  methods: {
    func1() {
      console.log("func1");
    },
    func2() {
      console.log("func2");
    },
    func3() {
      console.log("func3");
    },
  },
};
</script>


<style scoped>
.check-radio {
  margin: 50px;
  display: flex;
  flex-direction: column;
  gap: 50px;
}

.checkbox {
  display: flex;
  padding: 20px;
  background-color: whitesmoke;
  width: max-content;
  border-radius: 8px;
  align-items: center;
}

.radio {
  display: flex;
  padding: 20px;
  background-color: whitesmoke;
  width: max-content;
  border-radius: 8px;
  align-items: center;
}

.text {
  font-family: sans-serif;
}
</style>