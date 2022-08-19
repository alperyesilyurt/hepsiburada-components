<template >
  <div class="tab">
    <Tabs
      :tabs="['Home', 'Settings', 'Profile', 'Basket', 'Favorites']"
      :selected="selected"
      @selected="setSelected"
    >
      <Tab :isSelected="selected === 'Home'">
        <p class="text">welcome home</p>
      </Tab>
      <Tab :isSelected="selected === 'Settings'">
        <p class="text">welcome settings</p>
      </Tab>
      <Tab :isSelected="selected === 'Profile'">
        <p class="text">welcome profile</p>
      </Tab>
      <Tab :isSelected="selected === 'Basket'">
        <p class="text">welcome basket</p>
      </Tab>
      <Tab :isSelected="selected === 'Favorites'">
        <p class="text">welcome favorites</p>
      </Tab>
    </Tabs>
  </div>
</template>

<script>
import Tab from "../components/Tab.vue";
import Tabs from "../components/Tabs.vue";

export default {
  components: {
    Tab,
    Tabs,
    
  },
  methods: {
    setSelected(tab) {
      console.log(this.selected);
      this.selected = tab;
    },
  },
  data() {
    return {
      selected: "Home",
    };
  },
};
</script>

<style lang="scss" scoped>
.tab {
  margin: 50px;
}
.text{
  padding: 20px;
  background-color:  whitesmoke;
  border-radius: 5px;
  
}
</style>

