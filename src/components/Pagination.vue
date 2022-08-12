<template>
  <div class="input__container">
    <div :class="'input-effect ' + filled">
      <input
        :class="'effect ' + has_icon"
        type="text"
        @focus="show = !show;"
        :value="value"
        @blur="show = !show;"
        :placeholder="placeholder"
        @input="$emit('input', $event.target.value);"
      />
      <label :style="{ color: color }">{{ label }}</label>
      <span class="focus-border" :style="focus_border"></span>
    </div>
    <span class="input__hint" v-if="show">{{ hint }}</span>
    <i class="material-icons input__icon">{{ icon }}</i>
  </div>
</template>

<script>
export default {
  data: () => ({
    show: false
  }),
  computed: {
    filled() {
      if (!this.show && this.value) {
        return "has-content";
      }
      return "";
    },
    has_icon() {
      if (this.icon) {
        return "input__has_icon";
      }
      return;
    },
    focus_border() {
      return {
        "background-color": this.color
      };
    }
  },
  props: {
    value: { type: String, required: false, default: "" },
    label: { type: String, required: false, default: "" },
    hint: { type: String, required: false, default: "" },
    icon: { type: String, required: false, default: "" },
    placeholder: { type: String, required: false, default: "" },
    color: { type: String, required: false, default: "indigo" }
  }
};
</script>

<style scoped>
.input__container {
  width: 100%;
  padding: 0.5rem 0.5rem 0 0;
  text-align: left;
}

.input-effect {
  float: left;
  width: 100%;
  margin: 1.5rem 0rem 1.5rem 0;
  position: relative;
} /* necessary to give position: relative to parent. */

.input__icon {
  position: relative;
  left: 0rem;
  top: -3rem;
  opacity: 0.3;
}
.input__hint {
  float: left;
  width: 100%;
  margin: -1.2rem 0 0 0;
  position: relative;
  font-size: 0.8rem;
  opacity: 0.6;
}

.input__has_icon {
  padding-left: 2rem !important;
}

.effect {
  border: 0;
  padding: 4px 0;
  border-bottom: 1px solid #ccc;
  background-color: transparent;
}

.effect ~ .focus-border {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background-color: indigo;
  transition: 0.4s;
}

.effect:focus ~ .focus-border,
.has-content.effect ~ .focus-border {
  width: 100%;
  transition: 0.4s;
}

.effect ~ label {
  position: absolute;
  left: 0;
  width: 100%;
  top: -1.3rem;
  color: #aaa;
  transition: 0.3s;
  z-index: -1;
  letter-spacing: 0.5px;
}

.effect:focus ~ label,
.has-content.effect ~ label {
  top: -1rem;
  font-size: 0.8rem;
  color: indigo;
  transition: 0.3s;
}

::placeholder {
  opacity: 0.4;
}

input[type="text"] {
  color: #555;
  width: 100%;
  box-sizing: border-box;
  letter-spacing: 1px;
  outline: none;
}

label {
  font-size: 0.9rem;
}
</style>