<template>
  <v-card class="max">
    <contact-details-media></contact-details-media>
    <contact-details-info></contact-details-info>
  </v-card>
</template>

<script>
import { mapGetters } from 'vuex';
import store from '@/store';
import { UPDATE_CURRENT_CONTACT } from '@/store/mutation-types';
import ContactDetailsMedia from '@/components/ContactDetailsMedia';
import ContactDetailsInfo from '@/components/ContactDetailsInfo';

export default {
  beforeRouteEnter(to, from, next) {
    store.commit(UPDATE_CURRENT_CONTACT, to.params.index);
    next();
  },
  computed: {
    ...mapGetters([
      'currentContact',
    ]),
  },
  components: {
    ContactDetailsMedia,
    ContactDetailsInfo,
  },
};
</script>


