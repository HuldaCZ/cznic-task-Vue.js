<template>
  <v-app>
    <NavBar @toggle-side-bar="toggleSideBar" @toggle-user="toggleUser" />
    <div class="main-container" id="main-container" >
      <SideBar :mini="sideBarMini" />
      <Dashboard />
    </div>
  </v-app>
</template>

<script>
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import Dashboard from "./components/Dashboard";

export default {
  name: "App",

  components: {
    NavBar,
    SideBar,
    Dashboard,
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
