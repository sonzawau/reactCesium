import React, { Component } from 'react';
import './App.css';
import Viewer from "cesium/Source/Widgets/Viewer/Viewer";
import { connect } from 'react-redux'
import UIMain from './UIMain.js'
import CimsCesium from './components/cimsCesium/cimsCesium.js'
import { BrowserRouter, Route } from 'react-router-dom'
import { workWithScriptName } from './share/fetchData.js'

import { bindActionCreators } from 'redux';

class App extends Component {
    componentDidMount() {
        
        const { chartOption,workWithScriptName } = this.props;
        workWithScriptName({ scriptName: 'aa', params: { queryParam: '' } });
        console.log('app did mont');
    }
    componentWillReceiveProps(nextProps) {
        
    }
    render() {
        return (
            <div >
                <CimsCesium />
                <BrowserRouter>
                    <Route path="/" component={UIMain} />
                </BrowserRouter>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        workWithScriptName: bindActionCreators(workWithScriptName, dispatch)
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);