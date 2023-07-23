<template>
  <div class="flex flex-wrap w-full">
    <div class="w-full md:mb-0">
      <label
        class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
        for="grid-first-name"
      >
        {{ label }}
      </label>
      <select
        :name="name"
        class="block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:border-blue-400 focus:outline-none"
        @blur="handleBlur"
        @change="handleChange"
        :value="value"
      >
        <option></option>
        <option
          class="uppercase"
          v-for="option in options"
          :value="option"
          :key="option"
        >
          {{ option }}
        </option>
      </select>
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
  options: {
    type: Array,
    required: true,
  },
});
const name = toRef(props, "name");
const { handleBlur, handleChange, errorMessage, value } = useField(
  name,
  undefined,
  {
    initialValue: props.value,
  }
);
</script>
