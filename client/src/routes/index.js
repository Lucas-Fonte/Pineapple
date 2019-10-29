import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';

import DefaultLayout from '../pages/_layouts/default';
import Task from '../pages/Task';

export default function Routes() {
  return (
    <Switch>
      <DefaultLayout>
        <Route key="dashboard" path="/" exact component={Dashboard} />
        <Route key="tasks" path="/tasks/:taskId" component={Task} />
      </DefaultLayout>
    </Switch>
  );
}
