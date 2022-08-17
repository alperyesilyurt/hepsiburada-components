<template>
  <div class="input">
    <div :class="`icon-${iconPosition}`">
      <i @click="showPassword" class="material-icons input-icon">
      {{ icon }}
      </i>
    </div>
    <input
      :class="`input-content input-content-default-${iconPosition}`"
      :placeholder="Placeholder"
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
    showPassword() {
      if (this.icon == "lock") {
        this.type = "text";
        this.icon = "visibility";
      } else if (this.icon == "visibility") {
        this.type = "password";
        this.icon = "lock";
      } 
    }
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
    error: {
      type: Boolean,
      default: true,
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

    &-default {
      &-left {
        padding: 12px 12px 12px 44px;
      }
      &-none {
        padding: 12px;
      }
      &-right {
        padding: 12px 44px 12px 12px;
      }
    }
    &-error {
      background: #ffe5e5;
      border: 2px solid #fa0000;
      padding: 12px;
      &:focus {
        outline: 0px;
      }
    }
  }

  .input-icon {
    position: absolute;
    width: 20px;
    height: 20px;
    margin-right: 10px;
    margin-top: 8px;
    color: #9b9b9b;
    cursor: pointer;
  }

  .icon {
    &-left {
      & .input-icon {
        margin-left: 14px;
      }
    }
    &-none {
      & .input-icon {
        width: 0px;
        height: 0px;
      }
    }
    &-right {
      & .input-icon {
        margin-left: 160px;
      }
    }
  }
}
</style>