<template>
  <v-app>
    <v-app-bar app color="darkgrey" dark>
      <v-toolbar-title class="hscale">
        <router-link to="/" class="d-flex align-center pointer" tag="div">
          <v-avatar size="32px" item class="mr-2">
            <v-img src="@/assets/logo.png" alt="neuromap"
          /></v-avatar>
          neuromap</router-link
        >
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn text to="/meetings">
        встречи
      </v-btn>
      <v-btn text to="/users">
        пользователи
      </v-btn>
      <v-btn text to="/about">
        Разработчик
      </v-btn>
    </v-app-bar>

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),

  created() {
    this.$store.dispatch("getUsers");
    this.$store.dispatch("getMeetings");
  }
};
</script>

<style lang="sass">
.vinfo
  color: #999
  border-left: .25rem solid lighten(#3eaf7c, 20%)
  margin-left: 0
  padding-left: 1rem
.vlink
  color: #3eaf7c !important
  text-decoration: none
.pointer
  cursor: pointer
.hscale
  transition: 200ms transform
  &:hover
    transform: scale(1.05)
</style>
