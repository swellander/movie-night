import React from 'react';
import { connect } from 'react-redux';
import { _sendMessage, writeMessage } from '../reducers/messages';
import TextField from '@material-ui/core/TextField';

class NewMessageBar extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    const { sendNewMessage, content } = this.props;
    sendNewMessage({ content });
  }
  render() {
    const styles = {
      position: 'fixed',
      bottom: 0,
    }
    return (
      <div style={styles}>
        <form method="POST" onSubmit={this.handleSubmit}>
          <TextField
            type="text"
            placeholder="Express yourself"
            variant="outlined"
            value={this.props.content}
            onChange={e => this.props.writeNewMessage(e.target.value)}
          />
        </form>
      </div>
    )
  }
}

const mapStateToProps = ({ messages }) => ({
  content: messages.draft
});

const mapDispatchToProps = dispatch => ({
  writeNewMessage: content => dispatch(writeMessage(content)),
  sendNewMessage: content => dispatch(_sendMessage(content))
});

export default connect(mapStateToProps, mapDispatchToProps)(NewMessageBar);