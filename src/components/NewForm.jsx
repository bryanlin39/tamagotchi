import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';

function NewForm(props) {

  let _name = null;

  function handleCreateNewTamagotchi(event) {
    event.preventDefault();
    props.onNewTamagotchi({name: _name.value, id: v4()});
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
