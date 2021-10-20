import { createApp } from './vendor/vue.esm-browser.js';

// From https://jsonplaceholder.typicode.com/comments
const emails = [
  'Eliseo@gardner.biz',
  'Jayne_Kuhic@sydney.com',
  'Nikita@garfield.biz',
  'Lew@alysha.tv',
  'Hayden@althea.biz',
  'Presley.Mueller@myrl.com',
  'Dallas@ole.me',
  'Mallory_Kunze@marie.org',
  'Meghan_Littel@rene.us',
  'Carmen_Keeling@caroline.name',
  'Veronica_Goodwin@timmothy.net',
  'Oswald.Vandervort@leanne.org',
  'Kariane@jadyn.tv',
  'Nathan@solon.io',
  'Maynard.Hodkiewicz@roberta.com',
  'Christine@ayana.info',
  'Preston_Hudson@blaise.tv',
  'Vincenza_Klocko@albertha.name',
  'Madelynn.Gorczany@darion.biz',
  'Mariana_Orn@preston.org',
  'Noemie@marques.me',
  'Khalil@emile.co.uk',
  'Sophia@arianna.co.uk',
  'Jeffery@juwan.us',
  'Isaias_Kuhic@jarrett.net',
];

const MarkedList = {
  data() {
    return {
      items: emails,
      searchValue: undefined,
    };
  },
  computed: {
    filterItems() {
      let listEmail = [];

      for (let i = 0; i < this.items.length; i += 1) {
        let isActive = () => {
          if (this.items[i].includes(this.searchValue)) {
            return true;
          } else {
            return false;
          }
        };
        listEmail[i] = {
          item: this.items[i],
          isActive: isActive(),
        };
      }
      return listEmail;
    },
  },
};
createApp(MarkedList).mount('#app');
