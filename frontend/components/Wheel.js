import React from 'react';
import { connect } from 'react-redux';
import { moveClockwise, moveCounterClockwise } from '../state/action-types'


function Wheel(props) {

  const { state } = props;

  const handleClockwise = () => {
    props.moveClockwise();
  }

  const handleCounterclockwise = () => {
    props.moveCounterClockwise();
  }

  return (
    <div id="wrapper">
      <div id="wheel">
        {
          [0, 1, 2, 3, 4, 5].map(idx => (
            <div key={idx} className={`cog ${idx === state.wheel ? 'active' : ''}`} style={{ "--i": idx }}>
              {idx === state.wheel ? 'B' : null}
            </div>
          ))
        }
        {/* <div className="cog active" style={{ "--i": 0 }}>B</div>
        <div className="cog" style={{ "--i": 1 }}></div>
        <div className="cog" style={{ "--i": 2 }}></div>
        <div className="cog" style={{ "--i": 3 }}></div>
        <div className="cog" style={{ "--i": 4 }}></div>
        <div className="cog" style={{ "--i": 5 }}></div>--i is a custom CSS property, no need to touch that nor the style object */}
      </div>
      <div id="keypad">
        <button id="counterClockwiseBtn" onClick={() => handleCounterclockwise()}>Counter clockwise</button>
        <button id="clockwiseBtn" onClick={() => handleClockwise()}>Clockwise</button>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return ({
    state
  })
}

export default connect(mapStateToProps, { moveClockwise, moveCounterClockwise })(Wheel);