<template>
  <div class="input">
    <input
      class="input-content"
      :class="`input-${inputStyle}`"
      :placeholder="inputPlaceholder"
      :type="type"
      @input="onChange"
      
    />
    
  </div>
</template>

<script>
export default {
  methods: {
    onChange(event) {
      this.$emit("onChange", event.target.value);
    },
  },
  props: {
    inputPlaceholder: {
      type: String,
      default: "",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    inputStyle: {
      type: String,
      default: "default",
    },
    type: {
      type: String,
      default: "text",
    },
    
  },
};
</script>

<style lang="scss" scoped>
.input {
  &-content {
    padding: 12px;
    border-radius: 8px;
    border: none;
  }
  ::placeholder {
    color: #9b9b9b;
  }
  &-default {
    background: #e5e5e5;
  }

  &-default:hover {
    background: #f0f0f0;
  }

  &-default:focus {
    outline: 2px solid #ff6000;
    background: #ffffff;
  }
  &-error {
    background: #ffe5e5;
    border: 2px solid #fa0000;
  }
  &-error:focus {
    outline: 0px;
  }
}
</style>