<template>
  <div :class="selectClasses">
    <span @click="open" class="select__value">
      {{ valueSelect }}
    </span>
    <i @click="open" class="fas fa-chevron-down select__show"></i>
    <ul class="select__list">
      <template v-for="(option, index) in options" :key="index">
        <li
          class="select__item"
          :class="selectedItems[index] ? 'select__item--active' : ''"
          @click="sendValue(option.code, index)"
        >
          {{ option.name }}
        </li>
      </template>
    </ul>
  </div>
</template>

<script>
import { ref, watch, onMounted } from "vue";
import "@/assets/scss/components/select.scss";
export default {
  name: "SelectCountry",
  setup(_, { emit }) {
    const selectClasses = ref(["select"]);
    let isOpen = ref(selectClasses.value.includes("select--open"));

    const options = [
      { code: "africa", name: "Africa" },
      { code: "americas", name: "Americas" },
      { code: "asia", name: "Asia" },
      { code: "europe", name: "Europe" },
      { code: "oceania", name: "Oceania" },
    ];

    const selectedItems = ref(options.map(() => false));
    let valueSelect = ref("Filter by Region");

    const open = (cambiar = true) => {
      if (isOpen.value) {
        selectClasses.value.splice(1, 1);
      } else {
        selectClasses.value.push("select--open");
      }
      cambiar && (isOpen.value = !isOpen.value);
    };

    const sendValue = (value, key) => {
      selectedItems.value = selectedItems.value.map(() => false);
      selectedItems.value[key] = true;
      valueSelect.value = options[key].name;
      open(false);
      emit("changeValue", { value, open });
    };

    return {
      options,
      valueSelect,
      selectClasses,
      open,
      sendValue,
      selectedItems,
    };
  },
};
</script>

<style lang="scss">
</style>