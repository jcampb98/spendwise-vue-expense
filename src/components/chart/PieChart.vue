<template>
  <div class="pie-chart" v-if="income > 0 || expenses > 0">
    <Pie :data="chartData" :options="chartOptions"></Pie>
  </div>
  <div class="error-text" v-else>
    <h3>No data available</h3>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
import { Pie } from "vue-chartjs";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

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

const chartData = {
  labels: ["Income", "Expenses"],
  datasets: [
    {
      backgroundColor: ["rgba(75, 192, 192, 0.2)", "rgba(255, 99, 132, 0.2)"],
      borderColor: ["rgba(75, 192, 192, 1)", "rgba(255, 99, 132, 1)"],
      borderWidth: 2,
      data: [props.income, props.expenses],
    },
  ],
};

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
};
</script>
