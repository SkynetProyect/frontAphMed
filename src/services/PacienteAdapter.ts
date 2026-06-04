import type PacienteInterface from "../interfaces/PacienteInterface";
import backroute from "../enviroments/enviroment";
import { getAuthHeaders, setAuthToken } from "../guards/token";
import type PaginatedResult from "../interfaces/PaginatedResult"
import showBackendErrors from "./errors/showBackendErrors";

type LoginResponse = {
    codigo: number;
    mensaje: string;
    data: {
        paciente: PacienteInterface;
        token: string;
    } | null;
};

export default class PacienteAdapter{
    
    getAll(page: number = 1, pageSize: number = 10): Promise<PaginatedResult<PacienteInterface>> {
        const headers = getAuthHeaders();
        console.log('Fetching Paciente data with headers:', headers);
        const params = new URLSearchParams({
            page: page.toString(),
            pageSize: pageSize.toString()
        });

        return fetch(`${backroute}/pacientes?${params}`, {
            headers: headers
        })
        .then(response => response.json())
        .then((res: { status: number; message: string; data: PaginatedResult<PacienteInterface> }) => {
            return res.data; // Response.data => PaginatedResult
        })
        .catch(error => {
            console.error('Error fetching Paciente data:', error);
            return {
                data: [],
                total: 0,
                page,
                pageSize,
                totalPages: 0
            };
        });
    }

    getDoctors(): Promise<PacienteInterface[]> {
        const headers = getAuthHeaders();

        return fetch(`${backroute}/pacientes/doctors`, {
            headers: headers,
            cache: 'no-store'
        })
        .then(response => {
            if (response.status === 204 || response.status === 304) {
                // No content / not modified — return empty list
                return { data: [] } as { data: PacienteInterface[] };
            }

            if (!response.ok) {
                throw new Error(`HTTP ${response.status}`);
            }

            return response.json();
        })
        .then((res: { status?: number; message?: string; data: PacienteInterface[] }) => {
            return res.data ?? [];
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
            
            if(data['codigo']!=201) {
                showBackendErrors(data);
                throw new Error(data['mensaje'] || 'Error creating Paciente');
            }

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
            }else{
                showBackendErrors(data);
            }
            return data;
        })
        .catch(error => {
            console.error('Error during login:', error);
            throw error;
        });
    }



}
