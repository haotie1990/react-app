import React from 'react'
import {
    Route,
    Link,
    Switch
} from 'react-router-dom'

import { Layout, Menu } from 'antd'
const { Header, Content } = Layout
const MenuItem = Menu.Item

import Upload from './Upload.jsx'
import FileRead from './FileRead.jsx'

class GuidePage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        var match = this.props.match;
        return (
            <Layout>
                <Header>
                    <Menu mode="horizontal">
                        <MenuItem><Link to={`${match.url}/upload`}>上传</Link></MenuItem>
                        <MenuItem><Link to={`${match.url}/fileread`}>文件</Link></MenuItem>
                    </Menu>
                </Header>
                <Content>
                    <Switch>
                        <Route path={`${match.url}/upload`} component={Upload}></Route>
                        <Route path={`${match.url}/fileread/:fid`} component={FileRead}></Route>
                    </Switch>
                </Content>
            </Layout>
        )
    }
}

export default GuidePage;