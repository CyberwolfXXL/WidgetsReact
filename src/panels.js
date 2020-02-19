import React from 'react';
import './panels.css';


class MyPanel extends React.Component {

  constructor(props) {
    super(props);
    this.name = props.name;
    this.state = { panelWidth: props.panelWidth }
  };

  render() {

    return (

      <div className="panel" style={{ gridColumnStart: 1, gridColumnEnd: this.state.panelWidth }} >
        <h1>{this.name}</h1>
        {/*<label>Länge</label>
          < input type="text" name="verticalLength"></input> */}
      </div >
    );
  }

}
export default MyPanel; 