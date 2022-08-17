<template>
  <div class="input">
    <div class="icon-div" :class="`${checkIconPosition(iconPosition)}`">
      <i
        id="icon-id"
        @click="showPassword"
        class="material-icons input__icon"
        >{{ icon }}</i
      >
    </div>

    <input
      class="input-content"
      :class="`input-${checkPosition(iconPosition)}`"
      :placeholder="Placeholder"
      :type="type"
      @input="onChange"
      @click="focusFunc"
    />
  </div>
</template>

<script>
export default {
  methods: {
    onChange(event) {
      this.$emit("onChange", event.target.value);
    },
    showPassword() {
      if (this.icon == "lock") {
        this.type = "text";
        this.icon = "visibility";
      } else if (this.icon == "visibility") {
        this.type = "password";
        this.icon = "lock";
      } else if (this.icon == "numbers") {
        console.log("numara sekmesi acıldı");
      }
    },
    checkPosition() {
      if (this.iconPosition == "left") {
        return "default-icon";
      } else if (this.iconPosition == "none") {
        return "default-no-icon";
      } else if (this.iconPosition == "right") {
        return "default-right-icon";
      }
    },
    checkIconPosition() {
      if (this.iconPosition == "left") {
        return "icon-left";
      } else if (this.iconPosition == "right") {
        return "icon-right";
      } else if (this.iconPosition == "none") {
        return "icon-none";
      }
    },
    focusFunc() {
      //document.getElementById("icon-id").style.color="#ff6000";
    },
  },

  props: {
    Placeholder: {
      type: String,
      default: "",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      default: "text",
    },
    icon: {
      type: String,
      default: "",
    },
    iconPosition: {
      type: String,
      default: "left",
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
    &:hover {
      background: #f0f0f0;
    }

    &:focus {
      outline: 2px solid #ff6000;
      background: #ffffff;
    }
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
  &-default-right-icon {
    padding-top: 12px;
    padding-bottom: 12px;
    padding-right: 44px;
    padding-left: 12px;
  }

  &-error {
    background: #ffe5e5;
    border: 2px solid #fa0000;
    padding: 12px;
    &:focus {
      outline: 0px;
    }
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

  .icon-left {
    & .input__icon {
      margin-left: 14px;
    }
  }

  .icon-right {
    & .input__icon {
      margin-left: 160px;
    }
  }

  .icon-none {
    & .input__icon {
      width: 0px;
      height: 0px;
    }
  }

  .icon-div:focus {
    & .input__icon {
      color: #ff6000;
    }
  }
}
</style>