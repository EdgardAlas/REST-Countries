<template class="container">
  <main>
    <SearchSection>
      <SearchInput
        @inputValue="searchValue"
        @inputValueClear="searchClear"
      ></SearchInput>
      <div class="break"></div>
      <SelectCountry @changeValue="regionValue"></SelectCountry>
    </SearchSection>

    <div class="countries">
      <template v-for="(value, index) in countries" :key="index">
        <CountrySmallCard
          :country="value"
          v-if="
            searchCountry
              ? value.name.toLowerCase().includes(searchCountry.toLowerCase())
              : true
          "
        />
      </template>
    </div>
  </main>
</template>

<script>
import SearchSection from "@/components/SearchSection";
import SearchInput from "@/components/SearchInput";
import CountrySmallCard from "@/components/CountrySmallCard";
import SelectCountry from "@/components/SelectCountry";

import api from "@/modules/countryAPI";

import { ref, watch } from "vue";
export default {
  name: "home",
  components: {
    SelectCountry,
    SearchSection,
    SearchInput,
    CountrySmallCard,
  },
  setup() {
    const searchCountry = ref("");

    const countries = ref([]);

    const searchValue = (value) => {
      searchCountry.value = value;
    };

    const searchClear = () => {
      alert(3);
    };

    watch(countries, (value, old) => {
      //detectar cambios
    });

    const regionValue = async (e, closeSelect = true) => {
      const data = await api.byRegion(e.value);
      countries.value = data;
      closeSelect && e.open();
    };

    const init = async () => {
      const data = await api.all();
      countries.value = data;
    };

    init();

    return {
      searchCountry,
      searchValue,
      countries,
      regionValue,
      searchClear,
    };
  },
};
</script>

<style lang="scss">
.break {
  padding: 1rem;
}

.countries {
  margin-top: 2rem;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  margin-bottom: 2rem;
}
</style>