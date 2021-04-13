import React, { Component } from 'react';
import { GlobalStyle } from "./style";
import { renderRoutes } from "react-router-config";
import routes from './routes/index.js';
import { BrowserRouter as Router} from 'react-router-dom'

export default class App extends Component {
  render() {
    return (
      <Router>
        <GlobalStyle></GlobalStyle>
        {renderRoutes(routes)}
      </Router>
    )
  }
}
