<template>
  <div>
    <v-subheader>Favorite Contacts</v-subheader>
    <v-list-tile
      v-for="(contact, index) in favoriteContacts"
      v-bind:key="contact.id"
      :to="{ path: `/details/${contact.id}` }"
    >
      <v-list-tile-avatar>
        <img v-bind:src="contact.smallImageURL"></v-list-tile-avatar>
      </v-list-tile-avatar>
      <v-list-tile-content>
        <v-list-tile-title>{{ contact.name }}</v-list-tile-title>
        <v-list-tile-sub-title>{{ contact.companyName }}</v-list-tile-sub-title>
      </v-list-tile-content>
      <v-list-tile-action >
        <v-icon class="yellow--text text--darken-2">star</v-icon>
      </v-list-tile-action>
    </v-list-tile>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters([
      'favoriteContacts',
    ]),
  },
};
</script>
