import React from 'react';
import Collection from './Collection';
import Tamagotchi from './Tamagotchi';
import { v4 } from 'uuid';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      collection: {},
      selectedTamagotchi: null
    };
    this.handleAddNewTamagotchi = this.handleAddNewTamagotchi.bind(this);
    this.handleSelectedTamagotchi = this.handleSelectedTamagotchi.bind(this);
    this.handleIncreaseLevel = this.handleIncreaseLevel.bind(this);
  }

  componentDidMount() {
    this.globalTimer = setInterval(() =>
      this.reduceLevels(), 3000
    );
  }

  componentWillUnmount() {
    clearInterval(this.globalTimer);
  }

  reduceLevels() {
    let newCollection = Object.assign({}, this.state.collection);
    for (let id in newCollection) {
      for (let attribute in newCollection[id].attributes) {
        if (newCollection[id].attributes[attribute] > 0) {
          newCollection[id].attributes[attribute] -= 1;
        }
      }
    }
    this.setState({collection: newCollection});
  }

  handleIncreaseLevel(tamagotchiId, attribute) {
    if (this.state.collection[tamagotchiId].attributes[attribute] < 100) {
      let newCollection = Object.assign({}, this.state.collection);
      newCollection[tamagotchiId].attributes[attribute] += 1;
      this.setState({collection: newCollection});
    }
  }

  handleAddNewTamagotchi(tamagotchi) {
    let newId = v4();
    let newCollection = Object.assign({}, this.state.collection, {
      [newId]: tamagotchi
    });
    this.setState({collection: newCollection});
  }

  handleSelectedTamagotchi(tamagotchiId) {
    this.setState({selectedTamagotchi: tamagotchiId});
  }

  render() {
    let selectedTamagotchiDetails = null;
    let selectedId = this.state.selectedTamagotchi;
    if (selectedId) {
      selectedTamagotchiDetails = <Tamagotchi id={selectedId} details={this.state.collection[selectedId].attributes} name={this.state.collection[selectedId].name} onClickAction={this.handleIncreaseLevel}/>;
    }

    return (
      <div>
        <h1>Tamagotchi</h1>
        <hr/>
        <Collection collection={this.state.collection} onNewTamagotchi={this.handleAddNewTamagotchi} onSelectedTamagotchi={this.handleSelectedTamagotchi}/>
        {selectedTamagotchiDetails}
      </div>
    );
  }

}

export default App;
