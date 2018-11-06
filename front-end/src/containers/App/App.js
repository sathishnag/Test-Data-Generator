import { BrowserRouter, Route, Link, browserHistory, IndexRoute } from 'react-router-dom'
import DashBoard from '../DashBoard/DashBoard';
import Header from '../../components/Header/Header';
import React from 'react';
const App = () => {
    return (
      <div>
      <Header></Header>
      <BrowserRouter>
      <Route exact path = "/dashboard" component={DashBoard}/>
      </BrowserRouter>
      </div>
    )
   }
export default App;

