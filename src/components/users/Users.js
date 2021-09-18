import React, { useContext } from 'react';
import UserItem from './UserItem';
import Spinner from '../Layout/Spinner';
import GithubContext from '../../context/github/GithubContext';
const Users = () => {
  const githubContext = useContext(GithubContext);
  const { user, loading } = githubContext;
  if (loading === true) {
    return <Spinner></Spinner>;
  } else {
    return (
      <div style={userStyle}>
        {user.map((item) => (
          <UserItem key={item.id} user={item}></UserItem>
        ))}
      </div>
    );
  }
};

const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3,1fr)',
  gridGap: '1rem',
};

export default Users;
