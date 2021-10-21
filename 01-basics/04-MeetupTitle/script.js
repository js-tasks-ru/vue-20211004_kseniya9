import { createApp } from './vendor/vue.esm-browser.js';

const API_URL = 'https://course-vue.javascript.ru/api';

function fetchMeetupById(meetupId) {
  return fetch(`${API_URL}/meetups/${meetupId}`).then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      return response.json().then((error) => {
        throw error;
      });
    }
  });
}

const MeetupTitle = {
  data() {
    return {
      title: 'MEETUP_TITLE',
      titleNumber: 0,
    };
  },
  watch: {
    titleNumber() {
      this.getTitle(this.titleNumber);
    },
  },
  methods: {
    getTitle(meetupId) {
      fetchMeetupById(meetupId).then((data) => {
        this.title = data.title;
      });
    },
  },
};
createApp(MeetupTitle).mount('#app');
