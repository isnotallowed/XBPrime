<template>
  <button
    class="font-bold py-2 px-4 text-white rounded w-max"
    :class="[buttonStyles]"
    :type="type"
  >
    {{ label }}
  </button>
</template>
<script setup>
const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    default: "",
  },
  twig: {
    type: String,
    default: "default",
  },
});
const buttonStyles = computed(() => {
  switch (props.twig) {
    case "default":
      return "bg-blue-500 hover:bg-blue-700";
    case "danger":
      return "bg-red-400 hover:bg-red-700";
  }
});
</script>
