import React, { Component } from 'react';
import Draggable from 'react-draggable';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import ReactEcharts from 'echarts-for-react';
import QueueAnim from 'rc-queue-anim';
import { fetchChartData } from '../../share/fetchData.js'


class CimsCharts extends Component {
    componentDidMount() {
        const { chartOption,fetchChartData } = this.props;
        fetchChartData({ chartKey: chartOption.id, params: { queryParam: '' } });
    }
    render() {
        const {  chartOption } = this.props
        console.log(JSON.stringify(chartOption.height));
        return (

            <QueueAnim key={chartOption.id} delay={300} duration={1000} className="queue-simple">
                <div key={'aaa'} style={{  opacity: 0, height: 0, width: 0, position: 'fixed', left: chartOption.left, top: chartOption.top }}>
                    <Draggable>
                        <div style={{ 'backgroundColor': chartOption.backgroundColor, opacity: chartOption.opacity, height: chartOption.height, width: chartOption.width}}>
                            <ReactEcharts style={{ 'backgroundColor': chartOption.backgroundColor, opacity: chartOption.opacity, height: '100px', width: chartOption.width }}
                                option={chartOption.option}/>
                        </div>
                    </Draggable>
                </div>
            </QueueAnim>

        );
    }
}


const mapStateToProps = (state) => {
    return {
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchChartData: bindActionCreators(fetchChartData, dispatch)
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(CimsCharts);