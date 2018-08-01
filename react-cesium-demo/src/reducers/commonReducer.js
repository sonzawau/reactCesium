import * as ActionType from '../share/actionType.js'
/*
 * MSG:弹出通知框
 * REMAINED_NODES:剩余节点及暂停情况
 *  |-TIMEOUT:下个节点的延迟执行时间
 *  |-WAITING_CAMERA:是否等待相机到达后执行
 *  |-WAITING_VEDIO:是否等待视频结束
 *  |-WAITING_RLT:是否等待热力图
 *  |-NODES_LIST:节点列表数组
 */
export default (state = {MSG:[],REMAINED_NODES:{NEXT_WAITING:{type:'NONE',param:''},NODES_LIST:[]}}, action) => {
    switch(action.type) {
      case ActionType.COMMON_CURRENT_MODEL: {
        return  {...state, COMMON_CURRENT_MODEL: action.param};
      }
      case ActionType.COMMON_CURRENT_NODE: {
        return  {...state, COMMON_CURRENT_NODE: action.param};
      }
      case ActionType.COMMON_CURRENT_SCRIPT: {
        return  {...state, COMMON_CURRENT_SCRIPT: action.param};
      }
      case ActionType.SOCKET_SHOW_MSG: {
        return  {...state, MSG: [action.param]};
      }
      case ActionType.COMMON_CLEAR_REMAINED_NODES: {
        return  {...state, REMAINED_NODES:{NEXT_WAITING:{type:'NONE',param:''},NODES_LIST:[]}};
      }
      /*
       * param.type:串联类型
       * param.value:串联参数
       * param.nodes:剩余的nodes
       */
      case ActionType.COMMON_SET_REMAINED_NODES: {
        return  {...state, REMAINED_NODES:{NEXT_WAITING:{type:action.param.type,param:action.param.value},NODES_LIST:action.param.nodes}};
      }
      default: {
        return state;
      }
    }
  }