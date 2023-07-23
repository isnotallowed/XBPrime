<template>
  <div
    class="container mx-auto flex flex-col gap-12 py-12 px-4 overflow-x-hidden"
  >
    <AddUserForm />
    <UsersList />
  </div>
</template>
<script setup>
import AddUserForm from "~/components/users/AddUserForm.vue";
import UsersList from "~/components/users/UsersList.vue";
</script>
