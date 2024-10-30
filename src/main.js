import './assets/main.css'
import "./tailwind.css"
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faTelegram } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faBars, faCode, faDownload, faLanguage, faMicrochip, faMobile, faUser, faXmark } from '@fortawesome/free-solid-svg-icons'
import { faClock } from '@fortawesome/free-regular-svg-icons'
import ToastPlugin from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-bootstrap.css';
library.add(faGithub, faTelegram, faLinkedin, faCode, faClock, faMobile, faMicrochip, faUser, faLanguage, faBars, faXmark, faInstagram, faDownload)

createApp(App)
.use(router)
.use(ToastPlugin)
.component('font-awesome-icon', FontAwesomeIcon)
.use(createPinia())
.mount('#app');


