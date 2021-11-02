<template>
  <v-app>
    <NavBar @toggle-side-bar="toggleSideBar" />
    <div class="main-container">
      <SideBar :mini="sideBarMini" />
      <Dashboard />
    </div>
    <UserPopover />
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
    };
  },
  methods: {
    toggleSideBar() {
      this.sideBarMini = !this.sideBarMini;
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
