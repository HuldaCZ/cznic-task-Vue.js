<template>
  <v-card class="popover-card pa-1" elevation="6" outlined >
    <v-row class="mb-1 d-flex align-center ">
      <div class="d-flex align-center justify-center icon-div">
        <v-icon color="gray" large> mdi-account-circle</v-icon>
      </div>
      <div class="ml-n4 name-div">
        <v-card-title class="ml-n4 mb-n4">Jan Musílek</v-card-title>
        <v-list-item-subtitle>admin</v-list-item-subtitle>
      </div>
    </v-row>

    <v-divider class=" mt-1" ></v-divider>

    <v-row class="mt-3 d-flex align-center  ">
      <div class="d-flex align-center justify-center icon-div">
        <v-icon color="gray" > mdi-logout-variant</v-icon>
      </div>
      <div class="ml-n4">
        <v-list-item-subtitle>Logout</v-list-item-subtitle>
      </div>
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: "UserPopover",
};
</script>

<style scoped>
.popover-card {
  position: fixed;
  z-index: 200;
  height: 130px;
  width: 280px;
  top: 45px;
  right: 30px;
}

.name-div {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-bottom: 10px;
}

.icon-div {
  width: 30%;
}
</style>