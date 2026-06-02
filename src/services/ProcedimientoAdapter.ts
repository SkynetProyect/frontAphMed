import type ProcedimientoInterface from "../interfaces/ProcedimientoInterface";
import backroute from "../enviroments/enviroment";
import { getAuthHeaders } from "../guards/token";
import showBackendErrors from "./errors/showBackendErrors";

export default class ProcedimientoAdapter{
    
    getAll(): Promise<Array<ProcedimientoInterface>> {
        return fetch(backroute + '/procedimientos', {
            headers: getAuthHeaders()
        })
        .then(response => response.json())
        .then((data: { data: ProcedimientoInterface[] }) => {
                    return data.data;
                })
        .catch(error => {
            console.error('Error fetching Procedimiento data:', error);
            return [];
        });
    }

    getById(id: number): Promise<ProcedimientoInterface> {
        return fetch(`${backroute}/procedimientos/${id}`, {
            headers: getAuthHeaders()
        })
        .then(response => response.json())
        .then((data: { data: ProcedimientoInterface }) => {
            return data.data;
        })
        .catch(error => {
            console.error(`Error fetching Procedimiento with id ${id}:`, error);
            throw error;
        });
    }

    create(procedimiento: ProcedimientoInterface): Promise<ProcedimientoInterface> {
        procedimiento.categoria_id = Number(procedimiento.categoria_id);
        return fetch(`${backroute}/procedimientos`, {
            method: 'POST',
            headers: getAuthHeaders({
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify(procedimiento)
        })
        .then(response => response.json())
        .then((data: { data: ProcedimientoInterface, codigo: number, mensaje: string }) => {
            if(data['codigo']!=201){
                showBackendErrors(data);
                throw new Error(data['mensaje']);}
            return data.data;
        })
        .catch(error => {
            console.error('Error creating Procedimiento:', error);
            throw error;
        });
    }

    async update(objeto: ProcedimientoInterface): Promise<ProcedimientoInterface> {
        objeto.categoria_id = Number(objeto.categoria_id);
        console.log('Updating Procedimiento:', objeto);
        return await fetch(`${backroute}/procedimientos/`, {
            method: 'PUT',
            headers: getAuthHeaders({
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify(objeto)
        })
        .then(response => response.json())
        .then((data: { data: ProcedimientoInterface }) => {
            return data.data;
        })
        .catch(error => {
            console.error(`Error updating Procedimiento with id`, error);
            throw error;
        });
    }

    delete(id: number): Promise<void> {
        return fetch(`${backroute}/procedimientos/${id}`, {
            method: 'DELETE',
            headers: getAuthHeaders()
        })
        .then(() => {
            return;
        })
        .catch(error => {
            console.error(`Error deleting Procedimiento with id ${id}:`, error);
            throw error;
        });
    }

    getByPaciente(paciente_id: number): Promise<Array<ProcedimientoInterface>> {
        return fetch(`${backroute}/procedimientos/paciente/${paciente_id}`, {
            headers: getAuthHeaders()
        })
        .then(response => response.json())
        .then((data: { data: ProcedimientoInterface[] }) => {
            return data.data;
        })
        .catch(error => {
            console.error(`Error fetching Procedimientos for paciente_id ${paciente_id}:`, error);
            return [];
        });
    }


}
