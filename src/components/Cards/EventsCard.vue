<template>
  <v-card elevation="2" outlined class="ma-3">
    <div class="header">
      <h3>Events:</h3>
    </div>
    <v-divider />
    <div class="card-body mt-2 mb-2">
      <v-row key="registered" class="mn-2">
        <v-col class="item-label">Create date:</v-col>
        <v-col data-testid="registered-time" >
          {{ new Date(events.registered.timestamp).toLocaleString() }}
        </v-col>
        <v-col class="item-label">Registrar:</v-col>
        <v-col class="registrar" data-testid="registered-handle" >{{
          events.registered.registrar_handle
        }}</v-col>
      </v-row>
      <v-row key="updated" class="mt-n4">
        <v-col class="item-label">Update date:</v-col>
        <v-col>
          {{ new Date(events.updated.timestamp).toLocaleString() }}
        </v-col>
        <v-col class="item-label">Registrar:</v-col>
        <v-col class="registrar">{{ events.updated.registrar_handle }}</v-col>
      </v-row>
      <v-row key="transferred" class="mt-n4">
        <v-col class="item-label">Transfer date:</v-col>
        <v-col>
          {{ new Date(events.transferred.timestamp).toLocaleString() }}
        </v-col>
        <v-col class="item-label">Registrar:</v-col>
        <v-col class="registrar">{{
          events.transferred.registrar_handle
        }}</v-col>
      </v-row>
      <v-row key="deleted" class="mt-n4">
        <v-col class="item-label">Delete date:</v-col>
        <v-col>
          {{
            events.deleted &&
            new Date(events.deleted.timestamp).toLocaleString()
          }}
        </v-col>
        <v-col class="item-label">{{ events.deleted && "Registrar:" }}</v-col>
        <v-col class="registrar">
          {{ events.deleted && events.deleted.registrar_handle }}
        </v-col>
      </v-row>
    </div>
  </v-card>
</template>

<script>
export default {
  name: "EventsCard",
  props: {
    events: Object,
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
  padding-left: 15px;
}

.registrar {
  color: cornflowerblue;
}

.item-label {
  font-weight: bold;
}

div {
    font-size: 14px;
}

</style>