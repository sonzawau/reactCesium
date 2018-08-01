import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Viewer from "cesium/Source/Widgets/Viewer/Viewer";
import Cesium from "cesium/Source/Cesium.js";
import { connect } from 'react-redux'

class CimsCesium extends Component {
    state = {};
    componentDidMount() {
        this.viewer = new Viewer(this.cesiumContainer);

    }
    shouldComponentUpdate(nextProps, nextState) {
        var point = Cesium.Cartesian3.fromDegrees(-117.16, 32.71, 15000.0);
        this.viewer.camera.flyTo({
            destination :  Cesium.Cartesian3.fromDegrees(116.435314,39.960521, 15000.0), // 设置位置
            orientation: {
                heading : Cesium.Math.toRadians(20.0), // 方向
                pitch : Cesium.Math.toRadians(-90.0),// 倾斜角度
                roll : 0
            },
            //duration:5, // 设置飞行持续时间，默认会根据距离来计算
            complete: function () {
                // 到达位置后执行的回调函数
                console.log('到达目的地');
            },
            cancel: function () {
                // 如果取消飞行则会调用此函数
                console.log('飞行取消')
            },
            pitchAdjustHeight: -90, // 如果摄像机飞越高于该值，则调整俯仰俯仰的俯仰角度，并将地球保持在视口中。
            maximumHeight:5000, // 相机最大飞行高度
            //flyOverLongitude: 100, // 如果到达目的地有2种方式，设置具体值后会强制选择方向飞过这个经度
        });
        return false;
    }
    render() {
        return (
            <div>
                <div id='cesiumDataHide' style={{ 'display': 'none' }} />
                <div id="cesiumContainer" style={{ 'height': '100vh','minHeight':'100px','minWidth':'100px','width':'100vw' }} ref={element => this.cesiumContainer = element} />
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        uiCharts: state.UI.CHARTS
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(CimsCesium);