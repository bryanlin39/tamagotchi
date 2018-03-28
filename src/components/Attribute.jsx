import React from 'react';
import PropTypes from 'prop-types';

function Attribute(props) {
  return (
    <div>
      <p>{props.attribute}: {props.level}</p>
      <style jsx>{`
        p {
          color: ${props.color};
        }
      `}</style>
    </div>
  );
}

Attribute.propTypes = {
  attribute: PropTypes.string,
  level: PropTypes.number,
  color: PropTypes.string
};

export default Attribute;
