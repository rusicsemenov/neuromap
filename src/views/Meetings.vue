<template>
  <v-container>
    <v-row>
      <h2 class="font-weight-thin">Встречи</h2>
      <v-spacer></v-spacer>
      <dialog-meeting></dialog-meeting>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-row>
          <meeting
            v-for="(meeting, index) in allMeetings"
            :key="index"
            :item="meeting"
          ></meeting>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Meeting from "@/components/Meeting.vue";
import DialogMeeting from "@/components/Dialogs/DialogAddMeeting.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    Meeting,
    DialogMeeting
  },
  computed: {
    ...mapGetters(["allMeetings"])
  }
};
</script>
