import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { Link } from 'react-router-dom';
import createHistory from "history/createHashHistory"

const history = createHistory();

class SongCreate extends Component {
  state = {
    title: '',
  }

  onSubmit = async (event) => {
    event.preventDefault();

    await this.props.mutate({
      variables: {
        title: this.state.title,
      }
    });
    history.push('/');
  }

  render() {
    return (
      <div>
        <Link
          to="/"
        >
          &larr; Back
        </Link>
        <h3>Create a new song</h3>
        <form onSubmit={this.onSubmit}>
          <label>Song Title: </label>
          <input 
            onChange={evt => this.setState({ title: evt.target.value })}
            value={this.state.value}
          />
        </form>
      </div>
    );
  }
}

const mutation = gql`
  mutation AddSong($title: String){
    addSong(title: $title){
      title
    }
  }
`;

export default graphql(mutation)(SongCreate);