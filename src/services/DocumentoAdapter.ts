import type DocumentoInterface from "../interfaces/DocumentoInterface";
import backroute from "../enviroments/enviroment";
import { getAuthHeaders } from "../guards/token";

export default class DocumentoAdapter {
    getAll(): Promise<Array<DocumentoInterface>> {
        return fetch(`${backroute}/documentos`, {
            headers: getAuthHeaders()
        })
            .then(response => response.json())
            .then((data: { data: DocumentoInterface[] }) => data.data)
            .catch(error => {
                console.error('Error fetching Documento data:', error);
                return [];
            });
    }

    getById(id: number): Promise<DocumentoInterface> {
        return fetch(`${backroute}/documentos/${id}`, {
            headers: getAuthHeaders()
        })
            .then(response => response.json())
            .then((data: { data: DocumentoInterface }) => data.data)
            .catch(error => {
                console.error(`Error fetching Documento with id ${id}:`, error);
                throw error;
            });
    }

    create(
        imagen: DocumentoInterface,
        file: File
    ): Promise<DocumentoInterface> {

        const formData = new FormData();

        // 📌 archivo
        formData.append("file", file);

        // 📌 objeto como JSON string
        formData.append(
            "data",
            JSON.stringify(imagen)
        );

        return fetch(`${backroute}/imagenes`, {
            method: "POST",
            headers: getAuthHeaders(),
            body: formData
        })
        .then(res => res.json())
        .then((data: {
            data: DocumentoInterface,
            codigo: number,
            mensaje: string
        }) => {

            if (data.codigo != 201) {
                alert(`Error: ${data.mensaje}`);
            }

            return data.data;
        })
        .catch(error => {
            console.error("Error creating DocumentoInt error");
            throw error;
        });
    }

    update(documento: DocumentoInterface): Promise<DocumentoInterface> {
        return fetch(`${backroute}/documentos`, {
            method: 'PUT',
            headers: getAuthHeaders({
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify(documento)
        })
            .then(response => response.json())
            .then((data: { data: DocumentoInterface }) => data.data)
            .catch(error => {
                console.error('Error updating Documento:', error);
                throw error;
            });
    }

    delete(id: number): Promise<void> {
        return fetch(`${backroute}/documentos/${id}`, {
            method: 'DELETE',
            headers: getAuthHeaders()
        })
            .then(() => {
                return;
            })
            .catch(error => {
                console.error(`Error deleting Documento with id ${id}:`, error);
                throw error;
            });
    }

    getByProcedimiento(id:number): Promise<DocumentoInterface[]>{
        return fetch(`${backroute}/imagenes/byProcedimiento/${id}`, {
            headers: getAuthHeaders()
        })
        .then(response => response.json())
        .then((data: { data: DocumentoInterface[] }) => data.data)
        .catch(error => {
            console.error(`Error fetching DocumentoIntth id ${id}:`, error);
            throw error;
        });
    }

    deleteByProcedimiento(id:number): Promise<Object>{
        return fetch(`${backroute}/imagenes/byProcedimiento/${id}`, {
            method: 'DELETE',
            headers: getAuthHeaders()
        })
        .then(response => response.json())
        .then((data: { data: boolean }) => data.data)
        .catch(error => {
            console.error(`Error fetching DocumentoIntth id ${id}:`, error);
            throw error;
        });
    }
}
