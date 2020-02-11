import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Loading from './containers/Loading';
import Companies from './containers/Companies';
import Button from './containers/Button';
import { Provider } from 'react-redux';
import store from './store'
import { ApolloProvider } from '@apollo/react-hooks';
import { client } from './config'

function App() {
  // useEffect(() => getCompanies(), []);
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <div className="App">
          <Loading />
          <Companies />
          <Button />
        </div>
      </Provider>
    </ApolloProvider>
  );
}

export default App;
