import { action, thunk } from 'easy-peasy';
import axios from 'axios';

export default {
  //STATE
  shortUrl: '',
  latestUrls: [],

  //THUNKS
  fetchLatest: thunk(async actions => {
    const res = await axios.get('/api');
    actions.setLatest(res.data);
  }),
  shorten: thunk(async (actions, longUrl) => {
    const res = await axios.post('/api/shorten', longUrl, {
      headers: {
        'Content-type': 'application/json'
      }
    });
    actions.addShort(res.data);
  }),

  //ACTIONS
  setLatest: action((state, links) => {
    state.latestUrls = links.map(link => link);
  }),
  addShort: action((state, newUrl) => {
    state.shortUrl = newUrl;
  })
};
