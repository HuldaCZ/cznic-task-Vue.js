<template>
  <v-app-bar density="compact" color="#2a94f7">
    <v-app-bar-nav-icon
      color="white"
      @click="$emit('toggle-side-bar')"
    ></v-app-bar-nav-icon>
    <h1 class="white--text site-title">Ferda</h1>

    <v-spacer></v-spacer>
    <div>
      <v-btn
        class="mr-4 ml-5"
        plain
        @click="toggleUser"
        data-testid="user-menu-button"
      >
        <v-avatar class="mr-3" size="25">
          <v-icon color="white" large> mdi-account-circle</v-icon>
        </v-avatar>
        <span class="white--text">Jan Musílek</span>
      </v-btn>
    </div>
    <UserPopover v-if="showUser" id="user-popover" />
  </v-app-bar>
</template>

<script>
import UserPopover from "./UserPopover.vue";

export default {
  name: "NavBar",
  components: {
    UserPopover,
  },
  data() {
    return {
      showUser: false,
    };
  },
  methods: {
    toggleUser() {
      this.showUser = !this.showUser;
    },
  },
  emits: ["toggle-side-bar"],
};
</script>

<style scoped>
v-app-bar {
  z-index: 100;
}

.site-title {
  font-size: 26px;
  font-weight: 500;
  margin-left: 40px;
}
</style>