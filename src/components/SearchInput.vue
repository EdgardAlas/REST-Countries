<template>
  <div class="search-section__input-section">
    <i class="fas fa-search search-section__icon" @click="searchButton"></i>
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

    const searchButton = () => {
      emit("inputValueClear", inputValue);
    };

    watch(inputValue, (value, old) => {
      emit("inputValue", value);
    });

    return {
      inputValue,
      searchButton,
    };
  },
};
</script>

<style lang="scss">
</style>