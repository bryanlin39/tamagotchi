import React from 'react';
import Actions from './Actions';
import HealthDashboard from './HealthDashboard';
import PropTypes from 'prop-types';

function Tamagotchi(props) {
  return (
    <div>
      <hr/>
      <HealthDashboard name={props.name} attributeLevels={props.details}/>
      <hr/>
      <Actions onClickAction={props.onClickAction} id={props.id}/>
      <hr/>
    </div>
  );
}

Tamagotchi.propTypes = {
  id: PropTypes.string.isRequired,
  details: PropTypes.object,
  name: PropTypes.string,
  onClickAction: PropTypes.func
};

export default Tamagotchi;
