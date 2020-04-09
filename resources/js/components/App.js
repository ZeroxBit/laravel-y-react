import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { createStore, compose } from "redux";
import { Provider } from "react-redux";
import Header from './Header'
import Login from '../views/Login';
import userReducer from '../redux/reducers/userReducer'


const store = createStore(
  userReducer
);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/">
              <Login />
            </Route>

            <Route exact path="/header">
              <Header />
            </Route>

          </Switch>
        </Router>
      </Provider>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
