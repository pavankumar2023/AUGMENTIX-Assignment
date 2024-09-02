import { createRouter, createWebHistory } from 'vue-router';
import Login from './pages/LoginPage.vue';
import Signup from './pages/SignupPage.vue';
import TodoList from './pages/TodoList.vue';
import HomePage from './pages/HomePage.vue';
import UserPage from './pages/UserPage.vue';



const routes = [
            { path: '/login', component: Login },
               { path: '/signup', component: Signup },
               { path: '/todolist', component: TodoList },
               { path: '/homepage', component: HomePage },
               { path: '/userpage', component: UserPage },


];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;