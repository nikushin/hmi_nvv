import openSocket from "socket.io-client";
import {store} from "./index";
const socket = openSocket('localhost:8080', {transports: ['websocket']});


class SocketService {

    SocketEmmit (name, data) {
        socket.emit(name, data);
    };

    SocketSendMessage (data) {
        socket.emit("msg", [data[0], data[1]] );
    };

    socketCreat() {
        socket.on('memory_change', data => {
            // console.log('memory_change', data);
            store.dispatch({type: 'MEMORY_FROM_PLC', payload: data});
        });
        socket.on('memory_init', data => {
            // console.log('memory_change', data);
            store.dispatch({type: 'MEMORY_INIT', payload: data});
        });
    };
}

const socketService = new SocketService();
socketService.socketCreat();

export default socketService
