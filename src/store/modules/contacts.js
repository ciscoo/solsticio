/* eslint no-shadow: ["error", { "allow": ["state"] }] */
/* eslint no-param-reassign: ["error",{"props":true,"ignorePropertyModificationsFor":["state"]}] */
import * as types from '../mutation-types';

const state = {
  contacts: [],
  currentContact: {},
};

const getters = {
  otherContacts({ contacts }) {
    return contacts.filter(contact => !contact.isFavorite);
  },
  favoriteContacts({ contacts }) {
    return contacts.filter(contact => contact.isFavorite);
  },
  currentContact({ currentContact }) {
    return currentContact;
  },
};

const actions = {
  async loadContacts({ commit }) {
    const response = await fetch('/static/contacts.json');
    const contacts = await response.json();
    commit(types.LOAD_CONTACTS, contacts);
  },
};

const mutations = {
  [types.LOAD_CONTACTS](state, contacts) {
    state.contacts = contacts;
  },
  [types.UPDATE_CURRENT_CONTACT](state, index) {
    state.currentContact = state.contacts
      .filter(contact => contact.id === index)[0];
  },
  [types.ADD_FAVORITE_CONTACT](state) {
    const index = state.contacts
      .findIndex(contact => contact.id === state.currentContact.id);
    state.contacts[index].isFavorite = true;
  },
  [types.REMOVE_FAVORITE_CONTACT](state) {
    const index = state.contacts
      .findIndex(contact => contact.id === state.currentContact.id);
    state.contacts[index].isFavorite = false;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
