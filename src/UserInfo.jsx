import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { Layout, Button } from 'antd'

import { setUserInfo } from './store'

class UserInfo extends React.Component {
    constructor(props) {
        super(props);

        this.handleClickLogin = this.handleClickLogin.bind(this);
    }

    handleClickLogin() {
        this.props.onChangeUserInfo({email:'kygeng@abcft.com', passwd:'123456'});
    }

    render() {
        const { email, passwd } = this.props;
        return (
            <Layout>
                <div> {email}/{passwd}</div>
                <Button onClick={this.handleClickLogin}>登录</Button>
            </Layout>
        )
    }
}

UserInfo.propTypes = {
    email: PropTypes.string.isRequired,
    passwd: PropTypes.string.isRequired
}

const mapStateToProps = (state) => {
    return {
        email: state.userInfo.email,
        passwd: state.userInfo.passwd
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onChangeUserInfo: (data) => {
            dispatch(setUserInfo(data));
        }
    }
}

const UserInfoContainer = connect(mapStateToProps, mapDispatchToProps)(UserInfo);

export default UserInfoContainer;