<template>
  <Header />
  <div class="container">
    <Balance :total="+total" />
    <IncomeExpenses :income="+income" :expenses="+expenses" />
    <TransactionList
      :transactions="transactions"
      @transactionDeleted="handleDelete"
      @transactionUpdated="handleUpdate"
    />
    <div class="wrap-collapsible">
      <input id="collapsible" class="toggle" type="checkbox" checked>
      <label for="collapsible" class="toggle-label">Click here to View Charts</label>
      <div class="collapsible-content">
        <div class="content-inner">
          <BarChart :income="+income" :expenses="+expenses" />
          <PieChart :income="+income" :expenses="+expenses" />
        </div>
      </div>
    </div>
    <AddTransaction @userSubmitted="handleSubmit" />
  </div>
</template>

<script setup>
import Header from "./components/header/Header.vue";
import Balance from "./components/balance/Balance.vue";
import IncomeExpenses from "./components/income/IncomeExpenses.vue";
import TransactionList from "./components/transaction/TransactionList.vue";
import AddTransaction from "./components/transaction/AddTransaction.vue";
import BarChart from "./components/chart/BarChart.vue";
import PieChart from "./components/chart/PieChart.vue";
import { ref, computed, onMounted } from "vue";
import { useToast } from "vue-toastification";

const toast = useToast();

const transactions = ref([]);

onMounted(() => {
  const saveData = JSON.parse(localStorage.getItem("transactions"));

  if (saveData) {
    transactions.value = saveData;
  }
});

// Making collapsible accessible
let myLabels = document.querySelectorAll('.toggle-label');

Array.from(myLabels).forEach(label => {
  label.addEventListener('keydown', e => {
    // 32 === spacebar
    // 13 === enter
    if (e.which === 32 || e.which === 13) {
      e.preventDefault();
      label.click();
    };
  });
});

// Get total
const total = computed(() => {
  return transactions.value.reduce((acc, transaction) => {
    return acc + transaction.amount;
  }, 0);
});

// Get incomes
const income = computed(() => {
  return transactions.value
    .filter((transaction) => transaction.amount > 0)
    .reduce((acc, transaction) => {
      return acc + transaction.amount;
    }, 0)
    .toFixed(2);
});

// Get Expenses
const expenses = computed(() => {
  return transactions.value
    .filter((transaction) => transaction.amount < 0)
    .reduce((acc, transaction) => {
      return acc + transaction.amount;
    }, 0)
    .toFixed(2);
});

// Add transactions
const handleSubmit = (data) => {
  transactions.value.push({
    id: generateUniqueId(),
    userInput: data.userInput,
    amount: data.amount,
  });

  saveTransactionsToLocalStorage();

  toast.success("Successfully added transaction");
};

// Generate unique id
const generateUniqueId = () => {
  return Math.floor(Math.random() * 1000000);
};

// Delete a transaction
const handleDelete = (id) => {
  transactions.value = transactions.value.filter(
    (transaction) => transaction.id !== id,
  );

  saveTransactionsToLocalStorage();

  toast.success("Successfully deleted transaction");
};

// Update a transaction
const handleUpdate = () => {
  saveTransactionsToLocalStorage();
  toast.success("Successfully updated transaction");
};


// Save to local storage
const saveTransactionsToLocalStorage = () => {
  localStorage.setItem("transactions", JSON.stringify(transactions.value));
};
</script>