<template>
  <div class="input">
    <div :class="`icon-${iconPosition}`">
      <i @click="showPassword" class="material-icons input-icon">
        {{ icon }}
      </i>
    </div>
    <input
      :class="`input-content ${showStatus(status)} ${showStatus(
        status
      )}-${iconPosition}`"
      :placeholder="Placeholder"
      :type="type"
      @input="onChange"
    />
    <p v-if="this.status == false" class="error-text">{{ hint }}</p>
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
    },
    showStatus(status) {
      if (status == true) {
        return "input-content-default";
      } else {
        return "input-content-error";
      }
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
      default: "",
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
      default: "Error message is here",
    },
    status: {
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
  .error-text {
    color: #fa0000;
    font-size: 12px;
    margin-top: 8px;
  }
  &-content {
    border-radius: 8px;

    &:hover {
      background: #f0f0f0;
    }

    &:focus {
      outline: 2px solid #ff6000;
      background: #ffffff;
    }

    &-default {
      background: #e5e5e5;
      border: none;

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

      &:focus {
        outline: 0px;
      }
      &-left {
        padding: 10px 12px 10px 44px;
      }
      &-none {
        padding: 10px;
      }
      &-right {
        padding: 10px 44px 10px 12px;
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
    $margins: (
      left: 14,
      none: 0,
      right: 160,
    );
    $widths: (
      left: 20,
      none: 0,
      right: 20,
    );

    @each $name, $margin in $margins {
      &-#{$name} {
        & .input-icon {
          margin-left: $margin + px;
        }
      }
    }
    @each $name, $width in $widths {
      &-#{$name} {
        & .input-icon {
          width: $width + px;
        }
      }
    }
  }
}
</style>