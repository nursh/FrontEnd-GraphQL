import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import fetchSong from '../queries/fetchSong';
import { Link } from 'react-router-dom';


class SongDetail extends Component {
  render() {
    const { song } = this.props.data;
    if (!song) return <div>Loading..</div>;
    return (
      <div>
        <Link to="/">Back</Link>
        <h3>{song.title}</h3>
      </div>
    )
  }
}

export default graphql(fetchSong, {
  options: (props) => ({ variables:  { id: props.match.params.id }})
})(SongDetail);