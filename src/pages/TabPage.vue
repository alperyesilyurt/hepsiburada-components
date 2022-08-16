<template>
  <div class="tab">
    <compTab />
  </div>
</template>

<script>
import compTab from "../components/Tab.vue";
export default {
  components: {
    compTab,
  },
  methods: {
    func1() {
      console.log("func1");
    },
  },
};
</script>

<style lang="scss" scoped>
.tab {
  margin: 50px;
}
</style>