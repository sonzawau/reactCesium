import * as action from './action.js';
import * as socketAction from './socketActions.js';
import axios from 'axios';
import { SERVER_URL } from './axioConfig.js';

const CancelToken = axios.CancelToken;
var source = CancelToken.source();

/**
 * 取消所有Axios请求
 * @param chartKey      chart的唯一标示key
 * @param params        请求接口的参数
 */
// export const cancelAllPending = ({ chartKey, params }) => dispatch => {
//     source.cancel('Operation canceled by the user.');
//     dispatch(action.action_ui_pending_canceled(params));
// }
var CIMS_MAIN_INTERVAL_OBJ = undefined;
var CIMS_MAIN_TIMEOUT_OBJ = undefined;
/**
 * 请求数据调用方法
 * @param chartKey      chart的唯一标示key
 * @param params        请求接口的参数
 */
export const fetchChartData = ({ chartKey, params }) => dispatch => {
    console.log('aaa');
     dispatch(action.action_ui_charts_loading({ id: chartKey }));
    return axios.post(`${SERVER_URL}/testDataWithoutLogin`, {
        queryParam: params.queryParam
    },
        {
            cancelToken: source.token
        }).then((response) => {
            
            console.log(response);
            dispatch(action.action_ui_charts_complete({ id: chartKey, data: response.data }));
        })
        .catch(function (response) {
            console.log(response);
            dispatch(action.action_ui_charts_error({ id: chartKey, msg: response.data }));
        });
};



/**
 * Script对象结构
 * |-id
 * |-name
 * |-isLoop  是否循环
 * |-permission 权限級別 0代表無需權限，其它的需要判斷
 * |-nodes  节点列表
 *    |-id
 *    |-name 
 *    |-groupID
 *    |-changeWay 串联方式
 *    |-changeWayData 串联参数
 *    |-models 资源列表
 *       |-id id
 *       |-type 大分类，仪表盘还是三维
 *       |-subtype
 *       |-name
 *       |-converterName
 *       |-uiData
 *       |-value
 *       |-exData
 * 
 */
export const workWithScriptName = ({ scriptName, params }) => dispatch => {
    console.log('workWithScriptName work');
    source.cancel('Operation canceled by the user.');
    source = CancelToken.source();
    dispatch(action.action_common_clear_remained_nodes(params));
    console.log(`${SERVER_URL}/GetScriptByName`);
    return axios.post(`${SERVER_URL}/GetScriptByName`, {
            name:scriptName,
            queryParam: params.queryParam
        },
        {
            cancelToken: source.token
        }).then((response) => {
            console.log(response);
            let scriptData = response.data;
            console.log(JSON.stringify(scriptData));
            if (scriptData && scriptData.nodes && Array.isArray(scriptData.nodes) && scriptData.nodes != []) {
                let nodes = scriptData.nodes;
                let nextType = 'NONE';
                let nextValue = '';
                for (let i = 0; i < nodes.length; i++) {
                    if (nodes[i] && nodes[i].models && Array.isArray(nodes[i].models) && nodes[i].models != []) {
                        //无串联，顺序执行时
                        if (nextType === 'NONE') {
                            for (let j = 0; j < nodes[i].models.length; j++) {

                                switch (nodes[i].models[j].type) {
                                    case 'UI_CHARTS':
                                        console.log(JSON.stringify(nodes[i].models[j]));
                                        dispatch(action.action_ui_charts(nodes[i].models[j]));
                                        break;

                                    default:
                                        break;
                                }
                            }
                        }
                        else {
                            let nodesClone = nodes.slice(i);
                            let paramToAction = { type: nextType, value: nextValue, nodes: nodesClone };
                            dispatch(action.action_common_set_remained_nodes(paramToAction));
                            return;
                        }
                    }
                    nextType = nodes[i].changeWay;
                    nextValue = nodes[i].changeWayData;
                }
            }
        })
        .catch(function (response) {
            console.log(response);
            dispatch(socketAction.socket_show_msg({ param: response.data }));
        });
}
