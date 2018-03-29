import React from 'react';
import PropTypes from 'prop-types';

function NewForm(props) {

  let _name = null;

  function handleCreateNewTamagotchi(event) {
    event.preventDefault();
    props.onNewTamagotchi({name: _name.value, attributes: {food: 23, happiness: 100, rest: 54}});
    _name.value = '';
  }

  return (
    <div>
      <form onSubmit={handleCreateNewTamagotchi}>
        <input id='name' placeholder='Name' ref={(input) => {_name = input;}}/>
        <button>Create New Tamagotchi</button>
      </form>
    </div>
  );
}

NewForm.propTypes = {
  onNewTamagotchi: PropTypes.func
};

export default NewForm;
