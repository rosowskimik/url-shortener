import { action, thunk } from 'easy-peasy';
import axios from 'axios';

export default {
  //STATE
  shortUrl: '',
  latestUrls: [],
  alert: null,

  //THUNKS
  fetchLatest: thunk(async actions => {
    try {
      const res = await axios.get('/api');
      actions.setLatest(res.data);
    } catch (err) {}
  }),
  shorten: thunk(async (actions, longUrl) => {
    const config = {
      headers: { 'Content-type': 'application/json' }
    };
    try {
      const res = await axios.post('/api/shorten', { longUrl }, config);
      actions.addShort(res.data.shortUrl);
    } catch (err) {
      actions.setAlert(err.response.data);
      setTimeout(actions.clearAlert, 2500);
    }
  }),

  //ACTIONS
  setLatest: action((state, links) => {
    state.latestUrls = links.map(link => link);
  }),
  addShort: action((state, newUrl) => {
    state.shortUrl = newUrl;
  }),
  setAlert: action((state, message) => {
    state.alert = message;
  }),
  clearAlert: action(state => {
    state.alert = null;
  })
};
