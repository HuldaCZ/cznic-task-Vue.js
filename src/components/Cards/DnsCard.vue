<template>
  <v-card elevation="2" outlined class="ma-3">
    <div class="header">
      <h3 data-testid="dns-card-title">{{ title }}</h3>
    </div>
    <v-divider />
    <div class="card-body mt-2 mb-2">
      <v-row class="card-row">
        <v-col sm="1" class="ml-2 mr-n3"> </v-col>
        <v-col sm="3">
          <p class="item-label">Handle:</p>
        </v-col>
        <v-col sm="7">
          <p class="handle-text" data-testid="dns-card-handle">
            <font color="cornflowerblue"> {{ dnsData.handle }}</font>
          </p>
        </v-col>
      </v-row>
      <v-row class="card-row mt-n8 mb-n7">
        <v-col sm="1" class="ml-2 mr-n3"> </v-col>
        <v-col sm="3">
          <p class="item-label">Registrar:</p>
        </v-col>
        <v-col sm="7">
          <p data-testid="dns-card-registrar">
            {{ dnsData.registrar }}
          </p>
        </v-col>
      </v-row>
      <v-row class="card-row mt-n8 mb-n7 d-flex align-center">
        <v-col sm="1" class="ml-2 mr-n3"> </v-col>
        <v-col sm="3">
          <p class="item-label" data-testid="dns-card-label" >
            {{ dnsData.dns === "dns" ? "DNS" : "DNS keys" }}
          </p>
        </v-col>
        <v-col sm="7">
          <div class="mb-n4">
            <p data-testid="dns-card-data-1" >
              {{ getDnsData(0) }}
            </p>
          </div>
          <div>
            <p data-testid="dns-card-data-2" >
              {{ getDnsData(1) }}
            </p>
          </div>
        </v-col>
      </v-row>
    </div>
  </v-card>
</template>

<script>
export default {
  name: "DnsCard",
  props: {
    dnsData: Object,
    title: String,
  },
  methods: {
    getDnsData(i) {
      if (this.dnsData.dns) {
        return (
          this.dnsData.dns[i].name + "(" + this.dnsData.dns[i].ip_address + ")"
        );
      } else if (this.dnsData.dns_keys) {
        return this.dnsData.dns_keys[i];
      }
      return;
    },
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