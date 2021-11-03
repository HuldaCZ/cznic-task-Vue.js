<template>
  <v-card elevation="2" outlined class="ma-3">
    <div class="header">
      <h3>Administrative contacts:</h3>
    </div>
    <v-divider />
    <div class="card-body mt-2 mb-2">
      <v-row :key="contact.name" class="mt-n5 mb-n8" v-for="contact in contacts">
        <v-col sm="1" > </v-col>
        <v-col sm="3">
          <p class="item-label" data-testid="contact-name" >{{ contact.name }}</p>
        </v-col>
        <v-col sm="7">
          <p class="handle-text">
            <font color="cornflowerblue" data-testid="contact-handle" > {{ contact.handle }}</font>
          </p>
        </v-col>
      </v-row>
    </div>
  </v-card>
</template>

<script>
export default {
  name: "ContactsCard",
  props: {
    contacts: [],
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

div {
  font-size: 13px;
}

.item-label {
  font-weight: bold;
}

</style>