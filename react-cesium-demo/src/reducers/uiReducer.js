import * as ActionType from '../share/actionType.js'

export default (state = { CANVAS: {}, CHARTS: [] }, action) => {
  switch (action.type) {
    case ActionType.UI_CLEAR: {
      return {
        CANVAS: {},
        CHARTS: []
      };
    }
    case ActionType.UI_CANVAS: {
      return {
        ...state,
        CANVAS: {
          name: action.param.name,
        }
      };
    }
    case ActionType.UI_CHARTS: {
      return {
        ...state,
        CHARTS: [
          ...state.CHARTS,
          {
            id: action.param.id,
            name: action.param.name,
            state: 'loading',
            width: action.param.width,
            height: action.param.height,
            left: action.param.left,
            top: action.param.top,
            lazyUpdate: false,
            opacity: action.param.opacity,
            fontFamily: action.param.fontFamily,
            fontSize: action.param.fontSize,
            data: action.param.data,
            option: {},
            msg: '',
            backgroundColor: action.param.backgroundColor
          }
        ]
      };
    }
    case ActionType.UI_CHARTS_2: {
      let hasSameKey = state.CHARTS.some(function (x) { return x.id === action.param.id; });
      if (hasSameKey)
        return {
          ...state,
          CHARTS: state.CHARTS.map((chartItem) => {
            if (action.param.id === undefined)
              return chartItem;
            if (chartItem.id === action.param.id) {
              return {
                id: action.param.id,
                name: action.param.name,
                state: 'loading',
                width: action.param.width,
                height: action.param.height,
                left: action.param.left,
                top: action.param.top,
                lazyUpdate: false,
                opacity: action.param.opacity,
                fontFamily: action.param.fontFamily,
                fontSize: action.param.fontSize,
                data: action.param.value,
                option: {},
                msg: '',
                backgroundColor: action.param.backgroundColor
              };
            }
            else {
              return chartItem;
            }
          })
        }
      else
        return {
          ...state,
          CHARTS: [
            ...state.CHARTS,
            {
              id: action.param.id,
              name: action.param.name,
              state: 'loading',
              width: action.param.width,
              height: action.param.height,
              left: action.param.left,
              top: action.param.top,
              lazyUpdate: false,
              opacity: action.param.opacity,
              fontFamily: action.param.fontFamily,
              fontSize: action.param.fontSize,
              data: action.param.data,
              option: {},
              msg: '',
              backgroundColor: action.param.backgroundColor
            }
          ]
        }
    }
    case ActionType.UI_CHARTS_LOADING: {
      return {
        ...state,
        CHARTS: state.CHARTS.map((chartItem) => {
          if (action.param.id === undefined)
            return chartItem;
          if (chartItem.id === action.param.id) {
            return { ...chartItem, state: 'loading' };
          }
          else {
            return chartItem;
          }
        })
      }
    }
    case ActionType.UI_CHARTS_COMPLETE: {
      return {
        ...state,
        CHARTS: state.CHARTS.map((chartItem) => {
          if (action.param.id === undefined)
            return chartItem;
          if (chartItem.id === action.param.id) {
            return { ...chartItem, state: 'complete', option: action.param.data };
          }
          else {
            return chartItem;
          }
        }
        )
      }
    }
    case ActionType.UI_CHARTS_ERROR: {
      return {
        ...state,
        CHARTS: state.CHARTS.map((chartItem) => {
          if (action.param.id === undefined)
            return chartItem;
          if (chartItem.id === action.param.id) {
            return { ...chartItem, state: 'error', msg: action.param.msg };
          }
          else {
            return chartItem;
          }
        }
        )
      }
    }
    case ActionType.UI_PENDING_CANCELED: {
      return {
        ...state,
        CHARTS: state.CHARTS.map((chartItem) => {
          if (chartItem.state === 'loading')
            return { ...chartItem, state: 'error', msg: 'canceled by user' };
          else {
            return chartItem;
          }
        })
      }
    }
    default: {
      return state;
    }
  }
}