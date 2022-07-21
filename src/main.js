import { createApp } from 'vue';

import { router } from './router.js';
import { store } from './store/store.js';

import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';

import './assets/styles/main.scss';
import App from './App.vue';

const app = createApp(App);

app.config.globalProperties.$filters = {
  reviewsRateAvg(stay) {
    var sum = 0;
    stay.reviews.forEach(review => {
      sum += review.rate;
    });
    sum = sum / stay.reviews.length;
    return `⭐️ ${sum.toFixed(1)}`;
  },
};

app.use(router);
app.use(store);
app.use(ElementPlus);

app.mount('#app');
