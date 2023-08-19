import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

import App from './App.vue'

const app = createApp(App)
const pinia = createPinia()

pinia.use(piniaPluginPersistedstate)

// pinia.use((context) => {
//   const storeId = context.store.$id

//   const serializer = {
//     serialize: JSON.stringify,
//     deserialize: JSON.parse
//   }

//   // sync store from localStorage
//   const fromStorage = serializer.deserialize(window.localStorage.getItem(storeId))

//   if (fromStorage) {
//     context.store.$patch(fromStorage)
//   }

//   // listen for changes and update localStorage
//   context.store.$subscribe((_mutation, state) => {
//     window.localStorage.setItem(storeId, serializer.serialize(state))
//   })
// })

app.use(pinia)
app.mount('#app')
