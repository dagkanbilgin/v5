import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

import BioBox from './page-home/BioBox.vue'

createApp(App).mount('#app')
createApp(BioBox).mount('#biography')