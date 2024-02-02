import React from 'react';
import {  Route, Switch } from 'react-router-dom';
import HomePage from '../components/HomePage';
import NotFoundPage from '../components/NotFoundPage';
import ExampleFeature from '../features/exampleFeature/ExampleFeature';

const Routes = () => (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/example" component={ExampleFeature} />
      {/* 404 should be the last one */}
      <Route component={NotFoundPage} />

    </Switch>
);

export default Routes;
