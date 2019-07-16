import React from 'react';

import { StoreProvider, createStore } from 'easy-peasy';
import model from './model';

import Form from './components/Form';
import Alert from './components/Alert';
import LatestList from './components/LatestList';

import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.scss';

const store = createStore(model);

const App = () => {
  return (
    <StoreProvider store={store}>
      <h1 className='header'>URL Shortener</h1>
      <Alert />
      <Form />
      <LatestList />
    </StoreProvider>
  );
};

export default App;
