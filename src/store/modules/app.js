
const state = {
    title: ''
}
const mutations = {
    SETTING_TITLE: (state,title) => {
        state.title =title
    }
}

const actions = {
    settingTitle({commit},title){
        commit('SETTING_TITLE',title)
    }
}
export default {
    namespaced: true,
    state,
    mutations,
    actions
}