import React from 'react'
import { connect } from 'react-redux'
import { setMessage } from '../state/action-creators'


function Message(props) {

  const { quiz } = props;

  return <div id="message">{props.infoMessage === '' ? 'Nice Job!' : props.infoMessage}</div>
}

const mapStateToProps = state => {
  return state
}

export default connect(mapStateToProps, { setMessage })(Message);