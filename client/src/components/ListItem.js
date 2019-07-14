import React from 'react';
import PropTypes from 'prop-types';

const ListItem = ({ shortUrl, longUrl }) => {
  return (
    <li>
      <span className='long-url'>
        <a href={longUrl} target='_blank' rel='noopener noreferrer'>
          {longUrl}
        </a>
      </span>
      <span className='short-url'>
        shortened to:{' '}
        <a href={shortUrl} target='_blank' rel='noopener noreferrer'>
          {shortUrl.slice(7)}
        </a>
      </span>
    </li>
  );
};

ListItem.propTypes = {
  shortUrl: PropTypes.string,
  longUrl: PropTypes.string
};

export default ListItem;
