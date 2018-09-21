import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Message from './Message';
import { connect } from 'react-redux';
import { _loadMessages } from '../store';

class MessageList extends Component {
  scrollToBottom = () => {
    this.messagesEnd.scrollIntoView({ behavior: "smooth" });
  }

  //auto-scrolling here https://stackoverflow.com/questions/37620694/how-to-scroll-to-bottom-in-react

  componentDidMount() {
    this.props.loadMessages();
    this.scrollToBottom();
  }

  componentDidUpdate() {
    this.scrollToBottom();
  }

  render() {
    const styles = {
      overflow: 'scroll',
      marginTop: '10vh',
      marginBottom: '10vh'
    }
    return (
      <div id="message-list" style={styles}>
        {this.props.messages.map(message => (
          <Message key={message.id} message={message} />
        ))}
        <div style={{ float: "left", clear: "both" }}
          ref={(el) => { this.messagesEnd = el; }}>
        </div>
        <br></br>
      </div>
    )
  }
}



const mapDispatchToProps = dispatch => {
  const msgList = document.getElementById('message-list');
  if (msgList) msgList.scrollTop = msgList.scrollHeight;
  return {
    loadMessages: () => dispatch(_loadMessages())
  }
};

const mapStateToProps = state => ({
  ...state
});

// MessageList.propTypes = {
//   messages: PropTypes.array.isRequired,
// }


export default connect(mapStateToProps, mapDispatchToProps)(MessageList);