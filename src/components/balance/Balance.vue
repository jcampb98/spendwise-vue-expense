<template>
  <h4>Your Balance</h4>
  <h1 id="balance">{{ selectedCurrency }}{{ total }}</h1>
</template>

<script setup>
import { defineProps, computed } from "vue";
import store from "../../store.js";

const props = defineProps({
  total: {
    type: Number,
    required: true,
  },
});

const selectedCurrency = computed(() => {
  const selectedCurrency = store.state.selectedCurrency;
  switch (selectedCurrency) {
    case "USD":
      return "$";
    case "EUR":
      return "€";
    case "JPY":
      return "¥";
    case "GBP":
      return "£";
    case "CNY":
      return "¥";
    default:
      return "£"; // Default to GBPsymbol
  }
});
</script>
