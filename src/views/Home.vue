<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="6">
        <h2 class="font-weight-thin">Ближайшие три встречи</h2>
        <meetings-timeline></meetings-timeline>
      </v-col>
      <v-col cols="12" md="6">
        <h2 class="font-weight-thin">Таблица пользователей</h2>
        <users-table></users-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import UsersTable from "@/components/UsersTable.vue";
import MeetingsTimeline from "@/components/MeetingsTimeline.vue";

export default {
  name: "home",
  components: {
    UsersTable,
    MeetingsTimeline
  }
};
</script>
