import React from 'react';
import { connect } from 'react-redux';
import { _sendMessage, writeMessage } from '../store';
import TextField from '@material-ui/core/TextField';

class NewMessageBar extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    const { sendNewMessage, content } = this.props;
    sendNewMessage({ content });
  }
  render() {
    return (
      <div>
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

const mapStateToProps = state => ({
  content: state.draft
});

const mapDispatchToProps = dispatch => ({
  writeNewMessage: content => dispatch(writeMessage(content)),
  sendNewMessage: content => dispatch(_sendMessage(content))
});

export default connect(mapStateToProps, mapDispatchToProps)(NewMessageBar);