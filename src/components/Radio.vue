<template>
  <div class="radio">
    <input
      :class="`${radioStyle}-radio-${radioSize}`"
      type="checkbox"
      @click="radioFunc"
      :value="radioValue"
    />
  </div>
</template>

<script>
export default {
  props: {
    radioStyle: {
      type: String,
      default: "primary",
    },
    radioSize: {
      type: String,
      default: "normal",
    },
    radioValue: {
      type: String,
      default: "normal",
    },
  },

  methods: {
    radioFunc(e) {
      this.$emit("radioFunc", e);
    },
  },
};
</script>

<style lang="scss" scoped>
.primary-radio-small {
  -webkit-appearance: none;
  background-color: #ffffff;
  border: 2px solid #cccccc;
  border-radius: 50%;
  display: inline-block;
  position: relative;
  width: 16px;
  height: 16px;

  &:hover {
    border: 2px solid #ff904c;
  }
  &:checked {
    
    border: 2px solid #ff6000;
  }
  &:checked:after {
    content: "";
    font-size: 12px;
    position: absolute;
    border-radius: 50%;
    width: 8px;
    height: 8px;
    left: 2px;
    top: 2px;
    background-color: #ff6000;
  }
}

.primary-radio-normal {
  -webkit-appearance: none;
  background-color: #ffffff;
  width: 20px;
  height: 20px;
  border: 2px solid #cccccc;
  border-radius: 50%;
  display: inline-block;
  position: relative;

  &:hover {
    border: 2px solid #ff904c;
  }
  &:checked {
    
    border: 2px solid #ff6000;
  }
  &:checked:after {
    content: "";
    font-size: 14px;
    position: absolute;
    border-radius: 50%;
    width: 10px;
    height: 10px;
    left: 3px;
    top: 3px;
    background-color: #ff6000;
  }
}
.primary-radio-large {
  -webkit-appearance: none;
  background-color: #ffffff;
  width: 24px;
  height: 24px;
  border: 2px solid #cccccc;
  border-radius: 50%;
  display: inline-block;
  position: relative;

  &:hover {
    border: 2px solid #ff904c;
  }
  &:checked {
    
    border: 2px solid #ff6000;
  }
  &:checked:after {
    content: "";

    position: absolute;
    border-radius: 50%;
    width: 12px;
    height: 12px;
    left: 4px;
    top: 4px;
    background-color: #ff6000;
  }
}

.secondary-radio-small {
  -webkit-appearance: none;
  background-color: #ffffff;
  width: 16px;
  height: 16px;
  border: 2px solid #cccccc;
  border-radius: 50%;
  display: inline-block;
  position: relative;

  &:hover {
    border: 2px solid #99aaff;
  }
  &:checked {
    
    border: 2px solid #6b83fa;
  }
  &:checked:after {
    content: "";
    position: absolute;
    border-radius: 50%;
    width: 8px;
    height: 8px;
    left: 2px;
    top: 2px;
    background-color: #6b83fa;
  }
}
.secondary-radio-normal {
  -webkit-appearance: none;
  background-color: #ffffff;
  width: 20px;
  height: 20px;
  border: 2px solid #cccccc;
  border-radius: 50%;
  display: inline-block;
  position: relative;

  &:hover {
    border: 2px solid #99aaff;
  }
  &:checked {
    
    border: 2px solid #6b83fa;
  }
  &:checked:after {
    content: "";

    position: absolute;
    border-radius: 50%;
    width: 10px;
    height: 10px;
    left: 3px;
    top: 3px;
    background-color: #6b83fa;
  }
}
.secondary-radio-large {
  -webkit-appearance: none;
  background-color: #ffffff;
  width: 24px;
  height: 24px;
  border: 2px solid #cccccc;
  border-radius: 50%;
  display: inline-block;
  position: relative;

  &:hover {
    border: 2px solid #99aaff;
  }
  &:checked {

    border: 2px solid #6b83fa;
  }
  &:checked:after {
    content: "";

    position: absolute;
border-radius: 50%;
    width: 12px;
    height: 12px;
    left: 4px;
    top: 4px;
    background-color: #6b83fa;
  }
}
</style>