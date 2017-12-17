import React from 'react'
import { withRouter } from 'react-router-dom'

import { Layout, Button } from 'antd'

class Upload extends React.Component {
    constructor(props) {
        super(props);

        this.handleClickFile = this.handleClickFile.bind(this);
    }

    handleClickFile() {
        var history = this.props.history;
        history.push('/views/fileread/1234567890');
    }

    render() {
        return (
            <Layout className="upload-page">
                <div>Upload Page!!!</div>
                <Button onClick={this.handleClickFile}>文件</Button>
            </Layout>
        )
    }
}

export default withRouter(Upload);