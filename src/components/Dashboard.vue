<template>
  <v-container fluid>
    <div class="title-div">
      <h1>{{ fqdn }}</h1>
      <v-switch v-model="showAll" :label="'Verbose view'"></v-switch>
    </div>

    <v-row>
      <v-col xs="12" sm="8">
        <AuthInfoCard :expires_at="expires_at" />
        <EventsCard :events="events" />
        <StateFlagsCard
          :flags="state_flags.flags"
          :groups="state_flags.groups"
          :showAll="showAll"
        />
      </v-col>
      <v-col xs="12" sm="4">
        <UserCard :userData="owner" :title="'Owner:'" />
        <div v-if="showAll">
          <UserCard
            :key="user.name"
            v-for="user in administrative_contacts"
            :userData="user"
            :title="'Administrative contact:'"
          />
        </div>
        <div v-if="!showAll">
          <ContactCard :contacts="administrative_contacts" />
        </div>
        <DnsCard :dnsData="nsset" :title="'NSSet:'" />
        <DnsCard :dnsData="keyset" :title="'KeySet:'" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import AuthInfoCard from "./Cards/AuthInfoCard";
import EventsCard from "./Cards/EventsCard";
import StateFlagsCard from "./Cards/StateFlagsCard";
import UserCard from "./Cards/UserCard";
import ContactCard from "./Cards/ContactsCard";
import DnsCard from "./Cards/DnsCard";

import data from "../../domain-detail.json";

export default {
  name: "Dashboard",
  components: {
    AuthInfoCard,
    EventsCard,
    StateFlagsCard,
    UserCard,
    ContactCard,
    DnsCard,
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