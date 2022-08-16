<template>
  <div>
    <compCheckbox
      checkboxStyle="primary"
      checkboxSize="small"
      @checkFunc="func1"
    />
    <compCheckbox
      checkboxStyle="primary"
      checkboxSize="normal"
      @checkFunc="func2"
    />
    <compCheckbox
      checkboxStyle="primary"
      checkboxSize="large"
      @checkFunc="func3"
    />
    <compCheckbox
      checkboxStyle="secondary"
      checkboxSize="small"
      @checkFunc="func1"
    />

    <compCheckbox
      checkboxStyle="secondary"
      checkboxSize="normal"
      @checkFunc="func2"
    />

    <compCheckbox
      checkboxStyle="secondary"
      checkboxSize="large"
      @checkFunc="func3"
    />
  </div>
</template>

<script>
import compCheckbox from "../components/Checkbox.vue";

export default {
  components: {
    compCheckbox,
  },
  methods: {
    func1() {
      console.log("func1");
    },
    func2() {
      console.log("func2");
    },
    func3() {
      console.log("func3");
    },
  },
};
</script>


<style scoped>
</style>