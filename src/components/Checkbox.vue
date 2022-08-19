<template>
  <div class="checkbox">
    <div
      class="checkbox-content"
      :class="`checkbox-content-${checkboxStyle}-${checkboxSize}-${clicked}`"
      @click="checkFunc"
    >
    <img class="icon" src="../assets/checkbox-icon.svg">
    </div>
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
    clicked: {
      type: String,
      default: "unclicked",
    },
    selected: {
      type: Boolean,
      default: false,
    },
  },

  methods: {
    checkFunc(e) {
      if (this.clicked == "clicked") {
        this.clicked = "unclicked";
      } else {
        this.clicked = "clicked";
      }
      this.$emit("checkFunc", e);
    },
    
  },
};
</script>

<style lang="scss" scoped>
.checkbox {
  &-content {
    background-color: #ffffff;
    border: 2px solid #cccccc;
    display: flex;
    justify-content: center;
    
    &-primary {
      $sizes: (
        small: 16,
        medium: 20,
        large: 24,
      );
      @each $name, $size in $sizes {
        &-#{$name}-unclicked {
          width: $size + px;
          height: $size + px;
          border-radius: $size/3 +px;
        }
        &-#{$name}-unclicked:hover {
          border: 2px solid #ff904c;
        }
        &-#{$name}-clicked {
          width: $size + px;
          height: $size + px;
          border-radius: $size/3 +px;
          background-color: #ff6000;
          border: 2px solid #ff6000;
        }
      }
    }

    &-secondary {
      $sizes: (
        small: 16,
        medium: 20,
        large: 24,
      );
      @each $name, $size in $sizes {
        &-#{$name}-unclicked {
          width: $size + px;
          height: $size + px;
          border-radius: $size/3 +px;
        }
        &-#{$name}-unclicked:hover {
          border: 2px solid #99aaff;
        }
        &-#{$name}-clicked {
          width: $size + px;
          height: $size + px;
          border-radius: $size/3 +px;
          background-color: #6b83fa;
          border: 2px solid #6b83fa;
        }
      }
    }
  }
}
.icon{
  padding: 3px;
}
</style>