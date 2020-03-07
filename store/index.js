import axios from "axios";

export const state = () => ({
  auth: "",
  data: {}
});

export const mutations = {
  setAuth(state, id) {
    state.auth = id;
  },
  resetAuth(state) {
    state.auth = "";
  },
  setData(state, data) {
    state.data = data;
  }
};
