import type SocketUpdateInterface from "../interfaces/SocketUpdateInterface";

export default class SocketUpdate implements SocketUpdateInterface {
    patientid: number = 0;
    procedureid: number = 0;
    objectupdated: string = "";
    idobject: number = 0;
}