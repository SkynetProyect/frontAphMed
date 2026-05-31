import PacienteAdapter from "../services/PacienteAdapter";
import type PacienteInterface from "../interfaces/PacienteInterface";
import { setAuthToken, setUserRole } from "./token";

export type LoginResponse = {
    codigo: number;
    mensaje: string;
    data: {
        paciente: PacienteInterface;
        token: string;
    } | null;
};

export const loginWithBearer = async (identificacion: string, password: string,is_doctor: boolean): Promise<LoginResponse> => {
    const adapter = new PacienteAdapter();
    const response = await adapter.login(identificacion, password,is_doctor);

    if (response && response.codigo === 200 && response.data?.token) {
        setAuthToken(response.data.token);
        setUserRole(response.data.paciente.is_doctor);
    }

    return response;
};
