import React, { useState, useContext } from 'react';
import Alerts from '../Layout/Alerts';
import GithubContext from '../../context/github/GithubContext';
// import AlertContext from '../../context/alert/alertContext';
const Search = () => {
  const [alert, setAlert] = useState(false);
  const [text, setText] = useState('');
  const githubContext = useContext(GithubContext); // using global contextApi
  // const alertContext = useContext(AlertContext);
  const onFormSubmit = (e) => {
    e.preventDefault();
    if (text === '') {
      setAlert(true);
      setTimeout(() => {
        setAlert(false);
      }, 2000);
    } else {
      githubContext.searchUsers(text);
      setText('');
    }
  };

  const onInputChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      {alert === true && <Alerts></Alerts>}
      <form onSubmit={onFormSubmit} className='form'>
        <input
          type='text'
          name='text'
          value={text}
          onChange={onInputChange}
          placeholder='Search Users...'
        />
        <input
          type='submit'
          value='Search'
          className='btn btn-dark btn-block'
        />
      </form>
      {githubContext.user.length > 0 && (
        <button
          className='btn btn-danger btn-block'
          onClick={githubContext.clearUsers}
        >
          Clear
        </button>
      )}
    </div>
  );
};

export default Search;
