<template>
  <div class="input">
    <i
      v-if="checkIcon"
      @click="showPassword"
      class="material-icons input__icon"
      >{{ icon }}</i
    >
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
    checkIcon() {
      if (this.icon) {
        return true;
      } else {
        return false;
      }
    },
    showPassword() {
      if (this.icon == "lock") {
        this.type = "text";
        this.icon = "visibility";
      } else if (this.icon == "visibility") {
        this.type = "password";
        this.icon = "lock";
      }
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
      default: "default-no-icon",
    },
    type: {
      type: String,
      default: "text",
    },
    icon: {
      type: String,
      default: "",
    },
    hint: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss" scoped>
.input {
  ::placeholder {
    color: #9b9b9b;
  }
  &-content {
    border: none;
    background: #e5e5e5;
    border-radius: 8px;
  }
  &-content:hover {
    background: #f0f0f0;
  }
  &-content:focus {
    outline: 2px solid #ff6000;
    background: #ffffff;
  }
 
  &-default-icon {
    padding-top: 12px;
    padding-bottom: 12px;
    padding-right: 12px;
    padding-left: 44px;
  }
  &-default-no-icon {
    padding: 12px;
  }

  &-error {
    background: #ffe5e5;
    border: 2px solid #fa0000;
    padding: 12px;
  }
  &-error:focus {
    outline: 0px;
  }
  .input__icon {
    position: absolute;
    width: 20px;
    height: 20px;
    margin-left: 14px;
    margin-right: 10px;
    margin-top: 8px;
    color: #9b9b9b;
    cursor: pointer;
  }
}
</style>