<template>
    <button class="export-pdf-button" @click="exportToPdf">Export to PDF <v-icon name="fa-regular-file-pdf" scale="1.5" /></button>
</template>

<script setup>
import html2pdf from "html2pdf.js";

const date = new Date();
const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
const todaysDate = date.toLocaleDateString('en-UK', options);

const exportToPdf = () => {
    html2pdf().from(document.getElementById("pdf-export-data")).save(`${todaysDate}_Monthly_Expenses.pdf`);
};
</script>