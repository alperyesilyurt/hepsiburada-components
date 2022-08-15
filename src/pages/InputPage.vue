<template>
  <div class="inputs-main">
    <div class="inputs">
      <comp-input
        Placeholder="Email"
        :disabled="false"
        type="email"
        icon="email"
        iconPosition="left"
        @onChange="onChangeEMail"
      />

      <comp-input
        Placeholder="Password"
        :disabled="false"
        type="password"
        icon="lock"
        iconPosition="right"
        @onChange="onChangePassword"
      />
      <comp-input
        Placeholder="Placeholder"
        :disabled="false"
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
  margin-top: 40px;
  margin-left: 100px;
}

.inputs-main {
  display: flex;
  flex-direction: column;
}
.text {
  margin-left: 100px;
  background-color: #e5e5e5;
  padding: 12px;
  border-radius: 8px;
}
</style>