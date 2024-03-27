// main.js
import './style.css'
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faHome, faHiking, faBiking } from '@fortawesome/free-solid-svg-icons'
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons'
import App from './App.vue'
import HomeView from './views/HomeView.vue'
import Hiking from './views/Hiking.vue'
import Biking from './views/Biking.vue'

// Add icons to the library
library.add(farStar);
library.add(faHome, faHiking, faBiking);

// Create router
const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', name: 'Home', component: HomeView },
        { path: '/hiking', name: 'Hiking', component: Hiking },
        { path: '/biking', name: 'Biking', component: Biking },
    ]
});

// Create Vue application and use router
createApp(App)
    .use(router)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app');
