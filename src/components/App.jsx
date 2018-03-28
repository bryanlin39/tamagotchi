import React from 'react';
import Collection from './Collection';
import Tamagotchi from './Tamagotchi';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      collection: []
    };
    this.handleAddNewTamagotchi = this.handleAddNewTamagotchi.bind(this);
  }

  handleAddNewTamagotchi(tamagotchi) {
    let newCollection = this.state.collection.slice();
    newCollection.push(tamagotchi);
    this.setState({collection: newCollection});
  }

  render() {
    return (
      <div>
        <h1>Tamagotchi</h1>
        <hr/>
        <Collection collection={this.state.collection} onNewTamagotchi={this.handleAddNewTamagotchi}/>
        <Tamagotchi/>
      </div>
    );
  }

}

export default App;
