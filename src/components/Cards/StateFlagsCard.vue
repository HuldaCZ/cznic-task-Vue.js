<template>
  <v-card elevation="2" outlined class="ma-3">
    <div class="header">
      <h3>State Flags:</h3>
    </div>
    <v-divider />
    <div class="card-body mt-2 mb-2">
      <v-row key="" class="mn-2">
        <ul class="flag-list">
          <div :key="flag.name" v-for="flag in flags">
            <li v-if="flag.active && showAll">
              <v-icon color="green"> mdi-checkbox-marked-circle</v-icon>
              <font color="green"> {{ flag.description }} </font>
            </li>

            <li v-if="!flag.active && showAll">
              <v-icon color="red"> mdi-close-circle</v-icon>
              <font color="red"> {{ flag.description }} </font>
            </li>
          </div>
        </ul>
      </v-row>
    </div>
  </v-card>
</template>

<script>
export default {
  name: "StateFlagsCard",
  props: {
    flags: [],
    showAll: Boolean,
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

.flag-list {
  list-style-type: none;
}

div {
  font-size: 14px;
}
</style>