import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Message from './Message';
import { connect } from 'react-redux';
import { _loadMessages } from '../store';

class MessageList extends Component {
  componentDidMount() {
    this.props.loadMessages();
  }

  render() {
    return (
      <div>
        {this.props.messages.map(message => (
          <Message key={message.id} message={message} />
        ))}
        <br></br>
      </div>
    )
  }
}



const mapDispatchToProps = dispatch => ({
  loadMessages: () => dispatch(_loadMessages())
});

const mapStateToProps = state => ({
  ...state
});

// MessageList.propTypes = {
//   messages: PropTypes.array.isRequired,
// }


export default connect(mapStateToProps, mapDispatchToProps)(MessageList);