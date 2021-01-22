import React,{useState} from 'react';
import Login from './component/Login';
import Section from './component/Section';

import {BrowserRouter as Router,Route, Switch,Link } from 'react-router-dom';

function Routes(){
   
    
    return(
        <Router>
            <Switch>
                <Route  exact path="/"  component={Login}></Route>
                <Route path="/section" component={Section} ></Route>
               
              
            </Switch>
        </Router>
    )
}
export default Routes; 