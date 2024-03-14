<template>
  <div class="inc-exp-container">
    <div>
      <h4>Income</h4>
      <p id="money-plus" class="money plus">
        +{{ selectedCurrency }}{{ income }}
      </p>
    </div>
    <div>
      <h4>Expense</h4>
      <p id="money-minus" class="money minus">
        -{{ selectedCurrency }}{{ expenses }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { defineProps, computed } from "vue";
import store from "../../store.js";

const props = defineProps({
  income: {
    type: Number,
    required: true,
  },
  expenses: {
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
