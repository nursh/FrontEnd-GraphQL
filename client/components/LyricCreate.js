import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

class LyricCreate extends Component {
  state = {
    content: '',
  }

  onSubmit = async (evt) => {
    evt.preventDefault();

    await this.props.mutate({
      variables: {
        content: this.state.content,
        songId: this.props.songId,
      }
    })
    this.setState(() => ({ content: '' }));
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <label>Add a lyric</label>
        <input 
          value={this.state.content}
          onChange={evt => this.setState({ content: evt.target.value })}
        />
      </form>
    );
  }
}

const mutation = gql`
  mutation AddLyricToSong($content: String, $songId: ID!){ 
    addLyricToSong(content: $content, songId: $songId) {
      id
      lyrics {
        id
        content
        likes
      }
    }
  }
`;

export default graphql(mutation)(LyricCreate);