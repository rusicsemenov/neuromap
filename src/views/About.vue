<template>
  <v-container fluid fill-height>
    <v-layout justify-center align-center>
      <v-flex xs-10 offset-xs1 sm8 offset-sm2>
        <h1>Русик Семенов</h1>
        <p>
          Full Stack dev from
          <a href="https://vialan.com.ua/contacts" class="vlink">Vialan</a>
        </p>
        <router-link :to="'/'" class="vlink">на главную</router-link>
      </v-flex>
    </v-layout>
  </v-container>
</template>
