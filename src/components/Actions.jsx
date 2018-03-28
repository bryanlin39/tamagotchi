import React from 'react';
import PropTypes from 'prop-types';

function Actions(props) {
  return (
    <div>
      <h3>Actions</h3>
      <button onClick={() => {props.onClickAction('Food');}}>Feed</button>
      <button onClick={() => {props.onClickAction('Happiness');}}>Play</button>
      <button onClick={() => {props.onClickAction('Rest');}}>Sleep</button>
    </div>
  );
}

Actions.propTypes = {
  onClickAction: PropTypes.func
};

export default Actions;
