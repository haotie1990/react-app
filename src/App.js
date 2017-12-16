import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
} from 'react-router-dom'

import './App.scss'

import { Menu, Layout } from 'antd'
const { Header, Content } = Layout
const MenuItem = Menu.Item

import HomePage from './Home.jsx'
import LoginPage from './Login.jsx'
import GuidePage from './Guide.jsx'
import AdminPage from './Admin.jsx'

class App extends Component {
  render() {
    return (
        <Router>
            <Layout className="app-page">
                <Switch>
                    <Route exact path="/" component={HomePage}></Route>
                    <Route path="/login" component={LoginPage}></Route>
                    <Route path="/views" component={GuidePage}></Route>
                    <Route path="/admin" component={AdminPage}></Route>
                </Switch>
            </Layout>
        </Router>
    );
  }
}

export default App;
