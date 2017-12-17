import React from 'react'
import { withRouter } from 'react-router-dom'

import { Layout, Button } from 'antd'
import UserInfoContainer from './UserInfo.jsx'

class HomePage extends React.Component {
    constructor(props) {
        super(props);
    
        this.handleClickUpload = this.handleClickUpload.bind(this);
        this.handleClickLogin = this.handleClickLogin.bind(this);
        this.handleClickSignUp = this.handleClickSignUp.bind(this);
    }

    handleClickUpload() {
        var history = this.props.history;
        history.push('/views/upload');
    }

    handleClickLogin() {
        var history = this.props.history;
        history.push('/login/sigin-in');
    }

    handleClickSignUp() {
        var history = this.props.history;
        history.push('/login/sigin-up');
    }

    render() {
        return (
            <Layout className="home-page">
                <Button onClick={this.handleClickUpload}>上传</Button>
                <Button onClick={this.handleClickLogin}>登录</Button>
                <Button onClick={this.handleClickSignUp}>注册</Button>
                <UserInfoContainer/>
            </Layout>
        )
    }
}

export default withRouter(HomePage);