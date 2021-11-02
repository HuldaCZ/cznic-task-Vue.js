<template>
  <v-app-bar density="compact" color="#2a94f7">
    <v-app-bar-nav-icon
      color="white"
      @click="$emit('toggle-side-bar')"
    ></v-app-bar-nav-icon>
    <v-app-bar-title class="white--text">Vuetify</v-app-bar-title>

    <v-spacer></v-spacer>

    <v-btn class="mr-4 ml-5" plain>
      <v-avatar class="mr-3" size="25">
        <v-icon color="white"> mdi-account-circle</v-icon>
      </v-avatar>
      <span class="white--text">John Leider</span>
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  name: "NavBar",
  emits: ["toggle-side-bar"],
};
</script>

<style scoped>
v-app-bar {
  z-index: 100;
}
</style>