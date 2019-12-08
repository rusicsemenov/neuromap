<template>
  <v-col cols="12" md="6">
    <v-card :class="classList">
      <span class="card-info" v-text="infoText"></span>

      <v-card-title class="flex-column justify-start align-start">
        {{ item.title }}
        <small
          class="caption grey--text"
          v-if="item.dateTimeStart && item.dateTimeFinish"
          >с {{ item.dateTimeStart | toDayTime }} по
          {{ item.dateTimeFinish | toDayTime }}</small
        >
        <small class="caption grey--text" v-else>Даты не указаны</small>
      </v-card-title>

      <v-card-text>
        Фасилитатор: {{ item.facilitator.name }}
        {{ item.facilitator.firstName }}
        <br />
        Секретарь: {{ item.secretar.name }} {{ item.secretar.firstName }}
        <br />
        Участники:
        <span
          v-for="(member, index) in item.members"
          :key="index"
          class="member"
        >
          {{ member }}
        </span>
      </v-card-text>

      <v-divider></v-divider>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="red" text @click="deleteMeeting">Удалить</v-btn>
      </v-card-actions>
    </v-card>
  </v-col>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default: () => {
        return {
          title: "",
          facilitator: {},
          secretar: {},
          members: [],
          dateTimeStart: new Date(),
          dateTimeFinish: new Date()
        };
      }
    }
  },
  data() {
    return {
      now: new Date().getTime()
    };
  },
  computed: {
    infoText() {
      if (this.now > this.item.dateTimeFinish) return "завершена";
      if (
        this.now < this.item.dateTimeFinish &&
        this.now > this.item.dateTimeStart
      )
        return "проходит";
      return "запланирована";
    },
    classList() {
      if (this.now > this.item.dateTimeFinish) return "grey lighten-3 noactive";
      if (
        this.now < this.item.dateTimeFinish &&
        this.now > this.item.dateTimeStart
      )
        return "orange lighten-2 active";
      return "запланирована";
    }
  },
  methods: {
    deleteMeeting() {
      this.$store.dispatch("deleteMeeting", this.item);
    }
  }
};
</script>

<style lang="sass" scope>
.member
    padding: 0.2rem 0.5rem
    &::after
        content: ','
    &:last-child::after
        content: ''

.card-info
    position: absolute
    right: 0
    top: 0
    padding: 5px

.noactive
    opacity: 0.6
</style>
