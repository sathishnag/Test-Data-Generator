import { BrowserRouter, Route, Link, browserHistory, IndexRoute } from 'react-router-dom'
import DashBoard from '../DashBoard/DashBoard';
import React from 'react';
const App = () => {
    return (
      //<Header>
      <BrowserRouter>
      <Route exact path = "/dashboard" component={DashBoard}/>
      </BrowserRouter>
      //<Footer>
    )
   }
export default App;

