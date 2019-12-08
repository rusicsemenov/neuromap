<template>
  <div>
    <v-timeline>
      <v-timeline-item
        v-for="(meeting, index) in someMeetings"
        :key="index"
        small
      >
        <template v-slot:opposite>
          <span class="grey--text"
            >c {{ meeting.dateTimeStart | toDayTime }}</span
          ><br />
          <span class="grey--text"
            >по {{ meeting.dateTimeFinish | toDayTime }}</span
          >
        </template>
        <v-card class="elevation-2">
          <v-card-title
            :class="[
              'headline',
              meeting.dateTimeStart < new Date().getTime() ? 'active' : ''
            ]"
            >{{ meeting.title }}</v-card-title
          >
          <v-card-text>
            Участники:
            <ul>
              <li
                v-for="(member, mindex) in meeting.members"
                :key="mindex"
                v-text="member"
              ></li>
            </ul>
          </v-card-text>
        </v-card>
      </v-timeline-item>
    </v-timeline>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["someMeetings"])
  }
};
</script>

<style lang="sass" scoped>
.active
  position: relative
  &::before
    content: 'проходит'
    position: absolute
    right: 10px
    top: 0
    font-size: 10px
    line-height: 10px
    padding: 0.5rem 1em
    background-color: skyblue !important
    color: white
    box-shadow: 2px 2px 2px rgba(0, 0, 0, .2)
</style>
