import React from 'react';

import ListItem from './ListItem';

const LatestList = () => {
  const list = [
    {
      _id: '5d2608af8a4ef6332c7d8c51',
      shortUrl: 'http://localhost:5000/3YXDXWyjZ',
      longUrl: 'https://www.npmjs.com/package/express-limiter',
      urlCode: '3YXDXWyjZ'
    },
    {
      _id: '5d25de637633a033e0f8ae5b',
      shortUrl: 'http://localhost:5000/zO-EoJ3WW',
      longUrl:
        'http://www.sennheiser.com.pl/sluchawki-domowe-i-hifi-sennheiser.html',
      urlCode: 'zO-EoJ3WW'
    },
    {
      _id: '5d24f6410ecd692f246eb533',
      shortUrl: 'http://localhost:5000/l3-UHk61mX',
      longUrl:
        'https://www.youtube.com/watch?v=ye4l7_OpJM0&feature=youtu.be&list=WL&t=15247',
      urlCode: 'l3-UHk61mX'
    },
    {
      _id: '5d24f5ea7517bb52185beb97',
      shortUrl: 'http://localhost:5000/2cYPBhcUuQ',
      longUrl:
        'https://allegro.pl/oferta/szafa-przesuwna-barcelona-plus-b-23-150-biala-7827815464',
      urlCode: '2cYPBhcUuQ'
    }
  ];

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
