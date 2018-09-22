import React from 'react';
//import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { writeMovie } from '../reducers/movies';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { NavLink, Link } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import { _addMovie } from '../reducers/movies';

class Nav extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    const { addMovie, draft } = this.props;
    addMovie(draft);
  }

  render() {
    const { draft, handleChange } = this.props;
    return (
      <div>
        <AppBar position="fixed" color="default">
          <Toolbar>
            <Typography variant="title" color="inherit">
              <Link to="/">
                Movie Night
              </Link>
            </Typography>
            <NavLink to="/chat"><Button color="inherit">Chat</Button></NavLink>

            {/* TODO: make a separate component for form */}
            <form onSubmit={this.handleSubmit}>
              <TextField
                id="standard-search"
                label="Lookup a movie"
                value={draft}
                onChange={e => handleChange(e.target.value)}
              />
              <Button type="submit">Add</Button>
            </form>

          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

// Nav.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

const mapStateToProps = ({ movies }) => {
  return {
    draft: movies.draft
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleChange: draftContent => dispatch(writeMovie(draftContent)),
    addMovie: title => dispatch(_addMovie(title))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Nav);