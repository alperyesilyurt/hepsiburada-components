<template>
  <div class="btn">
    <button
      :class="`btn-content btn-content-${buttonType}`"
      :disabled="disabled"
      @click="handleButton($event)"
    >
      {{ buttonText }}
      <i class="material-icons input-icon">
        {{ icon }}
      </i>
    </button>
  </div>
</template>


<script>
export default {
  props: {
    buttonText: {
      type: String,
      default: "Primary Button",
    },

    buttonType: {
      type: String,
      default: "primary",
    },

    disabled: {
      type: Boolean,
      default: false,
    },
    icon: {
      type: String,
      default: "",
    },
  },
  methods: {
    handleButton(e) {
      this.$emit("click", e);
    },
  },
};
</script>


<style lang="scss" scoped>
.btn {
  &-content {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 12px 16px;
    border-radius: 8px;
    border: none;
    gap: 10px;
    &-primary {
      background-color: #ff6000;
      color: #ffffff;
      &:hover:not([disabled]) {
        background-color: #bf4800;
      }
    }
    &-variant {
      background-color: #ffefe5;
      color: #ff6000;
      &:hover:not([disabled]) {
        background-color: #ffbf99;
        color: #bf4800;
      }
    }
    &-secondary {
      background-color: #6b83fa;
      color: #ffffff;
      &:hover:not([disabled]) {
        background-color: #5365bf;
      }
    }
    &-bordered {
      padding: 10px 14px;
      background-color: transparent;
      border: 2px solid #dadada;
      color: #212121;
      &:hover:not([disabled]) {
        background-color: #f0f0f0;
      }
    }
    &-ghost {
      background-color: transparent;
      color: #212121;
      &:hover:not([disabled]) {
        background-color: #f0f0f0;
      }
    }
  }
  &-content[disabled] {
    cursor: not-allowed;
    opacity: 0.38;
  }
}
</style>
