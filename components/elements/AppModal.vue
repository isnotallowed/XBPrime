<template>
  <div
    v-if="show"
    class="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-black bg-opacity-50"
    @click="handleClose"
  >
    <div class="bg-white p-4 rounded-lg shadow-lg" @click.stop>
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
const { show } = defineProps(["show"]);
const emit = defineEmits(["onClose", "update:show"]);
const handleClose = () => {
  emit("onClose");
};
</script>
