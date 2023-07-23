import { defineStore } from "pinia";
import { v4 as uuidv4 } from "uuid";

export const useUsersStore = defineStore("users", {
  state: () => ({
    users: [],
  }),
  actions: {
    addUser(user) {
      this.users = [user, ...this.users];
    },
    removeUser(id) {
      this.users = this.users.filter((user) => {
        return user.id !== id;
      });
    },
  },
});
