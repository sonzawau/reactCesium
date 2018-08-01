import * as ActionTypes from './actionType.js'

export const socket_show_msg=(param)=>{
    return{
        type:ActionTypes.SOCKET_SHOW_MSG,
        param:param
    };
};

