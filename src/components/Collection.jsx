import React from 'react';
import NewForm from './NewForm';
import PropTypes from 'prop-types';

function Collection(props) {
  return (
    <div>
      <h3>Tamagotchi Collection</h3>
      <NewForm onNewTamagotchi={props.onNewTamagotchi}/>
      <ul>
        {props.collection.map((tamagotchi) =>
          <li key={tamagotchi.id}>{tamagotchi.name}</li>
        )}
      </ul>
    </div>
  );
}

Collection.propTypes = {
  collection: PropTypes.array,
  onNewTamagotchi: PropTypes.func
};

export default Collection;
