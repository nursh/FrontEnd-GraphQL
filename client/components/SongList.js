import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { Link } from 'react-router-dom';
import query from '../queries/fetchSongs';


class SongList extends Component {

  onSongDelete = async (id) => {
    await this.props.mutate({
      variables: { id },
    });
    this.props.data.refetch(); //refetch data after deleting song if the query is in this component
  }

  renderSongs() {
    const { songs } = this.props.data;
    return songs.map(({ id, title }) => (
      <li key={id} className="collection-item">
        {title}
        <i
          className="material-icons right"
          onClick={() => this.onSongDelete(id)}
        >
          delete
        </i>
      </li>
    ));
  }

  render() {
    if (this.props.data.loading)
      return <div>Loading...</div>;
    return (
      <div>
        <ul className="collection">
          {this.renderSongs()}
        </ul>
        <Link
          to="/songs/new"
          className="btn-floating btn-large right red"
        >
          <i className="material-icons">add</i>
        </Link>
      </div>
    );
  }
}

const mutation = gql`
  mutation DeleteSong($id: ID){
    deleteSong(id: $id){
      id
      title
    }
  }
`;

export default graphql(mutation)(graphql(query)(SongList));

