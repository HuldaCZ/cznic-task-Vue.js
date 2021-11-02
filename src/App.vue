<template>
  <v-app>
    <NavBar @toggle-side-bar="toggleSideBar" @toggle-user="toggleUser" />
    <div class="main-container">
      <SideBar :mini="sideBarMini" />
      <Dashboard />
    </div>
    <UserPopover v-if="user" />
  </v-app>
</template>

<script>
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import Dashboard from "./components/Dashboard";
import UserPopover from "./components/UserPopover";

export default {
  name: "App",

  components: {
    NavBar,
    SideBar,
    Dashboard,
    UserPopover,
  },

  data() {
    return {
      sideBarMini: true,
      user: false,
    };
  },
  methods: {
    toggleSideBar() {
      this.sideBarMini = !this.sideBarMini;
    },
    toggleUser() {
      this.user = !this.user;
    },
  },
};
</script>

<style scoped>
.main-container {
  display: flex;
  height: 100%;
}
</style>
