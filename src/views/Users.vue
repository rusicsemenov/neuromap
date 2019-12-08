<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h2 class="font-weight-thin">Таблица пользователей</h2>
        <users-table></users-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import UsersTable from "@/components/UsersTable.vue";
export default {
  components: {
    UsersTable
  }
};
</script>
