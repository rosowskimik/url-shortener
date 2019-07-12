import React, { Fragment } from 'react';
import './App.scss';

import Main from './components/Main';
import LatestList from './components/LatestList';

const App = () => {
  return (
    <Fragment>
      <h1 className='header'>URL Shortener</h1>
      <Main />
      <LatestList />
    </Fragment>
  );
};

export default App;
