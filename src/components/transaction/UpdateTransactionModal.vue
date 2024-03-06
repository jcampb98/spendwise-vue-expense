<template>
  <div class="modal" v-if="showModal">
    <div class="modal-content">
      <span class="close" @click="closeModal">&times;</span>
      <h2>Update Transaction?</h2>
      <div class="form-group">
        <label for="update-text">Text</label>
        <input type="text" id="update-text" v-model="updateData.userInput" />
      </div>
      <div class="form-group">
        <label for="update-amount">Amount</label>
        <input type="number" id="update-amount" v-model="updateData.amount" />
      </div>
      <button @click="submitUpdate">Update</button>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits, ref } from "vue";

// Update transaction
const props = defineProps({
  transaction: {
    type: Object,
    required: true,
  },
});

const emit = defineEmits(["submit", "close"]);

const showModal = ref(true);

const updateData = ref({
  id: props.transaction.id,
  userInput: props.transaction.userInput,
  amount: props.transaction.amount,
});

const closeModal = () => {
  emit("close");
  showModal.value = false;
};

const submitUpdate = () => {
  const transaction =  {
    id: updateData.value.id,
    userInput: updateData.value.userInput,
    amount: updateData.value.amount,
  };
  console.log("UpdateModal:", transaction);
  emit("submit", transaction);
};
</script>
