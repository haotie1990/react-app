import React from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'

import { Layout, Button } from 'antd'

import SignIn from './SignIn.jsx'
import SignUp from './SignUp.jsx'
import ResetPw from './ResetPw.jsx'

class LoginPage extends React.Component {
    constructor(props) {
        super(props);

        this.handleClickSignIn = this.handleClickSignIn.bind(this);
        this.handleClickSignUp = this.handleClickSignUp.bind(this);
        this.handleClickResetPw = this.handleClickResetPw.bind(this);
    }

    handleClickSignIn() {
        var history = this.props.history;
        history.push('/login/sigin-in');
    }

    handleClickSignUp() {
        var history = this.props.history;
        history.push('/login/sigin-up');
    }

    handleClickResetPw() {
        var history = this.props.history;
        history.push('/login/reset-pw');
    }

    render() {
        var match = this.props.match;
        return (
            <Layout className="login-page">
                <Button onClick={this.handleClickSignIn}>登录</Button>
                <Button onClick={this.handleClickSignUp}>注册</Button>
                <Button onClick={this.handleClickResetPw}>重置密码</Button>
                <Route exact path="/login/sigin-in" component={SignIn}></Route>
                <Route exact path="/login/sigin-up" component={SignUp}></Route>
                <Route exact path="/login/reset-pw" component={ResetPw}></Route>
            </Layout>
        )
    }
}

export default withRouter(LoginPage);