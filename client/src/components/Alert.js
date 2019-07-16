import React from 'react';

import { useStoreState } from 'easy-peasy';

const Alert = () => {
  const alert = useStoreState(state => state.alert);

  return <div className={`alert-${alert ? 'show' : 'hide'}`}>{alert}</div>;
};

export default Alert;
