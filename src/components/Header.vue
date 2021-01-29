<template>
  <header class="header">
    <section class="header__title-section">
      <router-link to="/" class="link">
        <h1 class="header__title">Where in the world?</h1>
      </router-link>
    </section>
    <slot></slot>
  </header>
</template>

<script>
import "@/assets/scss/components/header.scss";
export default {
  name: "Header",
};
</script>

<style lang="scss">
</style>