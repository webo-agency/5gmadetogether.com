export const state = () => ({
    data: {

    }
});

export const getters = {
    getFooterData: ($state) => {
        return $state.data
    }
}

export const mutations = {
    save($state, data) {
        Object.assign($state, data);
    }
};

export const actions = {
    init (context, data) {
        context.commit('save', data);
    }
}
