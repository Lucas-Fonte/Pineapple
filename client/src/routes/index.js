import React from 'react';
import { Switch, Route } from 'react-router-dom';

import DefaultLayout from '../pages/_layouts/default';

import All_Projects from '../pages/All/All_Projects';
import All_Tasks from '../pages/All/All_Tasks';
import All_Resources from '../pages/All/All_Resources';
import All_Materials from '../pages/All/All_Materials';

import New_Project from '../pages/New/New_Project';
import New_Task from '../pages/New/New_Task';
import New_Resource from '../pages/New/New_Resource';
import New_Material from '../pages/New/New_Material';

import Details_Task from '../pages/Details/Details_Task';
import Details_Resource from '../pages/Details/Details_Resource';
import Details_Material from '../pages/Details/Details_Material';

export default function Routes() {
  return (
    <Switch>
      <DefaultLayout>
        {/* Lists */}
        <Route key="list_projects" exact path="/" component={All_Projects} />
        <Route key="list_tasks" path="/tasks" component={All_Tasks} />
        <Route
          key="list_materials"
          path="/materials"
          component={All_Materials}
        />
        <Route
          key="list_resources"
          path="/resources"
          component={All_Resources}
        />

        {/* New */}
        <Route key="new_project" path="/new/project" component={New_Project} />
        <Route key="new_task" path="/new/task" component={New_Task} />
        <Route
          key="new_material"
          path="/new/material"
          component={New_Material}
        />
        <Route
          key="new_resource"
          path="/new/resource"
          component={New_Resource}
        />

        {/* Details */}
        <Route
          key="details_task"
          path="/tasks/:taskId"
          component={Details_Task}
        />
        <Route
          key="details_material"
          path="/materials/:resourceId"
          component={Details_Resource}
        />
        <Route
          key="details_resources"
          path="/resources/:materialId"
          component={Details_Material}
        />
      </DefaultLayout>
    </Switch>
  );
}
