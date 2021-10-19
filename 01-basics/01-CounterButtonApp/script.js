import { createApp } from './vendor/vue.esm-browser.js';

const RootComponent = {
  data() {
    return {
      counter: 0,
    };
  },
};
const app = createApp(RootComponent);
const vm = app.mount('#app');
