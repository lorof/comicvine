import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import VueAxios from "vue-axios";

Vue.use(Vuex, axios, VueAxios);

const TOKEN = process.env.API;

export default new Vuex.Store({
  state: {
    characters: [],
    character: {},
  },
  actions: {
    async loadCharacters({ commit }, payload = false) {
      try {
        const { data } = await axios.get(
          `/api/characters/?api_key=${TOKEN}&format=json&field_list=name,image,publisher,first_appeared_in_issue,id${
            payload ? "" : "&limit=6"
          }`
        );
        commit("stashCharacters", data);
      } catch (error) {
        return console.error(error);
      }
      
    },
    async loadCharacter({ commit }, payload) {
      try {
        const { data } = await axios.get(
          `/api/character/4005-${payload}/?api_key=${TOKEN}&format=json&field_list=name,image,publisher,date_last_updated,deck,gender,real_name`
        );
        commit("stashCharacter", data);
      } catch (error) {
        return console.error(error);
      }
    }
  },
  mutations: {
    stashCharacters(state, { results }) {
      state.characters = results;
    },
    stashCharacter(state, { results }) {
      state.character = results;
    },
    clearCharacter(state) {
      state.character = {};
    }
  },
  strict: process.env.NODE_ENV !== "production"
});
