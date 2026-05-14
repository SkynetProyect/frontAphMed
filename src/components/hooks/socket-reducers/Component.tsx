import React, { useEffect, useReducer, useState, type PropsWithChildren } from "react";
import { defaultSocketContextState, SocketContextProvider, socketContextReducer } from "./SocketContext";
import { useSocket } from "../useSocket";
import { Socket } from "socket.io-client";
import type SocketUpdateInterface from "../../../interfaces/SocketUpdateInterface";

export interface ISocketContextComponentProps extends PropsWithChildren{}

const SocketContextComponent: React.FC<ISocketContextComponentProps> = 
(props) => {
    const {children} = props;
    const [SocketState, SocketDispatch] = useReducer(socketContextReducer, defaultSocketContextState);
    const [loading, setLoading] = useState(true);

    const socket = useSocket("ws://localhost:3000",{
        reconnectionAttempts: 5,
        reconnectionDelay: 2000,
        autoConnect: true,
    });

    const StartListener = () => {

        socket.io.on("reconnect", (attempt) => {
            console.log("Socket try reconnect: " + attempt);
        });

        socket.io.on("reconnect_attempt", (attempt) => {
            console.log("Socket reconnect attempt: " + attempt);
        });

        socket.io.on("reconnect_error", (error) => {
            console.log("Socket reconnect error: ", error);
        });

        socket.io.on("reconnect_failed", () => {
            console.log("Socket reconnect failed");
            alert('No se pudo conectar al servidor de WebSocket después de varios intentos. Por favor, inténtalo de nuevo más tarde.');
        });

    };
    const SendHandshake = () => {
        console.info('Enviando handshake al servidor de WebSocket...');
        socket.emit("handshake", (uid: string) => {
            console.info('Handshake recibido del servidor de WebSocket. UID:', uid);
            SocketDispatch({ type: 'update_uid', payload: uid });
            setLoading(false);
        });
    };

    useEffect(() => {
        /** connect to socket */
        socket.connect();
        /** save socket to context */
        SocketDispatch({ type: 'update_socket', payload: socket });
        /** listen to socket events */
        StartListener();
        /** send handshake to server */
        SendHandshake();
        

    }, [socket]);

    if(loading)return(<p>Loading...</p>);
    return(<SocketContextProvider 
    value={{
        SocketState,
        SocketDispatch
    }}>
         {children}
    </SocketContextProvider>);
};

export default SocketContextComponent;