import { createStore } from "vuex";

export default createStore({
    state: {
        favorites: [],
        menu: false
    },
    mutations: {
        toggleFavorite(state, id) {
            const fav = state.favorites.find((m) => m == id);
            if (fav) {
                state.favorites.splice(state.favorites.indexOf(id), 1);
            } else {
                state.favorites.push(id);
            }
        }
    },
    actions: {
        toggleFavorite(context, id) {
            context.commit('toggleFavorite', id);
        }
    },
    getters: {
        isFavorite: (state) => (id) => {
            return state.favorites.some((f) => f == id);
        },
        getFavorites(state) {
            return state.favorites;
        }
    }
});