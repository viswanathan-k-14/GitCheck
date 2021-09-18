import React from 'react';
import spinner from './spinner.gif';
function Spinner() {
  return (
    <>
      <img
        src={spinner}
        alt='Loading......'
        style={{ margin: 'auto', display: 'block', width: '200px' }}
      />
    </>
  );
}

export default Spinner;
