import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Home from './components/pages/Home'
import User from './components/users/User'
import Alert from './components/layout/Alert'
import About from './components/pages/About'
import NotFound from './components/pages/NotFound'
import './App.css'
import GithubState from './context/github/GithubState'
import AlertState from './context/alert/AlertState'

const App = () => {
   return (
      <GithubState>
         <AlertState>
            <Router>
               <div className="App">
                  <Navbar />
                  <div className="container">
                     <Alert />
                     <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/about" exact component={About} />
                        <Route path="/user/:login" exact component={User} />
                        <Route component={NotFound} />
                     </Switch>
                  </div>
               </div>
            </Router>
         </AlertState>
      </GithubState>
   )
}

export default App
