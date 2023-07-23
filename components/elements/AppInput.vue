<template>
  <div class="flex flex-wrap w-full">
    <div class="w-full md:mb-0">
      <label
        class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
        for="grid-first-name"
      >
        {{ label }}
      </label>
      <input
        class="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:border-blue-400 focus:outline-none"
        id="grid-first-name"
        :type="type"
        v-model="inputValue"
      />
      <span class="text-sm text-red-500">{{ errorMessage }}</span>
    </div>
  </div>
</template>
<script setup>
import { useField } from "vee-validate";

const props = defineProps({
  modelValue: String,
  name: {
    type: String,
    required: false,
    default: "",
  },
  label: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    default: "text",
  },
});
const name = toRef(props, "name");
const { value: inputValue, errorMessage } = useField(name, undefined, {
  initialValue: props.value,
});
</script>
