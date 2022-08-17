<template >
  <div class="tab">
    <div>
      <ul class="tabs-ul">
        <li v-for="tab in tabs" :key="tab" class="tabs-li">
          <a
            class="tabs-link"
            :class="{ 'tabs-li-active': tab === selected }"
            @click="setTab(tab)"
          >
            {{ tab }}
          </a>
        </li>
      </ul>

      <slot></slot>
    </div>
    <Divider dividerSize="" dividerType="hepsiburada" />
    <Divider class="divider2" dividerSize="" dividerType="normal" />
  </div>
</template>

<script>
import Divider from "./Divider.vue";
export default {
  components: {
    Divider,
  },
  props: {
    tabs: {
      type: Array,
      required: true,
    },
    selected: {
      type: String,
      required: true,
    },
  },
  methods: {
    setTab(tab) {
      this.$emit("selected", tab);
    },
  },
};
</script>

<style lang="scss" scoped>
.tab {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.tabs-ul {
  display: flex;
}
.tabs-li {
  padding-bottom: 10px;
  border-bottom: 1px solid #dadada;
  list-style: none;
}

.tabs-li-active {
  border-bottom: 3px solid #ff6000;
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
}

.tabs-link {
  padding: 10px 16px;
  cursor: default;
  color: #9b9b9b;
}
.divider2 {
  margin-top: 20px;
}
</style>