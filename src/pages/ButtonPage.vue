<template>
  <div class="buttons">
    <compButton
      @click="func1"
      :disabled="false"
      buttonType="primary"
      buttonText="Primary"
      icon="login"
    />

    <compButton
      @click="func2"
      :disabled="true"
      buttonType="variant"
      buttonText="Variant"
      icon="bluetooth"
    />

    <compButton
      @click="func3"
      :disabled="false"
      buttonType="secondary"
      buttonText="Secondary"
      icon="backup"
    />

    <compButton
      @click="func1"
      :disabled="false"
      buttonType="bordered"
      buttonText="Bordered"
      icon="settings"

    />

    <compButton
      @click="func1"
      :disabled="false"
      buttonType="ghost"
      buttonText="Ghost"
      icon="info"
    />
  </div>
</template>

<script>
import compButton from "../components/Button.vue";

export default {
  components: {
    compButton,
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
.buttons {
  display: flex;
  flex-direction: row;
  gap: 20px;
  margin:50px;
}
</style>