<template>
  <div class="inputs-main">
    <div class="inputs">
      <comp-input
        Placeholder="Email"
        :disabled="false"
        type="email"
        icon="email"
        iconPosition="left"
        :status="true"
        @onChange="onChangeEMail"
      />

      <comp-input
        Placeholder="Password"
        :disabled="true"
        type="password"
        icon="lock"
        iconPosition="right"
        :status="false"
        hint="Lütfen tekrar deneyiniz!"
        @onChange="onChangePassword"
      />
      <comp-input
        Placeholder="Number"
        :disabled="true"
        type="password"
        iconPosition="left"
        icon="numbers"
      />
      <comp-input
        Placeholder="Placeholder"
        :disabled="true"
        type="password"
        iconPosition="none"
      />
    </div>
    <p class="text">E-Mail: {{ email }}</p>
    <p class="text">Password: {{ password }}</p>
  </div>
</template>

<script>
import compInput from "../components/Input.vue";

export default {
  components: {
    compInput,
  },
  data() {
    return {
      email: "",
      password: "",
    };
  },

  methods: {
    onChangeEMail(e) {
      this.email = e;
    },
    onChangePassword(e) {
      this.password = e;
    },
  },
};
</script>


<style scoped>
.inputs {
  display: flex;
  gap: 20px;
}

.inputs-main {
  display: flex;
  flex-direction: column;
  margin: 50px;
}
.text {
  width: 784px;
  background-color:  whitesmoke;
  padding: 12px;
  border-radius: 8px;
}
</style>