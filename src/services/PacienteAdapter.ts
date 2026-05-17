import type PacienteInterface from "../interfaces/PacienteInterface";
import backroute from "../enviroments/enviroment";
import { getAuthHeaders, setAuthToken } from "../guards/token";

type LoginResponse = {
    codigo: number;
    mensaje: string;
    data: {
        paciente: PacienteInterface;
        token: string;
    } | null;
};

export default class PacienteAdapter{
    
    getAll(): Promise<Array<PacienteInterface>> {
        return fetch(backroute + '/pacientes', {
            headers: getAuthHeaders()
        })
        .then(response => response.json())
        .then((data: { data: PacienteInterface[] }) => {
                    return data.data;
                })
        .catch(error => {
            console.error('Error fetching Paciente data:', error);
            return [];
        });
    }

    getById(id: number): Promise<PacienteInterface> {
        return fetch(`${backroute}/pacientes/${id}`, {
            headers: getAuthHeaders()
        })
        .then(response => response.json())
        .then((data: { data: PacienteInterface }) => {
            return data.data;
        })
        .catch(error => {
            console.error(`Error fetching Paciente with id ${id}:`, error);
            throw error;
        });
    }

    create(paciente: PacienteInterface): Promise<PacienteInterface> {
        console.log('Creating Paciente:', paciente);
        return fetch(`${backroute}/pacientes`, {
            method: 'POST',
            headers: getAuthHeaders({
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify(paciente)
        })
        .then(response => response.json())
        .then((data: { data: PacienteInterface, codigo: number, mensaje: string }) => {
            data['codigo']!=201 && alert(`Error creating Paciente: ${JSON.stringify(data.mensaje)}`);
            return data.data;
        })
        .catch(error => {
            console.error('Error creating Paciente:', error);
            throw error;
        });
    }

    update(paciente: PacienteInterface): Promise<PacienteInterface> {
        return fetch(`${backroute}/pacientes/`, {
            method: 'PUT',
            headers: getAuthHeaders({
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify(paciente)
        })
        .then(response => response.json())
        .then((data: { data: PacienteInterface }) => {
            return data.data;
        })
        .catch(error => {
            console.error(`Error updating Paciente with id`, error);
            throw error;
        });
    }

    delete(id: number): Promise<void> {
        return fetch(`${backroute}/pacientes/${id}`, {
            method: 'DELETE',
            headers: getAuthHeaders()
        })
        .then(() => {
            return;
        })
        .catch(error => {
            console.error(`Error deleting Paciente with id ${id}:`, error);
            throw error;
        });
    }

    login(identificacion: string, password: string,is_doctor: boolean): Promise<LoginResponse> {
        return fetch(`${backroute}/pacientes/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ identificacion, password,is_doctor })
        })
        .then(response => response.json())
        .then((data: LoginResponse) => {
            if (data.codigo === 200 && data.data?.token) {
                setAuthToken(data.data.token);
            }
            return data;
        })
        .catch(error => {
            console.error('Error during login:', error);
            throw error;
        });
    }



}
