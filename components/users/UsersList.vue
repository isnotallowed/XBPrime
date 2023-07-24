<template>
  <div class="overflow-x-auto">
    <table
      v-if="users.length"
      class="min-w-full text-left text-sm whitespace-nowrap md:whitespace-pre-wrap"
    >
      <thead class="border-b dark:border-neutral-500 bg-gray-200">
        <tr>
          <th scope="col" class="px-6 py-4">Name</th>
          <th scope="col" class="px-6 py-4">Surname</th>
          <th scope="col" class="px-6 py-4">Email</th>
          <th scope="col" class="px-6 py-4">Age</th>
          <th scope="col" class="px-6 py-4">Favorite color</th>
          <th scope="col" class="px-6 py-4">Contact preference</th>
          <th scope="col" class="px-6 py-4 text-end">
            <AppButton
              label="Show JSON"
              @click="isPreviewJSONModalOpened = true"
            />
          </th>
        </tr>
      </thead>
      <TransitionGroup name="list" tag="tbody" class="overflow-hidden">
        <UsersListItem
          v-for="user in users"
          :key="user.id"
          :id="user.id"
          :name="user.name"
          :surname="user.surname"
          :email="user.email"
          :age="user.age"
          :favorite-color="user.favoriteColor"
          :contact-preferences="user.contactPreferences"
          @onRemoveClick="showRemoveModal"
        />
      </TransitionGroup>
    </table>
    <p class="text-center text-gray-600" v-else>No data</p>
  </div>
  <AppModal
    :show="Boolean(removingUserId !== undefined)"
    @onClose="closeRemovingModal"
  >
    <h2 class="text-xl">Are you sure you want to remove this user?</h2>
    <div class="flex justify-end gap-4 mt-6">
      <AppButton label="No" twig="danger" @click="closeRemovingModal" />
      <AppButton label="Yes" @click="handleRemoveUser" />
    </div>
  </AppModal>
  <AppModal
    :show="isPreviewJSONModalOpened"
    @onClose="isPreviewJSONModalOpened = false"
    class="max-w-80"
  >
    <div class="flex justify-between items-center">
      <h2 class="text-xl">Users JSON</h2>
      <client-only>
        <button class="text-xs text-blue-500" @click="copyUsersJson">
          Copy
        </button>
      </client-only>
    </div>
    <pre class="mt-6 whitespace-pre-wrap max-h-96 overflow-y-auto">{{
      usersJson
    }}</pre>
  </AppModal>
</template>
<script setup>
import AppButton from "~/components/elements/AppButton.vue";
import { useUsersStore } from "~/stores/users";
import AppModal from "~/components/elements/AppModal.vue";
import { ClipboardService } from "~/services/ClipboardService";

const { show } = defineProps(["show"]);

//#region State
const store = useUsersStore();
const users = computed(() => store.users);
const removingUserId = ref(undefined);
const isPreviewJSONModalOpened = ref(false);
const usersJson = computed(() => {
  return JSON.stringify(users.value, null, 2);
});
//#endregion

//#region Callbacks
const { removeUser } = store;
const showRemoveModal = (id) => {
  removingUserId.value = id;
};
const closeRemovingModal = () => {
  removingUserId.value = undefined;
};
const handleRemoveUser = () => {
  if (removingUserId === undefined) return;
  removeUser(removingUserId.value);
  closeRemovingModal();
};
const copyUsersJson = () => {
  ClipboardService.copy(usersJson.value);
};
//#endregion
</script>
<style>
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
