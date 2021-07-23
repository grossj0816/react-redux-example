import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import store from './components/store/store';

import Posts from './components/Posts';
import Postform from './components/Postform';


class App extends Component {
  render() {
    return (
      // Provider is a react component that pretty much connects
      //our react app and redux together.

      //store holds the whole state tree of this app. This is the
      //full data repo for the app.
      <Provider store={store}>
        <div>
          <div className="App">
            <Postform />
            <hr />
            <Posts />       
          </div> 
        </div>
      </Provider>
    )
  }
}

export default App;