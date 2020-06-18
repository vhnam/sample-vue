<template>
  <fragment>
    <v-icon class="mx-4" large>mdi-music-circle</v-icon>
    <v-toolbar-title class="mr-12 align-center title">
      <router-link class="title" v-bind:to="config.app.homepage">{{ $t("common.app") }}</router-link>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn outlined dark v-bind="attrs" v-on="on">{{ $t("common.languages") }}</v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="language in languages"
          :key="language.value"
          :value="language.value"
          @click="dispatchSetLanguage(language.value)"
        >
          <v-list-item-title>{{ language.text }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </fragment>
</template>

<script>
import config from '../config';

export default {
  data: () => ({
    config,
    currentLang: config.common.lang,
    languages: [
      {
        text: 'English',
        value: 'en',
      },
      {
        text: 'Tiếng Việt',
        value: 'vi',
      },
    ],
  }),
  methods: {
    dispatchSetLanguage(value) {
      this.$store.dispatch('languages/setLanguage', value);
    },
  },
};
</script>

<style scoped>
.title {
  color: white;
  text-decoration: none;
}
</style>