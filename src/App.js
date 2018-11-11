import React, { Component } from 'react';
import './App.css';
import Posts from './components/Posts';
import PostsForm from './components/PostsForm';
import { Provider } from 'react-redux';
import store from './store'


class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div className="App">
        <PostsForm />
        <hr />
        <Posts />
      </div>
      </Provider>
    );
  }
}

export default App;
