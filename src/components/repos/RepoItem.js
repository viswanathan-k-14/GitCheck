import React from 'react';
import PropTypes from 'prop-types';
const RepoItem = (props) => {
  return (
    <>
      <div className='card'>
        <h3>
          <a href={props.repo.html_url}>{props.repo.name}</a>
        </h3>
      </div>
    </>
  );
};
RepoItem.propTypes = {
  repo: PropTypes.object.isRequired,
};
export default RepoItem;
