<template>
  <div>
    <label for="currencySelect">Select Currency:</label>
    <select
      id="currencySelect"
      v-model="selectedCurrency"
      @change="updateCurrency"
    >
      <option
        v-for="(currency, index) in currencies"
        :key="index"
        :value="currency.value"
      >
        {{ currency.label }}
      </option>
    </select>
  </div>
</template>

<script setup>
import { ref } from "vue";
import store from "../../store.js";

const selectedCurrency = ref("");
const currencies = [
  { label: "USD ($)", value: "USD" },
  { label: "EUR (€)", value: "EUR" },
  { label: "JPY (¥)", value: "JPY" },
  { label: "GBP (£)", value: "GBP" },
  { label: "CNY (¥)", value: "CNY" },
];

const updateCurrency = () => {
  store.commit("updateCurrency", selectedCurrency.value);
};
</script>
