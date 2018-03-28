import React from 'react';
import Attribute from './Attribute';
import PropTypes from 'prop-types';

function HealthDashboard(props) {

  function setLevelColor(num) {
    if (num > 50) {
      return 'green';
    } else if (num > 20) {
      return 'orange';
    } else {
      return 'red';
    }
  }

  return (
    <div>
      <h3>Health</h3>
      {Object.keys(props.attributeLevels).map((attribute, index) => {
        let levelColor = setLevelColor(props.attributeLevels[attribute]);
        return <Attribute
          attribute={attribute}
          level={props.attributeLevels[attribute]}
          color={levelColor}
          key={index}/>
      })}
    </div>
  );
}

HealthDashboard.propTypes = {
  attributeLevels: PropTypes.object.isRequired
};

export default HealthDashboard;
