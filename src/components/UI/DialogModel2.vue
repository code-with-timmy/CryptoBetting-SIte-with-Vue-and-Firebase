<template>
  <div v-if="show" class="dialog-backdrop text-white">
    <div class="dialog-box bg-primary">
      <p>{{ message }}</p>
      <div class="w-full flex justify-end justify-items-end">
        <button
          @click="$emit('close')"
          class="bg-secondary text-primary px-2 py-1 rounded-md mt-5"
        >
          Close
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.dialog-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}

.dialog-box {
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}
</style>
