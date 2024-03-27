import { createApp } from 'vue'
import './style.css'
import App from './App.vue'



// Font Awesome imports
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faHome, faHiking, faBiking } from '@fortawesome/free-solid-svg-icons'

import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';

// Add icons to the library
library.add(farStar);

library.add(faHome, faHiking, faBiking)




// Create Vue application and use router
createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')