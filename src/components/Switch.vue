<template>
  <div>
    <label @click="switchFunc" class="switch">
      <input type="checkbox" />
      <span class="slider round"></span>
    </label>
  </div>
</template>
<script>
export default {
  props: {
    switchValue: {
      type: String,
      default: "",
    },
  },

  methods: {
    switchFunc(e) {
      this.$emit("switchFunc", e);
    },
  },
};
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
  background: #f0f0f0;
  border: 2px solid #dadada;
  border-radius: 32px;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 24px;
  width: 24px;
  left: 2px;
  bottom: 2px;
  background-color: #006907;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

input:checked + .slider {
  background: #e5ffe7;
  border: 2px solid #008a09;
  border-radius: 32px;
}

input + .slider:before {
  background: #8c8c8c;
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