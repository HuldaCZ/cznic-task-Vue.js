<template>
  <v-card elevation="2" outlined class="ma-3">
    <v-container>
      <v-row class="card-row">
        <v-col sm="3">
          <p class="item-label">AuthInfo:</p>
        </v-col>
        <v-col sm="5">
          <v-btn x-small color="primary" @click="showPassMethod">
            {{ showPass ? "HIDE" : "SHOW" }}</v-btn
          >
        </v-col>
        <v-col sm="4">
          <p v-if="showPass" class="item-label">Secret Pssword</p>
        </v-col>
      </v-row>
      <v-row class="card-row mt-n8 mb-n7">
        <v-col sm="3">
          <p class="item-label">Expires at:</p>
        </v-col>
        <v-col sm="9">
          <p>
            {{ new Date(expires_at).toLocaleString() }}
          </p>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
export default {
  name: "AuthInfoCard",
  props: {
    expires_at: String,
  },
  data() {
    return {
      showPass: false,
    };
  },
  methods: {
    showPassMethod() {
      this.showPass = !this.showPass;
    },
  },
};
</script>

<style scoped>
.card-row {
  font-size: 14px;
}
.item-label {
  font-weight: bold;
}
</style>