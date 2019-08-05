import React from 'react'
import { BrowserRouter, Switch, Route} from 'react-router-dom'
import {Home, Profile, Settings} from './pages/pages'

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path = '/' component = {Home} />
            <Route path = '/profile/:id' component = {Profile} />
            <Route path = '/settings' component = {Settings} />
        </Switch>
    </BrowserRouter>
)

export default Routes