import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Message from './Message';
import { connect } from 'react-redux';
import { _loadMessages } from '../reducers/messages';

class MessageList extends Component {
  scrollToBottom = () => {
    this.messagesEnd.scrollIntoView({ behavior: "smooth" });
  }

  //auto-scrolling came from here https://stackoverflow.com/questions/37620694/how-to-scroll-to-bottom-in-react

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
  return {
    loadMessages: () => dispatch(_loadMessages())
  }
};

const mapStateToProps = (state) => {
  return {
    messages: state.messages.list
  }
};

// MessageList.propTypes = {
//   messages: PropTypes.array.isRequired,
// }


export default connect(mapStateToProps, mapDispatchToProps)(MessageList);