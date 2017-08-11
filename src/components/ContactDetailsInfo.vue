<template>
  <v-list two-line>
    <v-divider></v-divider>
    <v-list-tile v-for="(key, value) in this.currentContact.phone" v-bind:key="key">
      <v-list-tile-content>
        <v-list-tile-title>Phone</v-list-tile-title>
        <v-list-tile-sub-title>{{ key }}</v-list-tile-sub-title>
      </v-list-tile-content>
      <v-list-tile-action>
        <v-list-tile-action-text>{{ value.toUpperCase() }}</v-list-tile-action-text>
      </v-list-tile-action>
    </v-list-tile>
    <v-divider inset></v-divider>
    <v-list-tile>
      <v-list-tile-content>
        <v-list-tile-title>Address</v-list-tile-title>
        <v-list-tile-sub-title>{{ this.currentContact.address.street }}</v-list-tile-sub-title>
        <v-list-tile-sub-title>
          {{ this.formattedAddress() }}
          </v-list-tile-sub-title>
      </v-list-tile-content>
    </v-list-tile>
    <v-divider inset></v-divider>
    <v-list-tile>
      <v-list-tile-content>
        <v-list-tile-title>Birthdate</v-list-tile-title>
        <v-list-tile-sub-title>{{ this.formattedBirthdate() }}</v-list-tile-sub-title>
      </v-list-tile-content>
    </v-list-tile>
    <v-divider inset></v-divider>
    <v-list-tile>
      <v-list-tile-content>
        <v-list-tile-title>Email</v-list-tile-title>
        <v-list-tile-sub-title>{{ this.currentContact.emailAddress }}</v-list-tile-sub-title>
      </v-list-tile-content>
    </v-list-tile>
  </v-list>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters([
      'currentContact',
    ]),
  },
  methods: {
    formattedAddress() {
      const { city, state, country, zipcode } = this.currentContact.address;
      if (zipcode) {
        return `${city}, ${state.toUpperCase()} ${zipcode}, ${country}`;
      }
      return `${city}, ${state.toUpperCase()} ${country}`;
    },
    formattedBirthdate() {
      let { birthdate } = this.currentContact;
      birthdate = new Date(birthdate);

      const monthNames = [
        'January', 'February', 'March',
        'April', 'May', 'June', 'July',
        'August', 'September', 'October',
        'November', 'December',
      ];

      return `${monthNames[birthdate.getMonth()]} ${birthdate.getDay()}, ${birthdate.getFullYear()}`;
    },
  },
};
</script>
