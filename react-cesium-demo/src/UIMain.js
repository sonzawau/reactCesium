import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Draggable from 'react-draggable';
import { connect } from 'react-redux'
import { Button, notification } from 'antd';
import CimsCharts from './components/cimsCharts/cimsCharts.js'
import {action_ui_charts,action_ui_clear} from './share/action.js';
import queryString from 'query-string'
import CimsTimer from './components/cimsTimer/cimsTimer.js'
import './App.css';

class UIMain extends Component {
    constructor(props) {
        super(props);
        console.log(queryString.parse(this.props.location.search));
        if(queryString.parse(this.props.location.search).script!==undefined)
            {
                this.props.onChangeModel();
            }
    }
    componentWillReceiveProps(nextProps)
    {
        console.log(nextProps.msg);
        // notification.open({
        //     message: 'Notification Title',
        //     description: nextProps.msg,
        //   });
        // let currentParam=queryString.parse(this.props.location.search);
        // let nextParam=queryString.parse(nextProps.location.search);
        // console.log(1);
        // if(currentParam!=nextParam)
        // {
        //     console.log(JSON.stringify(nextParam));
        //     if(nextParam.script!=undefined)
        //     {
        //         this.props.onChangeModel();
        //     }
        // }
    }
    render() {
        const { value, location,uiCharts } = this.props
        return (
            <div >
                <Draggable>
                    <Button className="singlebutton" type="primary" onClick={()=>{this.props.history.push('?script=aaa');this.props.onChangeModel();}}>click</Button>
                </Draggable>
                <Draggable>
                    <Button style={{  opacity: 1, height: 100, width:200, position: 'fixed', left: 0, top:0 }} type="primary" onClick={()=>{this.props.history.push('');this.props.onClear();}}>clear</Button>
                </Draggable>
                <CimsTimer />
                
                {
                    uiCharts.map((chartItem) => (
                        <CimsCharts key={chartItem.id} chartOption={chartItem} />
                    ))
                }
               
            </div>
        );
    }
}



const testData = {
    title: {
        text: '堆叠区域图',
        textStyle: {
            color: '#ffffff'
        }
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['邮件营销', '联盟广告', '视频广告']
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [
        {
            type: 'category',
            boundaryGap: false,
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        }
    ],
    yAxis: [
        {
            type: 'value'
        }
    ],
    series: [
        {
            name: '邮件营销',
            type: 'line',
            stack: '总量',
            areaStyle: { normal: {} },
            data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
            name: '联盟广告',
            type: 'line',
            stack: '总量',
            areaStyle: { normal: {} },
            data: [220, 182, 191, 234, 290, 330, 310]
        },
        {
            name: '视频广告',
            type: 'line',
            stack: '总量',
            areaStyle: { normal: {} },
            data: [150, 232, 201, 154, 190, 330, 410]
        }
    ]
}
const uiChartsParam = {
    id: '101',
    model_name: '测试仪表盘',
    state: 'loading',
    width: '400px',
    height: '200px',
    left: '150px',
    top: '100px',
    lazyUpdate: false,
    opacity: '0.8',
    data: '',
    option: {},
    backgroundColor: '#ff0000'
}
const changeNodeAction = {
    type: 'COMMON_CURRENT_NODE',
    param: '500px'
}
const mapStateToProps = (state) => {
    //notification.open({message: 'Notification Title', description:state.COMMON.MSG[0]===undefined?'':state.COMMON.MSG[0].msg});
    return {
        uiCharts: state.UI.CHARTS,
        msg: state.COMMON.MSG
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        onChangeModel: (id) => {
            dispatch(action_ui_charts(uiChartsParam));
        },
        
        onClear: (id) => {
            dispatch(action_ui_clear({}));
        }
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(UIMain);