<template>
  <h3>Add new transaction</h3>
  <form id="form" @submit.prevent="onSubmit">
    <div class="form-control">
      <label for="text">Text</label>
      <input
        type="text"
        id="text"
        v-model="userInput"
        placeholder="Enter text..."
      />
    </div>
    <div class="form-control">
      <label for="amount">Amount (negative - expense, positive - income)</label>
      <input
        type="number"
        id="amount"
        v-model="amount"
        placeholder="Enter amount..."
      />
    </div>
    <button class="btn">Add Transaction?</button>
  </form>
</template>

<script setup>
import { ref } from "vue";
import { useToast } from "vue-toastification";

const userInput = ref("");
const amount = ref("");

const emit = defineEmits(["userSubmitted"]);

const toast = useToast();

const onSubmit = () => {
  if (!userInput.value || !amount.value) {
    toast.error("ERROR - Both Fields must be filled");
    return;
  }

  const data = {
    userInput: userInput.value,
    amount: parseFloat(amount.value),
  };

  emit("userSubmitted", data);

  userInput.value = "";
  amount.value = "";
};
</script>
