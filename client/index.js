import './style/style.css'
import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route } from 'react-router-dom';
import ApolloClient from 'apollo-client';
import { ApolloProvider } from 'react-apollo';

import App from './components/App';
import SongList from './components/SongList';
import SongCreate from './components/SongCreate';

const client = new ApolloClient({});

const Root = () => {
  return (
    <ApolloProvider client={client}>
      <Router>
        <App>
          <Route exact path="/" component={SongList} />
          <Route path="/songs/new" component={SongCreate} />
        </App>
      </Router>
    </ApolloProvider>
  );
}


ReactDOM.render(
  <Root />,
  document.querySelector('#root')
);
