import React from 'react';
import Actions from './Actions';
import HealthDashboard from './HealthDashboard';

class Tamagotchi extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      attributeLevels: {
        Food: 22,
        Happiness: 100,
        Rest: 55
      }
    };
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
    let newAttributeLevels = Object.assign({}, this.state.attributeLevels);
    for (let attribute in newAttributeLevels) {
      if (newAttributeLevels[attribute] > 0) {
        newAttributeLevels[attribute] -= 1;
      }
    }
    this.setState({attributeLevels: newAttributeLevels});
  }

  handleIncreaseLevel(attribute) {
    if (this.state.attributeLevels[attribute] < 100) {
      let newAttributeLevels = Object.assign({}, this.state.attributeLevels);
      newAttributeLevels[attribute] += 1;
      this.setState({attributeLevels: newAttributeLevels});
    }
  }

  render() {
    return (
      <div>
        <hr/>
        <Actions onClickAction={this.handleIncreaseLevel}/>
        <hr/>
        <HealthDashboard attributeLevels={this.state.attributeLevels}/>
        <hr/>
      </div>
    );
  }

}

export default Tamagotchi;
