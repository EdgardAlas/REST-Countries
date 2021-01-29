<template>
  <div class="contry-container">
    <button @click="$router.go(-1); " class="go-back">
      <i class="fas fa-arrow-left"></i> Back
    </button>
    <CountryCard :countryData="country" />
  </div>
</template>

<script>
import {ref} from "vue";
import {onBeforeRouteUpdate, useRoute} from "vue-router";
import api from "@/modules/countryAPI";
import CountryCard from "@/components/CountryCard";

export default {
  name: "country",
  components: {
    CountryCard,
  },
  setup() {
    const route = useRoute();
    const countryCode = route.params.code;
    const country = ref({});

    const getIndividualCountry = async (code) => {
      country.value = await api.byCode(code);
      country.value.borders.length &&
        (country.value.borders = await api.borders(
          country.value.borders.join(";")
        ));
    };

    onBeforeRouteUpdate((to) => {
      getIndividualCountry(to.params.code);
      return scrollTo(0, 0);
    });

    getIndividualCountry(countryCode);

    return {
      country,
    };
  },
};
</script>
    
<style lang="scss">
.contry-container {
  margin-top: 2rem;
  margin-bottom: 2rem;
}

.go-back {
  margin-left: 2em;
  width: 6rem;
  padding: 0.5rem 1rem;
  box-shadow: $box-shadown;
  cursor: pointer;
  margin-bottom: 2rem;
  color: var(--text-color);
  background-color: var(--element-color);
  border: none;
  &:focus {
    outline: none;
  }
}
</style>