import React from 'react';
import './panels.css';

class MyPanel extends React.Component {

  constructor(props) {
    super(props);
    this.name = props.name;
    this.state = { panelWidth: props.panelWidth };

  };

  setPanelWidth = (event) => {
    this.setState({ panelWidth: event.target.value });
  };

  incrementPanelWidth = (event) => {
    let width = 1 * (this.state.panelWidth) + 1;
    this.setState({ panelWidth: width });

  };

  render() {

    return (

      <div className="panel" style={{ gridColumnStart: 1, gridColumnEnd: this.state.panelWidth }} >
        <h2>{this.name}</h2>
        <label>Length</label>
        <input onChange={this.setPanelWidth} type="text" name="verticalLength" value={this.state.panelWidth}></input>
        <button onClick={this.incrementPanelWidth} >+1 </button>
      </div >
    );
  }

}
export default MyPanel; 