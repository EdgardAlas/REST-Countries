<template>
  <article class="small-card" v-if="country !== null">
    <section class="small-card__header">
      <router-link :to="`/country/${country.alpha2Code}`"
        ><img :src="country.flag" :alt="country.name" class="small-card__flag"
      /></router-link>
    </section>
    <section class="small-card__body">
      <h2 class="small-card__name">{{ country.name }}</h2>
      <ul class="small-card__info">
        <li class="small-card__item">
          Population:
          <span class="small-card__value">{{
            country.population.toLocaleString()
          }}</span>
        </li>
        <li class="small-card__item">
          Region:
          <span class="small-card__value">{{ country.region }}</span>
        </li>
        <li class="small-card__item">
          Capital: <span class="small-card__value">{{ country.capital }}</span>
        </li>
      </ul>
    </section>
  </article>
</template>

<script>
import "@/assets/scss/components/smallCard.scss";
export default {
  name: "CountrySmallCard",
  props: {
    country: {
      type: Object,
      default: null,
    },
  },
};
</script>

<style lang="scss">
</style>