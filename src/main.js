// Import styles
import './style.css';

// Import Vue and App component
import { createApp } from 'vue';
import App from './App.vue';

// Import Router
import { createRouter, createWebHistory } from 'vue-router';

// Import FontAwesome classes
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faHome, faHiking, faBiking } from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';

// Import Views
import HomeView from './views/HomeView.vue';
import Hiking from './views/Hiking.vue';
import Biking from './views/Biking.vue';



// Add icons to the library
library.add(farStar, faHome, faHiking, faBiking);

// Create router
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'Home', component: HomeView },
    { path: '/hiking', name: 'Hiking', component: Hiking },
    { path: '/biking', name: 'Biking', component: Biking },
  ],
});

// Create Vue application
const app = createApp(App);

// Use router
app.use(router);

// Register FontAwesomeIcon globally
app.component('font-awesome-icon', FontAwesomeIcon);

// Mount the app to the DOM
app.mount('#app');
