import React from 'react';

const Main = () => {
  const onSubmit = e => {
    e.preventDefault();
  };

  return (
    <form onSubmit={onSubmit}>
      <input type='text' placeholder='Your link...' />
      <input type='submit' value='Shorten!' className='btn btn-block' />
    </form>
  );
};

export default Main;
