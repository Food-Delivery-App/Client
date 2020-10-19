import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import routes from '../router';

class HomeLayout extends Component {
    render() {
        return (
            <Route render={props => (
                <Switch>
                    {routes.map((route, idx) => {
                        return route.component ? (
                            <Route
                                key={idx}
                                path={route.path}
                                exact={route.exact}
                                render={props => (
                                    <route.layout {...props}>
                                    <route.component {...props} />
                                    </route.layout>
                                    )} />
                            ) : (null);
                        })}
                    </Switch>
            )} />
        )
    }
}

export default HomeLayout;