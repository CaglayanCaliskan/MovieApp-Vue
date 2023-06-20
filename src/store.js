import { createStore } from "vuex";

export default createStore({
    state: {
        favorites: [],
        menu: false,
        selected: {}
    },
    mutations: {
        toggleFavorite(state, id) {
            const fav = state.favorites.find((m) => m == id);
            if (fav) {
                state.favorites.splice(state.favorites.indexOf(id), 1);
            } else {
                state.favorites.push(id);
            }
        },
        toggleMenu(state) {
            state.menu = !state.menu
        },
        handleSelected(state, comic) {
            state.selected = comic
        }
    },
    actions: {
        toggleFavorite(context, id) {
            context.commit('toggleFavorite', id);
        },
        toggleMenu(context) {
            context.commit('toggleMenu')
        },
        handleSelected(context, comic) {
            context.commit('handleSelected', comic)

        }
    },
    getters: {
        isFavorite: (state) => (id) => {
            return state.favorites.some((f) => f == id);
        },
        getFavorites(state) {
            return state.favorites;
        },
        // getItemById: (state) => (id) => {
        //     return state.favorites.find(item => item.id === id);
        // },
    }
});