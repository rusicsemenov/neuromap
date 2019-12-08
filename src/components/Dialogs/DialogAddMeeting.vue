<template>
  <v-dialog v-model="dialog" width="900">
    <template v-slot:activator="{ on }">
      <v-btn color="primary lighten-2" dark v-on="on" text>
        {{ btnName }} <v-icon v-text="btnIcon" v-if="btnIcon" right></v-icon>
      </v-btn>
    </template>

    <meeting-form @close="dialog = false"></meeting-form>
  </v-dialog>
</template>

<script>
import { rules } from "../../rules";
import MeetingForm from "@/components/Forms/MeetingForm.vue";

export default {
  mixins: [rules],
  components: {
    MeetingForm
  },
  props: {
    btnName: {
      type: String,
      default: "добавить"
    },
    btnIcon: {
      type: String,
      default: "mdi-plus-outline"
    }
  },
  data() {
    return {
      dialog: false
    };
  }
};
</script>
