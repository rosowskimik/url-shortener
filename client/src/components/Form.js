import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import { useStoreState, useStoreActions } from 'easy-peasy';

const Form = () => {
  const [input, setInput] = useState('');

  const shortUrl = useStoreState(state => state.shortUrl);
  const shorten = useStoreActions(thunks => thunks.shorten);

  const onSubmit = e => {
    e.preventDefault();
    if (input) shorten(input);
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type='text'
        name='url'
        value={input}
        onChange={e => setInput(e.target.value)}
        placeholder='Your link...'
      />
      <div className='input-group'>
        <input type='text' value={shortUrl} disabled />
        <span className='secondary-content'>
          <CopyToClipboard text={shortUrl}>
            <button
              className={`btn ${shortUrl.length === 0 && 'btn-inactive'}`}
            >
              <i className='far fa-copy' />
            </button>
          </CopyToClipboard>
          <a
            href={shortUrl}
            className={`btn ${shortUrl.length === 0 && 'btn-inactive'}`}
            target='_blank'
            rel='noreferrer noopener'
            disabled={shortUrl.length === 0}
          >
            <i className='fas fa-chevron-right' />
          </a>
        </span>
      </div>
      <input type='submit' value='Shorten!' className='btn btn-block' />
    </form>
  );
};

export default Form;
