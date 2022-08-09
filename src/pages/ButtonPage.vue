<template>
  <div class="buttons">
    <compButton
      @click="func1"
      :disabled="false"
      buttonType="primary"
      buttonText="Click Me !"
    />

    <compButton
      @click="func2"
      :disabled="true"
      buttonType="variant"
      buttonText="Click Me 2 !"
    />

    <compButton
      @click="func3"
      :disabled="false"
      buttonType="secondary"
      buttonText="Click Me 3!"
    />

    <compButton @click="func1" :disabled="false" />
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
.buttons{
    display: flex;
    flex-direction: row;
    margin: 10px;
    gap: 50px;
    background-color: whitesmoke;

  width: 800px;
  height: 620px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  margin-top: 40px;
  margin-left: 100px;
}
</style>
