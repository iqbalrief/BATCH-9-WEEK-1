import React from 'react'
import Footer from './Footer.'
import Header from './Header'
import Main from './Main'
import './main.css'
import Sidebar from './Sidebar'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from './Home'
import Counter from '../Counter'
import Todo from '../todo/Todo'

const MainLayout = () => {
    return (
        <BrowserRouter>
        <div id = "container">
            <Header />
            <Sidebar />
            <Main>
                <Switch>
                    <Route exact path="/home" component={Home} />
                    <Route exact path="/counter" component={Counter} />
                    <Route exact path="/todo" component={Todo}/>
                </Switch>
                </Main>
            <Footer />
            </div>
            </BrowserRouter>
    )
}

export default MainLayout;
