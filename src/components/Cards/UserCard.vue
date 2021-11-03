<template>
  <v-card elevation="2" outlined class="ma-3" id="user-card">
    <div class="header">
      <h3 data-testid="user-card-title">{{ title }}</h3>
    </div>
    <v-divider />
    <div class="card-body mt-2 mb-2">
      <v-row class="card-row">
        <v-col sm="1" class="ml-2"> </v-col>
        <v-col sm="3">
          <p class="item-label">Handle:</p>
        </v-col>
        <v-col sm="7">
          <p class="handle-text">
            <font color="cornflowerblue" data-testid="user-card-handle">
              {{ userData.handle }}</font
            >
          </p>
        </v-col>
      </v-row>
      <v-row class="card-row mt-n8 mb-n7">
        <v-col sm="1" class="ml-2">
          <v-icon
            v-if="userData.publish.organization"
            data-testid="user-card-icon-org-green"
            color="green"
            small
          >
            mdi-eye</v-icon
          >
          <v-icon
            v-if="!userData.publish.organization"
            data-testid="user-card-icon-org-red"
            color="red"
            small
          >
            mdi-eye-off</v-icon
          >
        </v-col>
        <v-col sm="3">
          <p class="item-label">Organization:</p>
        </v-col>
        <v-col sm="7">
          <p data-testid="user-card-organization">
            {{ userData.organization }}
          </p>
        </v-col>
      </v-row>
      <v-row class="card-row mt-n8 mb-n7">
        <v-col sm="1" class="ml-2">
          <v-icon
            v-if="userData.publish.organization"
            data-testid="user-card-icon-name-green"
            color="green"
            small
          >
            mdi-eye</v-icon
          >
          <v-icon
            v-if="!userData.publish.organization"
            data-testid="user-card-icon-name-red"
            color="red"
            small
          >
            mdi-eye-off</v-icon
          >
        </v-col>
        <v-col sm="3">
          <p class="item-label">Name:</p>
        </v-col>
        <v-col sm="7">
          <p data-testid="user-card-name">
            {{ userData.name }}
          </p>
        </v-col>
      </v-row>
    </div>
  </v-card>
</template>

<script>
export default {
  name: "UserCard",
  props: {
    userData: Object,
    title: String,
  },
};
</script>

<style scoped>
.header {
  background: #ececec;
  padding-left: 15px;
  padding-top: 5px;
  padding-bottom: 5px;
}

h3 {
  font-size: 16px;
}

.card-body {
  padding-top: 12px;
  padding-left: 5px;
  padding-bottom: 12px;
}

.item-label {
  font-weight: bold;
}

div {
  font-size: 13px;
}
</style>