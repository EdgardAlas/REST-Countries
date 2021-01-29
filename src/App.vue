<template>
  <Header>
    <Theme :dark="isDark" @themeChanged="theme" />
  </Header>
  <router-view />
</template>

<script>
import Header from "./components/Header";
import Theme from "./components/ThemeSwitch";
import "@/assets/scss/components/app.scss";
import { ref, onMounted } from "vue";

export default {
  components: {
    Header,
    Theme,
  },
  setup() {
    onMounted(() => {
      addEventListener("click", (e) => {
        const select = document.querySelector(".select");

        if (
          select &&
          !(
            e.target.classList.contains("select__value") ||
            e.target.classList.contains("select__item") ||
            e.target.classList.contains("select__show")
          )
        ) {
          select.classList.remove("select--open");
        }
      });
    });

    const isDark = ref(false);
    const theme = (value) => {
      isDark.value = value;
    };

    return {
      isDark,
      theme,
    };
  },
};
</script>

<style lang="scss">
</style>
