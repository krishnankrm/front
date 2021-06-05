import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import React, { Component } from "react";
import Form from "./form";
import './App.css';

export default class  App extends Component {
  render() {
    return(
      <Router>
          <Route path='/'><Form/></Route>
      </Router> )
  }
}
