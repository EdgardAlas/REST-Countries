<template>
  <button @click="changeTheme" class="switch" v-if="!dark">
    <i class="fas fa-moon switch__icon"></i>
    Dark Mode
  </button>
  <button @click="changeTheme" class="switch" v-else>
    <i class="fas fa-sun switch__icon"></i>
    Light Mode
  </button>
</template>

<script>
import "@/assets/scss/components/themeSwitch.scss";
export default {
  name: "ThemeSwitch",
  props: {
    dark: Boolean,
  },
  setup(props, { emit }) {
    const changeTheme = () => {
      emit("themeChanged", !props.dark);
      document.body.classList.toggle("dark");
    };
    return {
      changeTheme,
    };
  },
};
</script>

<style lang="scss">
</style>