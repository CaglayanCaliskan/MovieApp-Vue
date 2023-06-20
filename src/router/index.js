import { createRouter, createWebHistory } from 'vue-router';
import ComicView from '../views/ComicView.vue'
import Home from '../views/Home.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home

    },

    {
        path: '/comic/:id',
        name: 'ComicDetails',
        component: ComicView,
        props: true
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
