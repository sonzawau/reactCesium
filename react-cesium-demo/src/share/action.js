import * as ActionTypes from './actionType.js'

export const action_ui_clear=(param)=>{
    return{
        type:ActionTypes.UI_CLEAR,
        param:param
    };
};


export const action_ui_hide_menu=(param)=>{
    return{
        type:ActionTypes.UI_HIDE_MENU,
        param:param
    };
};

export const action_ui_image=(param)=>{
    return{
        type:ActionTypes.UI_IMAGE,
        param:param
    };
};



export const action_ui_logo=(param)=>{
    return{
        type:ActionTypes.UI_LOGO,
        param:param
    };
};


export const action_ui_title_image=(param)=>{
    return{
        type:ActionTypes.UI_TITLE_IMAGE,
        param:param
    };
};


export const action_ui_menu=(param)=>{
    return{
        type:ActionTypes.UI_MENU,
        param:param
    };
};

export const action_ui_timer=(param)=>{
    return{
        type:ActionTypes.UI_TIMER,
        param:param
    };
};
export const action_ui_dater=(param)=>{
    return{
        type:ActionTypes.UI_DATER,
        param:param
    };
};
export const action_ui_metro=(param)=>{
    return{
        type:ActionTypes.UI_METRO,
        param:param
    };
};
export const action_ui_charts=(param)=>{
    return{
        type:ActionTypes.UI_CHARTS_2,
        param:param
    };
};


export const action_ui_charts_loading=(param)=>{
    return{
        type:ActionTypes.UI_CHARTS_LOADING,
        param:param
    }

};

export const action_ui_charts_complete=(param)=>{
    return{
        type:ActionTypes.UI_CHARTS_COMPLETE,
        param:param
    }

};
export const action_ui_charts_error=(param)=>({

        type:ActionTypes.UI_CHARTS_ERROR,
        param:param

});
export const action_ui_charts_highlight=(param)=>{
    return{
        type:ActionTypes.UI_CHARTS_HIGHLIGHT,
        param:param
    };
};
export const action_ui_iframe=(param)=>{
    return{
        type:ActionTypes.UI_IFRAME,
        param:param
    };
};
export const action_ui_canvas=(param)=>{
    return{
        type:ActionTypes.UI_CANVAS,
        param:param
    };
};
export const action_ui_hide_by_name=(param)=>{
    return{
        type:ActionTypes.UI_HIDE_BY_NAME,
        param:param
    };
};

export const action_ui_dynamic_layout=(param)=>{
    return{
        type:ActionTypes.UI_DYNAMIC_LAYOUT,
        param:param
    };
};
export const action_ui_campass_and_height=(param)=>{
    return{
        type:ActionTypes.UI_CAMPASS_AND_HEIGHT,
        param:param
    };
};
export const action_ui_pending_canceled=(param)=>{
    return{
        type:ActionTypes.UI_PENDING_CANCELED,
        param:param
    };
};
//COMMON ACTION

export const action_common_clear_remained_nodes=(param)=>{
    return{
        type:ActionTypes.COMMON_CLEAR_REMAINED_NODES,
        param:param
    };
};
export const action_common_set_remained_nodes=(param)=>{
    return{
        type:ActionTypes.COMMON_SET_REMAINED_NODES,
        param:param
    };
};

export const action_common_current_script=(param)=>{
    return{
        type:ActionTypes.COMMON_CURRENT_SCRIPT,
        param:param
    };
};
export const action_common_current_node=(param)=>{
    return{
        type:ActionTypes.COMMON_CURRENT_NODE,
        param:param
    };
};
export const action_common_current_model=(param)=>{
    return{
        type:ActionTypes.COMMON_CURRENT_MODEL,
        param:param
    };
};