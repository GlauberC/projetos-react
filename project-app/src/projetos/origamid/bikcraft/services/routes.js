import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import { Home, Sobre, Produtos, Portfolio, Contato } from '../pages/pages'

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path = '/' component = {Home} />
            <Route path = '/sobre' component = { Sobre } />
            <Route path = '/produtos' component = { Produtos } />
            <Route path = '/portfolio' component = { Portfolio } />
            <Route path = '/contato' component = { Contato } />
        </Switch>
    </BrowserRouter>
)

export default Routes