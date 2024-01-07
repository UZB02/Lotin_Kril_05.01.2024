import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import lk from './locale/lk.json'
import kl from './locale/kl.json'

import { createI18n } from 'vue-i18n'

const i18n = createI18n({
    locale: localStorage.getItem("letter"),
    messages: {
        LK: lk,
        KL: kl
    }
})

const app = createApp(App)

app.use(router)
app.use(i18n)
app.mount('#app')
