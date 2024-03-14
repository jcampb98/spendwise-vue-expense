import { createStore } from "vuex";

export default createStore({
  state: {
    selectedCurrency: "£", // Default to GBP
  },
  mutations: {
    updateCurrency(state, currency) {
      state.selectedCurrency = currency;
    },
  },
});
