import { createApp } from 'vue'
import App from '@/App.vue'
import router from './router'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

import '@/style.css'
import '../public/font/fontStyle.css'

const app = createApp(App)

library.add(faSearch)

app.use(router)
app.component("font-awesome-icon", FontAwesomeIcon)
app.mount('#app')
