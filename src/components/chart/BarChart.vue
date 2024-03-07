<template>
    <div class="bar-chart">
        <Bar :data="chartData" :options="chartOptions"></Bar>
    </div>
</template>

<script setup>
import { defineProps } from "vue";
import { Bar } from "vue-chartjs";
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

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
    labels: ['Amount'],
    datasets: [
        {
            label: 'Income',
            backgroundColor: 'rgba(75, 192, 192, 0.2)', // Green color for income
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 2,
            data: [props.income]
        },
        {
            label: 'Expenses',
            backgroundColor: 'rgba(255, 99, 132, 0.2)', // Red color for expenses
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 2,
            data: [props.expenses]
        }
    ]
};

const chartOptions = {
    responsive: true,
    maintainAspectRatio: false
};
</script>