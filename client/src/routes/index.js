import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

import Products from '../pages/Products';

export default function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={SignIn} />
            <Route path="/register" component={SignUp} />
            {/* Lists */}
            <Route
                key="list_products"
                path="/dashboard"
                component={Products}
                isPrivate
            />
        </Switch>
    );
}
