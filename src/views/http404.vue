<template>
  <v-container fluid fill-height>
    <v-layout justify-center align-center>
      <v-flex xs-10 offset-xs1 sm8 offset-sm2>
        <h1>404</h1>
        <p class="vinfo">{{ testMessage }}</p>
        <router-link :to="'/'" class="vlink">на главную</router-link>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      testMessage: "Страница не найдена"
    };
  }
};
</script>
