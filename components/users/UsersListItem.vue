<template>
  <tr class="border-b dark:border-neutral-500">
    <th scope="col" class="px-6 py-4">{{ name }}</th>
    <th scope="col" class="px-6 py-4">{{ surname }}</th>
    <th scope="col" class="px-6 py-4">{{ email }}</th>
    <th scope="col" class="px-6 py-4">{{ age }}</th>
    <th scope="col" class="px-6 py-4">{{ favoriteColor }}</th>
    <th scope="col" class="px-6 py-4">
      {{ formattedContactPreferences }}
    </th>
    <th scope="col" class="px-6 py-4 text-end">
      <AppButton label="Remove" twig="danger" @click="handleClickRemove" />
    </th>
  </tr>
</template>
<script setup>
import AppButton from "~/components/elements/AppButton.vue";
const props = defineProps({
  id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  surname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  favoriteColor: {
    type: String,
    required: true,
  },
  contactPreferences: {
    type: Array,
    required: true,
  },
});

const formattedContactPreferences = computed(() => {
  return props.contactPreferences.join(", ");
});

const emit = defineEmits(["onRemoveClick"]);
const handleClickRemove = () => {
  emit("onRemoveClick", props.id);
};
</script>
