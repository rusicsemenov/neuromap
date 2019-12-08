<template>
  <v-data-table
    :headers="headers"
    :items="allUsers"
    :items-per-page="5"
    class="elevation-1"
  >
    <template v-slot:top>
      <div class="text-right mx-2">
        <user-dialog :editedUser="{}"></user-dialog>
      </div>
    </template>

    <template v-slot:item.action="{ item, index }">
      <v-icon small class="hover-red active" @click="deleteUser(item)">
        mdi-delete
      </v-icon>
    </template>
  </v-data-table>
</template>

<script>
import { mapGetters } from "vuex";
import UserDialog from "@/components/Dialogs/DialogAddUser";

export default {
  components: {
    UserDialog
  },
  computed: {
    ...mapGetters(["allUsers"])
  },
  data() {
    return {
      headers: [
        {
          text: "Имя",
          align: "left",
          value: "name"
        },
        {
          text: "Фамилия",
          align: "left",
          value: "firstName"
        },
        { text: "Действия", value: "action", sortable: false, align: "right" }
      ]
    };
  },
  methods: {
    deleteUser(user) {
      this.$store.dispatch("deleteUser", user);
    }
  }
};
</script>
