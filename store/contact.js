export const state = () => ({
  inputFocus: false
});

export const getters = {};

export const mutations = {
  focus(state, data) {
    state.inputFocus = data;
  }
};

export const actions = {};
