import { createApp } from 'vue';

import { router } from './router.js';
import { store } from './store/store.js';

import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';

import VCalendar from 'v-calendar';

<<<<<<< HEAD
import VueClickAway from 'vue3-click-away';

import './assets/styles/main.scss';
import App from './App.vue';
=======
import VueClickAway from "vue3-click-away";

import './assets/styles/main.scss';
import App from './App.vue';


import HistogramSlider from "vue3-histogram-slider";
import "vue3-histogram-slider/dist/histogram-slider.css";

>>>>>>> e2e6072875b2cce4087f87013f22a5c0bb03d502
const app = createApp(App);

app.config.globalProperties.$filters = {
  reviewsRateAvg(stay) {
    var sum = 0;
    stay.reviews.forEach(review => {
      sum += review.rate;
    });
    sum = sum / stay.reviews.length;
    return `${sum.toFixed(1)} `;
  },
};
app.use(router);
app.use(store);
app.use(ElementPlus);
<<<<<<< HEAD

app.use(VCalendar, {});
app.use(VueClickAway);
=======
app.use(VCalendar, {})
app.use(VueClickAway)
// app.use(materialIcons);
app.component(HistogramSlider.name, HistogramSlider);
>>>>>>> e2e6072875b2cce4087f87013f22a5c0bb03d502

app.mount('#app');
