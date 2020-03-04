import axios from 'axios'

export const state = () => ({
  data : {}
})

export const mutations = {
  setData (state, data) {
    state.data = data;
  }
}

export const actions = {
  async getData ({commit},path) {
    const res = await this.$axios.$get(path)
    commit("/setData", res)
  }
}