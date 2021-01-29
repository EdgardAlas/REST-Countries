<template>
  <div>
    <article class="country-card" v-if="countryData !== null">
      <section class="country-card__header">
        <img
            :src="countryData.flag"
            :alt="countryData.name"
            class="country-card__flag"
        />
      </section>
      <section class="country-card__body">
        <section class="country-card__country-info">
          <h2 class="country-card__details-title">{{ countryData.name }}</h2>
          <ul class="country-card__details">
            <li class="country-card__property">
              Native Name:
              <span class="country-card__value">{{
                  countryData.nativeName
                }}</span>
            </li>
            <li class="country-card__property">
              Population:
              <span class="country-card__value">{{
                  parseInt(countryData.population).toLocaleString()
                }}</span>
            </li>
            <li class="country-card__property">
              Region:
              <span class="country-card__value">{{ countryData.region }}</span>
            </li>
            <li class="country-card__property">
              Sub Region:
              <span class="country-card__value">{{
                  countryData.subregion
                }}</span>
            </li>
            <li class="country-card__property">
              Capital:
              <span class="country-card__value">{{ countryData.capital }}</span>
            </li>
          </ul>
        </section>
        <section class="country-card__country-info">
          <h2 class="country-card__details-title">&nbsp;</h2>
          <ul class="country-card__details">
            <li class="country-card__property">
              Top Level Domain:
              <template
                  v-for="domain of countryData.topLevelDomain"
                  :key="domain"
              >
                <span class="country-card__value">{{ domain }}</span>
              </template>
            </li>
            <li class="country-card__property">
              Currencies:
              <template
                  v-for="currency of countryData.currencies"
                  :key="currency"
              >
                <span class="country-card__value">{{ currency.name }}</span>
              </template>
            </li>
            <li class="country-card__property">
              Sub Region:
              <span class="country-card__value">{{
                  countryData.subregion
                }}</span>
            </li>
          </ul>
        </section>
        <section class="country-card__country-info borders" v-if="countryData.borders && Object.entries(countryData.borders).length > 0">
          <h2 class="country-card__section-title">Borders</h2>
          <div class="country-card__border-group">
            <template v-for="border of countryData.borders" :key="border">
              <router-link :to="`/country/${border.alpha2Code}`" class="country-card__border">{{
                  border.name
                }}
              </router-link>
            </template>
          </div>
        </section>
      </section>
    </article>
  </div>
</template>

<script>
import "@/assets/scss/components/countryCard.scss";

export default {


  name: "CountryCard",
  props: {
    countryData: {
      type: Object,
      default: null,
    },
  },
  setup(props) {
    return {};
  },
};
</script>

<style>
</style>