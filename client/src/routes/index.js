import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';

import DefaultLayout from '../pages/_layouts/default';
import Tasks from '../pages/Tasks';

export default function Routes() {
  return (
    <Switch>
      <DefaultLayout>
        <Route key="dashboard" path="/" exact component={Dashboard} />
        <Route key="tasks" path="/tasks/:taskId" component={Tasks} />
      </DefaultLayout>
    </Switch>
  );
}
