import React, { useReducer } from 'react';
import GithubContext from './GithubContext';
import GithubReducer from './GithubReducer';
import axios from 'axios';
import {
  SEARCH_USERS,
  SET_LOADING,
  CLEAR_USERS,
  GET_USER,
  GET_REPOS,
} from '../types';

// initial global state

let githubClientId;
let githubClientSecret;
if (process.env.NODE_ENV !== 'production') {
  githubClientId = process.env.REACT_APP_GITHUB_CLIENT_ID;
  githubClientSecret = process.env.REACT_APP_GITHUB_CLIENT_SECRET;
} else {
  githubClientId = process.env.GITHUB_CLIENT_ID;
  githubClientSecret = process.env.GITHUB_CLIENT_SECRET;
}
const GithubState = (props) => {
  const initialState = {
    user: [],
    usr: {},
    repos: [],
    loading: false,
  };
  //dispatching to reducer
  const [state, dispatch] = useReducer(GithubReducer, initialState);

  //all actions go here

  //search users

  const searchUsers = async (text) => {
    setLoading();
    const users = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${githubClientId}&client_secret=${githubClientSecret}`
    );
    dispatch({ type: SEARCH_USERS, payload: users.data.items });
  };

  //get user

  const getUser = async (login) => {
    setLoading();
    const users = await axios.get(
      `https://api.github.com/users/${login}?client_id=${githubClientId}&client_secret=${githubClientSecret}`
    );

    dispatch({ type: GET_USER, payload: users.data });
  };

  // get repos

  const getUserRepos = async (login) => {
    setLoading();
    const users = await axios.get(
      `https://api.github.com/users/${login}/repos?per_page=10&sort=created:asc&client_id=${githubClientId}&client_secret=${githubClientSecret}`
    );
    dispatch({ type: GET_REPOS, payload: users.data });
  };

  //clear users

  const clearUsers = () => {
    dispatch({ type: CLEAR_USERS });
  };

  //set loading

  const setLoading = () => {
    dispatch({ type: SET_LOADING }); // to dispatch to reducer.
  };

  // provider that wraps the main app

  // global accessible values goes here
  return (
    <GithubContext.Provider
      value={{
        user: state.user,
        usr: state.usr,
        repos: state.repos,
        loading: state.loading,
        searchUsers,
        clearUsers,
        getUser,
        getUserRepos,
      }}
    >
      {/* as we wrap all app in provider  */}

      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubState;
