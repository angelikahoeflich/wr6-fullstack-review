import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Auth from './components/Auth';
import Form from './components/Form';
import Feed from './components/Feed';


export default (
  <Switch>
    <Route path='/' component={Auth}/>
    <Route path='/create_post' component={Form}/>
    <Route path='/feed' component={Feed}/>
    
  </Switch>
)