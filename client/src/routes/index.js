import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

import All_Projects from '../pages/All/All_Projects';
import All_Tasks from '../pages/All/All_Tasks';
import All_Resources from '../pages/All/All_Resources';
import All_Materials from '../pages/All/All_Materials';

import Details_Task from '../pages/Details/Details_Task';
import Details_Resource from '../pages/Details/Details_Resource';
import Details_Material from '../pages/Details/Details_Material';

export default function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={SignIn} />
            <Route path="/register" component={SignUp} />
            <Route path="/favicon.ico" exact component={SignIn} />
            {/* Lists */}

            <Route
                key="list_projects"
                path="/dashboard"
                component={All_Projects}
                isPrivate
            />
            <Route
                key="list_tasks"
                path="/tasks"
                component={All_Tasks}
                isPrivate
            />
            <Route
                key="list_materials"
                path="/materials"
                component={All_Materials}
                isPrivate
            />
            <Route
                key="list_resources"
                path="/resources"
                component={All_Resources}
                isPrivate
            />

            {/* Details */}
            <Route
                key="details_task"
                path="/tasks/:taskId"
                component={Details_Task}
                isPrivate
            />
            <Route
                key="details_material"
                path="/materials/:resourceId"
                component={Details_Resource}
                isPrivate
            />
            <Route
                key="details_resources"
                path="/resources/:materialId"
                component={Details_Material}
                isPrivate
            />
        </Switch>
    );
}
