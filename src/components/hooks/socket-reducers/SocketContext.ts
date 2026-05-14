import { createContext } from "react";
import { Socket } from "socket.io-client";

export interface ISocketContextState{
    socket: Socket | undefined;
    uid: string;
}

export const defaultSocketContextState: ISocketContextState = {
    socket: undefined,
    uid: ""
};

export type TSocketContextAction = 'update_socket' | 
    'update_uid' ;

export type TSocketContextPayload = Socket | string;

export interface ISocketContextAction{
    type: TSocketContextAction;
    payload: TSocketContextPayload;
}

export const socketContextReducer = (state: ISocketContextState,
     action: ISocketContextAction) => {
        console.log("Reducer SocketContext: ", action);
    switch (action.type) {
        case 'update_socket':
            return { ...state, socket: action.payload as Socket };
        case 'update_uid':
            return { ...state, uid: action.payload as string };
        default:
            return { ...state };
    }
};

export interface ISocketContextProps {
    SocketState: ISocketContextState;
    SocketDispatch: React.Dispatch<ISocketContextAction>;
}

export const SocketContext = createContext<ISocketContextProps>({
    SocketState: defaultSocketContextState,
    SocketDispatch: () => {}
});

export const SocketContextConsumer = SocketContext.Consumer;
export const SocketContextProvider = SocketContext.Provider;