import React from 'react'

import { Layout } from 'antd'

class FileRead extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        console.log(this.props.match.params.fid);
    }

    render() {
        var match = this.props.match;
        return (
            <Layout className="file-read-page">
                <div>File Read Page!!!</div>
                <div>{match.params.fid}</div>
            </Layout>
        )
    }
}

export default FileRead;