<template>
  <v-navigation-drawer v-model="drawer" :mini-variant.sync="mini" permanent>
    <v-card-text v-show="!mini">APPLICATIONS</v-card-text>
    <v-list dense>
      <v-list-item v-for="item in items" :key="item.title" link>
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "SideBar",
  props: {
    mini: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      drawer: false,
      items: [{ title: "Registry", icon: "mdi-earth" }],
    };
  },

};
</script>

<style scoped>
v-navigation-drawer {
  z-index: 99;
}
</style>