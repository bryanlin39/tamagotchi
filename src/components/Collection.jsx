import React from 'react';
import NewForm from './NewForm';
import PropTypes from 'prop-types';

function Collection(props) {
  return (
    <div>
      <h3>Tamagotchi Collection</h3>
      <NewForm onNewTamagotchi={props.onNewTamagotchi}/>
      <ul>
        {Object.keys(props.collection).map((tamagotchiId) =>
          <li key={tamagotchiId} onClick={() => {props.onSelectedTamagotchi(tamagotchiId);}}>{props.collection[tamagotchiId].name}</li>
        )}
      </ul>
    </div>
  );
}

Collection.propTypes = {
  collection: PropTypes.object,
  onNewTamagotchi: PropTypes.func,
  onSelectedTamagotchi: PropTypes.func
};

export default Collection;
