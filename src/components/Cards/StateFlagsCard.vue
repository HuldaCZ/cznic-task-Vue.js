<template>
  <v-card elevation="2" outlined class="ma-3">
    <div class="header">
      <h3>State Flags:</h3>
    </div>
    <v-divider />
    <div class="card-body mt-2 mb-2">
      <v-row key="" class="mn-2">
        <v-col>
          <ul class="flag-list">
            <div :key="flag.name" v-for="flag in activeFlags(flagsGroup(0))">
              <li v-if="flag.active" data-testid="flag-active" >
                <v-icon color="green" small> mdi-checkbox-marked-circle</v-icon>
                <font color="green"> {{ flag.description }} </font>
              </li>

              <li v-if="!flag.active" data-testid="flag-deactivated" >
                <v-icon color="red" small> mdi-close-circle</v-icon>
                <font color="red"> {{ flag.description }} </font>
              </li>
            </div>
          </ul>
        </v-col>
        <v-col>
          <ul class="flag-list">
            <div :key="flag.name" v-for="flag in activeFlags(flagsGroup(1))">
              <li v-if="flag.active" data-testid="flag-active" >
                <v-icon color="green" small> mdi-checkbox-marked-circle</v-icon>
                <font color="green"> {{ flag.description }} </font>
              </li>

              <li v-if="!flag.active" data-testid="flag-deactivated" >
                <v-icon color="red" small> mdi-close-circle</v-icon>
                <font color="red"> {{ flag.description }} </font>
              </li>
            </div>
          </ul>
        </v-col>
        <v-col>
          <ul class="flag-list">
            <div :key="flag.name" v-for="flag in activeFlags(flagsGroupRest())">
              <li v-if="flag.active" data-testid="flag-active" >
                <v-icon color="green" small> mdi-checkbox-marked-circle</v-icon>
                <font color="green"> {{ flag.description }} </font>
              </li>

              <li v-if="!flag.active" data-testid="flag-deactivated" >
                <v-icon color="red" small> mdi-close-circle</v-icon>
                <font color="red"> {{ flag.description }} </font>
              </li>
            </div>
          </ul>
        </v-col>
      </v-row>
    </div>
  </v-card>
</template>

<script>
export default {
  name: "StateFlagsCard",
  props: {
    flags: [],
    groups: [],
    showAll: Boolean,
  },
  methods: {
    activeFlags(flagsInput) {
      if (!this.showAll) {
        const flagsCopy = [...flagsInput];
        return flagsCopy.filter((flag) => {
          return flag.active;
        });
      } else {
        return flagsInput;
      }
    },

    flagsGroup(i) {
      const flagsCopy = [...this.flags];
      if (!this.showAll && !i) {
        return flagsCopy;
      }
      const intersection = flagsCopy.filter((flag) =>
        this.groups[i].includes(flag.name)
      );
      return intersection;
    },

    flagsGroupRest() {
      if (!this.showAll) {
        return []
      }
      const flagsCopy = [...this.flags];
      const allGroups = [...this.groups[0], ...this.groups[1]];
      const intersection = flagsCopy.filter(
        (flag) => !allGroups.includes(flag.name)
      );
      return intersection;
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

.flag-list {
  list-style-type: none;
  display: grid;
  grid-template-rows: repeat(11, min-content);
  grid-auto-flow: column;
  grid-column-gap: 50px;
}

div {
  font-size: 12px;
}
</style>