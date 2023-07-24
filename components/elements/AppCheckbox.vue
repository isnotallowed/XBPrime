<template>
  <label
    class="flex gap-2 items-center text-sm text-gray-900 cursor-pointer w-max"
    ><input
      :checked="checked"
      :name="name"
      type="checkbox"
      class="h-4 w-4 focus:ring-0 cursor-pointer rounded"
      @change="handleChange(value)"
    />
    <span>{{ label }}</span>
  </label>
</template>

<script setup>
import { useField } from "vee-validate";

const props = defineProps({
  modelValue: {
    type: null,
  },
  name: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
  value: {
    type: String,
  },
});
const { name } = toRefs(props);
const { checked, handleChange } = useField(name, undefined, {
  type: "checkbox",
  checkedValue: props.value,
  uncheckedValue: false,
});
</script>
