import Vue from 'vue';
import Router from 'vue-router';
import ContactsList from '@/scenes/ContactsList';
import ContactDetails from '@/scenes/ContactDetails';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ContactsList',
      component: ContactsList,
    },
    {
      path: '/details/:index',
      name: 'ContactDetails',
      component: ContactDetails,
    },
  ],
});
