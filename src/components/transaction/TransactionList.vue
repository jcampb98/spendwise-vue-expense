<template>
  <h3>History</h3>
  <ul id="list" class="list">
    <li
      v-for="transaction in transactions"
      v-bind:key="transaction.id"
      :class="transaction.amount < 0 ? 'minus' : 'plus'"
    >
      {{ transaction.userInput }} <span>£{{ transaction.amount }}</span>
      <div class="dropdown">
        <button @click="toggleDropdown(transaction.id)" class="ellipsis-btn">
          ...
        </button>
        <div v-if="activeDropdown === transaction.id" class="dropdown-content">
          <button class="icon-button" @click="openUpdateModal(transaction.id)">
            <v-icon name="hi-solid-pencil-alt" scale="1" />Update
          </button>
          <button
            class="icon-button"
            @click="deleteTransaction(transaction.id)"
          >
            <v-icon name="hi-solid-trash" scale="1" />Delete
          </button>
        </div>
      </div>
    </li>
  </ul>
  <UpdateTransactionModal
    v-if="showModal"
    :transaction="updateTarget"
    @submit="updateTransaction"
    @close="closeUpdateModal"
  />
</template>

<script setup>
import { defineProps, ref } from "vue";
import UpdateTransactionModal from "./UpdateTransactionModal.vue";

const activeDropdown = ref(null);
const updateTarget = ref(null);
const showModal = ref(false);
const emit = defineEmits(["transactionDeleted", "transactionUpdated"]);

const props = defineProps({
  transactions: {
    type: Array,
    required: true,
  },
});

const toggleDropdown = (id) => {
  activeDropdown.value = activeDropdown.value === id ? null : id;
};

const deleteTransaction = (id) => {
  if (confirm("Are you sure you want to delete this transaction")) {
    emit("transactionDeleted", id);
  }

  activeDropdown.value = null;
};

const openUpdateModal = (id) => {
  const transaction = props.transactions.find((t) => t.id === id);
  updateTarget.value = {
    id: transaction.id,
    userInput: transaction.userInput,
    amount: transaction.amount,
  };
  showModal.value = true;
};

const closeUpdateModal = () => {
  showModal.value = false;
};

const updateTransaction = (updatedTransaction) => {
  const index = props.transactions.findIndex(
    (t) => t.id === updatedTransaction.id,
  );
  if (index !== -1) {
    // Replace the old transaction with the updated one
    props.transactions[index] = updatedTransaction;
    emit("transactionUpdated", props.transactions);
    activeDropdown.value = null;
    showModal.value = false;
  }
};
</script>
