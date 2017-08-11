<template>
  <div id="app">
    <v-app>
      <v-toolbar class="primary elevation-0" dark extended></v-toolbar>
      <main>
        <v-layout row>
          <v-flex sm4 offset-sm4>
            <v-card class="card--flex-toolbar">
              <v-toolbar card class="white" prominent>
                <v-toolbar-title>
                  <v-btn
                    icon
                    v-if="this.$route.path.match(/details\//)"
                    :to="{ path: '/' }"
                  >
                    <v-icon>arrow_back</v-icon>
                  </v-btn>
                  Contacts
                </v-toolbar-title>
                <v-spacer></v-spacer>
                <template v-if="this.$route.path.match(/details\//)">
                  <template v-if="this.currentContact.isFavorite">
                    <v-btn icon @click="this.removeFromFavorites">
                      <v-icon class="yellow--text text--darken-2">star</v-icon>
                    </v-btn>
                  </template>
                  <template v-else>
                    <v-btn icon @click="this.addToFavorites">
                      <v-icon>star</v-icon>
                    </v-btn>
                  </template>
                </template>
              </v-toolbar>
              <v-divider></v-divider>
              <router-view></router-view>
            </v-card>
          </v-flex>
        </v-layout>
      </main>
    </v-app>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import { ADD_FAVORITE_CONTACT, REMOVE_FAVORITE_CONTACT } from '@/store/mutation-types';

export default {
  beforeMount() {
    this.loadContacts();
  },
  methods: {
    ...mapActions([
      'loadContacts',
    ]),
    addToFavorites() {
      this.$store.commit(ADD_FAVORITE_CONTACT);
    },
    removeFromFavorites() {
      this.$store.commit(REMOVE_FAVORITE_CONTACT);
    },
  },
  computed: {
    ...mapGetters([
      'currentContact',
    ]),
  },
};
</script>

<style lang="stylus">
@import '../node_modules/vuetify/src/stylus/main';

.card--flex-toolbar
  margin-top -64px

.max
  max-height 600px
  min-height 600px
  overflow-y auto
  overflow-x hidden
</style>
