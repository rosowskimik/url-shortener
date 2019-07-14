import React, { useEffect } from 'react';
import { useStoreState, useStoreActions } from 'easy-peasy';

import ListItem from './ListItem';

const LatestList = () => {
  const list = useStoreState(state => state.latestUrls);
  const fetchList = useStoreActions(thunks => thunks.fetchLatest);

  useEffect(() => {
    fetchList();
    //eslint-disable-next-line
  }, []);

  return (
    <ul>
      <li className='list-head'>Latest links:</li>
      {list.map(li => (
        <ListItem key={li._id} shortUrl={li.shortUrl} longUrl={li.longUrl} />
      ))}
    </ul>
  );
};

export default LatestList;
