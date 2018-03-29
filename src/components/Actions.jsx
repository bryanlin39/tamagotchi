import React from 'react';
import PropTypes from 'prop-types';

function Actions(props) {
  return (
    <div>
      <h3>Actions</h3>
      <button onClick={() => {props.onClickAction(props.id, 'food');}}>Feed</button>
      <button onClick={() => {props.onClickAction(props.id, 'happiness');}}>Play</button>
      <button onClick={() => {props.onClickAction(props.id, 'rest');}}>Sleep</button>
    </div>
  );
}

Actions.propTypes = {
  onClickAction: PropTypes.func,
  id: PropTypes.string
};

export default Actions;
