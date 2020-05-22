import React from 'react'
import { Route, Switch, Redirect} from 'react-router-dom'

import { Welcome } from './_screens/WelcomePage/Welcome'
import {Nav} from './_components/Nav'
import { Account } from './_screens/Account/Index'

function App() {
  return (
    <div>
          <Nav />
          <Switch>              
              <Route exact path="/" component={Welcome} />
              <Route path="/account" component={Account} />
              <Redirect from="*" to="/" />
          </Switch>
    </div>
  )
}
export default App