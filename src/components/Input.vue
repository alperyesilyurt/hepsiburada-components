<template>
  <div class="input">
    <input
      class="input-content"
      :class="`input-${inputType}`"
      :placeholder="inputPlaceholder"
    />
  </div>
</template>

<script>
export default {
  props: {
    inputPlaceholder: {
      type: String,
      default: "",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    inputType: {
      type: String,
      default: "primary",
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
  &-primary {
    background: #e5e5e5;
  }

  &-primary:hover {
    background: #f0f0f0;
  }

  &-primary:focus {
    outline: 2px solid #ff6000;
    background: #ffffff;
  }






  
}
</style>