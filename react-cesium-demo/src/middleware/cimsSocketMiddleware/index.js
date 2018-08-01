import * as actions from '../../share/action.js';

import * as socketActions from '../../share/socketActions.js';


function createSocketMiddleware(socket) {
    var eventFlag = false;
    return store => next => action => {
      //如果中间件第一次被调用，则首先绑定一些socket订阅事件
      if (!eventFlag) {
        eventFlag = true;
        socket.on('msg', function(data) {
          //next(socketActions.socket_show_msg(data));
        });
        // socket.on('msg from server', function(data) {
        //   next(message_update(data));
        // });
        // socket.on('self logout', function() {
        //   window.location.reload();
        // });
        // setInterval(function() {
        //   socket.emit('heart beat');
        // }, 10000);
      }
      //捕获action，如果是和发送相关的事件，则调用socket对应的发布函数
    //   if (action.type == 'MSG_UPDATE') {
    //     socket.emit('msg from client', action.msg);
    //   } else if (action.type == 'NICKNAME_GET') {
    //     socket.emit('guest come', action.nickName);
    //   } else if (action.type == 'NICKNAME_FORGET') {
    //     socket.emit('guest leave', store.getState().nickName);
    //   }
      return next(action);
    }
  }
  
  export default createSocketMiddleware