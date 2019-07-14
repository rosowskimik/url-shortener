import React, { useState } from 'react';

const Main = () => {
  const [input, setInput] = useState('');

  const onSubmit = e => {
    e.preventDefault();
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type='text'
        value={input}
        onChange={e => setInput(e.target.value)}
        placeholder='Your link...'
      />
      <div className='input-group'>
        <input type='text' value='' placeholder='Hello' disabled />
        <span className='secondary-content'>
          <a href='#!' className={`btn`}>
            <i className='far fa-copy' />
          </a>
          <a href='#!' className={`btn`}>
            <i className='fas fa-chevron-right' />
          </a>
        </span>
      </div>
      <input type='submit' value='Shorten!' className='btn btn-block' />
    </form>
  );
};

export default Main;
