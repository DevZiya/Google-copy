import React from 'react'
import { Route, Switch } from 'react-router'
import Home from './components/Home'
import Navbar from './components/Navbar'
import About from './pages/About'
import Images from './pages/Images'
import Gmail from './pages/Gmail'
import Store from './pages/Store'

function App() {
    return (
        <>
            <Navbar />
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/about' component={About} />
                <Route path='/image' component={Images} />
                <Route path='/gmail' component={Gmail} />
                <Route path='/store' component={Store} />
            </Switch>
        </>
    )
}

export default App
