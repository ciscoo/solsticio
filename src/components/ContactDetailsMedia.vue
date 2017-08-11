<template>
  <div>
    <v-layout wrap row align-center justify-center class="pt-5">
    <v-flex sm12>
        <img v-bind:src="this.currentContact.largeImageURL" class="contact-image">
    </v-flex>
    </v-layout>
    <v-layout wrap row align-center justify-center class="pt-5">
      <v-flex sm12 style="text-align: center;">
          <p class="headline">{{ this.currentContact.name }}</p>
          <p class="subheading">{{ this.currentContact.companyName }}</p>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters([
      'currentContact',
    ]),
  },
};
</script>

<style lang="stylus">
.contact-image
  display: block
  margin: 0 auto
</style>
