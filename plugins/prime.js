import Vue from 'vue'
import PrimeVue from 'primevue/config'
import Calendar from 'primevue/calendar'

Vue.use(PrimeVue, {
  ripple: true,
  locale: {
    firstDayOfWeek: 1,
    today: 'Aujourd\'hui',
  },
})
Vue.component('Calendar', Calendar)
