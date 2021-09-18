import React from 'react';
import Search from '../users/Search';
import Users from '../users/Users';
const Home = () => {
  return (
    <>
      <h1 style={{ textAlign: 'center' }}>
        Search your github friends around the 🌐
      </h1>
      <Search></Search>
      <Users></Users>
    </>
  );
};

export default Home;
