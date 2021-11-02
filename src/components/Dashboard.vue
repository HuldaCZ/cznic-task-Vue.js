<template>
  <v-container fluid>
    <div class="title-div">
      <h1>{{ fqdn }}</h1>
    </div>

    <v-row>
      <v-col xs="12" sm="8">
        <AuthInfoCard :expires_at="expires_at" />
        <EventsCard :events="events" />
        <StateFlagsCard :flags="state_flags.flags" />
      </v-col>
      <v-col xs="12" sm="4"> </v-col>
    </v-row>
  </v-container>
</template>

<script>
import AuthInfoCard from "./Cards/AuthInfoCard";
import EventsCard from "./Cards/EventsCard";
import StateFlagsCard from "./Cards/StateFlagsCard";

import data from "../../domain-detail.json";

export default {
  name: "Dashboard",
  components: {
    AuthInfoCard,
    EventsCard,
    StateFlagsCard,
  },
  data() {
    return {
      administrative_contacts: data.administrative_contacts,
      events: data.events,
      expires_at: data.expires_at,
      fqdn: data.fqdn,
      keyset: data.keyset,
      nsset: data.nsset,
      owner: data.owner,
      sponsoring_registrar: data.sponsoring_registrar,
      state_flags: data.state_flags,
      showAll: false,
    };
  },
};
</script>

<style scoped>
h1 {
  font-size: 20px;
}

.title-div {
  margin-left: 16px;
  
}
</style>