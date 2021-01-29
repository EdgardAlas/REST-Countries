<template>
  <div class="search-section__input-section">
    <i class="fas fa-search search-section__icon"></i>
    <input
      type="search"
      class="search-section__input"
      autofocus
      v-model="inputValue"
    />
  </div>
</template>

<script>
import { ref, watch } from "vue";

export default {
  name: "SearchInput",
  setup(_, { emit }) {
    const inputValue = ref("");

    watch(inputValue, (value, old) => {
      emit("inputValue", value);
    });

    return {
      inputValue,
    };
  },
};
</script>

<style lang="scss">
</style>