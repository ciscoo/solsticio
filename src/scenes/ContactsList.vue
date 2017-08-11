<template>
  <v-card class="max">
    <v-list two-line subheader>
      <favorite-contacts-list></favorite-contacts-list>
      <other-contacts-list></other-contacts-list>
    </v-list>
  </v-card>
</template>

<script>
import FavoriteContactsList from '@/components/FavoriteContactsList';
import OtherContactsList from '@/components/OtherContactsList';

export default {
  components: {
    FavoriteContactsList,
    OtherContactsList,
  },
};
</script>

<style lang="stylus">
.subheader
  padding-left 20px
  background-color #eee
  text-align center
</style>


