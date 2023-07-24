<template>
  <Form
    class="flex flex-col gap-4"
    @submit="onSubmit"
    :validation-schema="formSchema"
  >
    <div class="flex flex-col gap-4">
      <div class="flex flex-wrap md:flex-nowrap gap-4">
        <AppInput name="name" type="text" label="Name" />
        <AppInput name="surname" type="text" label="Surname" />
        <AppInput name="email" type="email" label="E-mail" />
        <AppInputNumber name="age" label="Age" type="text" />
        <AppSelect
          name="favoriteColor"
          :options="COLORS"
          label="Favorite color"
        />
      </div>
      <div>
        <span
          class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
        >
          Contact preferences
        </span>
        <AppCheckbox
          v-for="preference in CONTACT_PREFERENCES"
          name="contactPreferences"
          :label="preference"
          :value="preference"
        />
        <ErrorMessage class="text-sm text-red-500" name="contactPreferences" />
      </div>
    </div>
    <AppButton label="Add user" />
  </Form>
</template>

<script setup>
import { v4 as uuidv4 } from "uuid";
import { Form, ErrorMessage, Field } from "vee-validate";
import AppInput from "~/components/elements/AppInput.vue";
import { useUsersStore } from "~/stores/users";
import AppButton from "~/components/elements/AppButton.vue";
import AppCheckbox from "~/components/elements/AppCheckbox.vue";
import AppSelect from "~/components/elements/AppSelect.vue";
import { COLORS, CONTACT_PREFERENCES } from "~/constants";
import AppInputNumber from "~/components/elements/AppInputNumber.vue";
const { addUser } = useUsersStore();

const formSchema = computed(() => {
  return {
    name: "required",
    surname: "required",
    email: "required|email",
    age: "required|numeric|max_value:120",
    favoriteColor: "required",
    contactPreferences: "required",
  };
});
const onSubmit = (values, actions) => {
  actions.resetForm();
  actions.setValues({
    name: undefined,
    surname: undefined,
    email: undefined,
    age: undefined,
    favoriteColor: undefined,
    contactPreferences: [],
  });
  addUser({ ...values, id: uuidv4() });
};
</script>
