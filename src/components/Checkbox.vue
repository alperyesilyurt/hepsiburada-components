<template>
  <div class="checkbox">
    <input
      :class="`${checkboxStyle}-checkbox-${checkboxSize}`"
      type="checkbox"
      @click="checkFunc"
      :value="checkboxValue"
    />
  </div>
</template>

<script>
export default {
  props: {
    checkboxStyle: {
      type: String,
      default: "primary",
    },
    checkboxSize: {
      type: String,
      default: "normal",
    },
    checkboxValue: {
      type: String,
      default: "",
    },
  },

  methods: {
    checkFunc(e) {
      this.$emit("checkFunc", e);
    },
  },
};
</script>

<style lang="scss" scoped>
.primary-checkbox-small {
  -webkit-appearance: none;
  background-color: #ffffff;
  border: 2px solid #cccccc;
  border-radius: 4px;
  display: inline-block;
  position: relative;
  width: 16px;
  height: 16px;

  &:hover {
    border: 2px solid #ff904c;
  }
  &:checked {
    background: #ff6000;
    border: 2px solid #ff6000;
  }
  &:checked:after {
    content: "\2714";
    font-size: 12px;
    position: absolute;
    left: 1px;
    color: #ffffff;
  }
}

.primary-checkbox-normal {
  -webkit-appearance: none;
  background-color: #ffffff;
  width: 20px;
  height: 20px;
  border: 2px solid #cccccc;
  border-radius: 6px;
  display: inline-block;
  position: relative;

  &:hover {
    border: 2px solid #ff904c;
  }
  &:checked {
    background: #ff6000;
    border: 2px solid #ff6000;
  }
  &:checked:after {
    content: "\2714";
    font-size: 14px;
    position: absolute;

    left: 2px;
    color: #ffffff;
  }
}
.primary-checkbox-large {
  -webkit-appearance: none;
  background-color: #ffffff;
  width: 24px;
  height: 24px;
  border: 2px solid #cccccc;
  border-radius: 8px;
  display: inline-block;
  position: relative;

  &:hover {
    border: 2px solid #ff904c;
  }
  &:checked {
    background: #ff6000;
    border: 2px solid #ff6000;
  }
  &:checked:after {
    content: "\2714";
    font-size: 18px;
    position: absolute;

    left: 3px;
    color: #ffffff;
  }
}

.secondary-checkbox-small {
  -webkit-appearance: none;
  background-color: #ffffff;
  width: 16px;
  height: 16px;
  border: 2px solid #cccccc;
  border-radius: 4px;
  display: inline-block;
  position: relative;

  &:hover {
    border: 2px solid #99aaff;
  }
  &:checked {
    background: #6b83fa;
    border: 2px solid #6b83fa;
  }
  &:checked:after {
    content: "\2714";
    font-size: 12px;
    position: absolute;
    left: 1px;
    color: #ffffff;
  }
}
.secondary-checkbox-normal {
  -webkit-appearance: none;
  background-color: #ffffff;
  width: 20px;
  height: 20px;
  border: 2px solid #cccccc;
  border-radius: 6px;
  display: inline-block;
  position: relative;

  &:hover {
    border: 2px solid #99aaff;
  }
  &:checked {
    background: #6b83fa;
    border: 2px solid #6b83fa;
  }
  &:checked:after {
    content: "\2714";
    font-size: 14px;
    position: absolute;
    left: 2px;
    color: #ffffff;
  }
}
.secondary-checkbox-large {
  -webkit-appearance: none;
  background-color: #ffffff;
  width: 24px;
  height: 24px;
  border: 2px solid #cccccc;
  border-radius: 8px;
  display: inline-block;
  position: relative;

  &:hover {
    border: 2px solid #99aaff;
  }
  &:checked {
    background: #6b83fa;
    border: 2px solid #6b83fa;
  }
  &:checked:after {
    content: "\2714";
    font-size: 18px;
    position: absolute;

    left: 3px;
    color: #ffffff;
  }
}
</style>