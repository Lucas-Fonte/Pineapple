import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';

import DefaultLayout from '../pages/_layouts/default';

export default function Routes() {
  return (
    <Switch>
      <DefaultLayout>
        <Route path="/" exact component={Dashboard} />
      </DefaultLayout>
    </Switch>
  );
}
