import { createApp } from './vendor/vue.esm-browser.js';

const VueCalc = {
  data() {
    return {
      number1: 0,
      number2: 0,
      math: 'sum',
    };
  },
  computed: {
    numberCalc() {
      if (this.math === 'sum') {
        return this.number1 + this.number2;
      }
      if (this.math === 'subtract') {
        return this.number1 - this.number2;
      }
      if (this.math === 'multiply') {
        return this.number1 * this.number2;
      }
      if (this.math === 'divide') {
        return this.number1 / this.number2;
      }
    },
  },
};
createApp(VueCalc).mount('#app');
