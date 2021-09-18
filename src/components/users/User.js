import React, { useEffect, useContext } from 'react';
import Spinner from '../Layout/Spinner';
import Repos from '../repos/Repos';
import { Link } from 'react-router-dom';
import GithubContext from '../../context/github/GithubContext';
const User = ({ match }) => {
  const githubContext = useContext(GithubContext);
  const { usr, loading, getUser, getUserRepos, repos } = githubContext;
  useEffect(() => {
    getUser(match.params.login);
    getUserRepos(match.params.login);

    // eslint-disable-next-line
  }, []);

  const {
    name,
    company,
    avatar_url,
    location,
    bio,
    blog,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
  } = usr;

  if (loading === true) {
    return <Spinner></Spinner>;
  } else {
    return (
      <>
        <Link to='/' className='btn btn-danger'>
          Back to search
        </Link>

        <div className='card grid-2'>
          <div className='all-center'>
            <img
              src={avatar_url}
              alt='profile_img'
              className='round-img'
              style={{ width: '200px' }}
            />
            <h1>{name}</h1>
            <p>
              Location:{' '}
              {location ? <span>{location}</span> : <span>📍 Github</span>}
            </p>
          </div>
          <div>
            {bio ? (
              <>
                <h3>Bio:</h3>
                <p>{bio}</p>
              </>
            ) : (
              <>
                <h3>Bio:</h3>
                <p>Hey there , I am a github user😄</p>
              </>
            )}
            <a
              href={html_url}
              target='_blank'
              rel='noreferrer'
              className='btn btn-dark my-1'
            >
              Github Profile
            </a>
            <ul>
              <li>
                {login && (
                  <>
                    <strong>Username : </strong>
                    {login}
                  </>
                )}
              </li>
              <li>
                {company && (
                  <>
                    <strong>Company : </strong>
                    {company}
                  </>
                )}
              </li>
              <li>
                {blog && (
                  <>
                    <strong>Website : </strong>
                    <a href={blog}>{blog}</a>
                  </>
                )}
              </li>
              <li>
                <strong>Hireable : </strong>
                {hireable ? (
                  <i className='fas fa-check text-success'></i>
                ) : (
                  <i className='fas fa-times-circle text-danger'></i>
                )}
              </li>
            </ul>
          </div>
        </div>
        <div className='card text-center'>
          <div className='badge badge-primary'>
            <strong>Followers : </strong>
            {followers}
          </div>
          <div className='badge badge-success'>
            <strong>Following : </strong>
            {following}
          </div>
          <div className='badge badge-danger'>
            <strong>Public Repos : </strong>
            {public_repos}
          </div>
          <div className='badge badge-dark'>
            <strong>Public Gists : </strong>
            {public_gists}
          </div>
        </div>
        <Repos repos={repos}></Repos>
      </>
    );
  }
};

export default User;
