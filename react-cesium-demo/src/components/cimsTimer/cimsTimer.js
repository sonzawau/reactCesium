import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';


class CimsTimer extends Component {
    state={};
    componentDidMount() {
        this.timer = setInterval(
            () => {
                this.setState({time:new Date().toLocaleTimeString()});
            },
            1000
        );
    }
    componentWillUnmount() {
        this.timer && clearInterval(this.timer);
    }
    render() {
        const time = this.state.time;
        return (
                <div style={{ color:'#ffffff',opacity:'0.8', height: '100px', width: '200px', position: 'fixed', left: '20px', top: '50px' }}>
                   {time}
                </div>
        );
    }
}


const mapStateToProps = (state) => {
    console.log(state.COMMON.COMMON_CURRENT_MODEL);
    const tempData = {
    }
    var a = ((state.COMMON.COMMON_CURRENT_MODEL === undefined) ? tempData: JSON.parse(state.COMMON.COMMON_CURRENT_MODEL))
    return {
       
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(CimsTimer);