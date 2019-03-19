import React from 'react';
import PropTypes from 'prop-types';

function Random({ random, onClick }) {
  return (
    <>
      <p>{random.body}</p>
      <button onClick={onClick}>Get Random</button>
    </>
  );
}

Random.propTypes = {
  random: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Random;
