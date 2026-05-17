import type DocumentoInterface from "../interfaces/DocumentoInterface";
import backroute from "../enviroments/enviroment";

export default class DocumentoAdapter {
    getAll(): Promise<Array<DocumentoInterface>> {
        return fetch(`${backroute}/documentos`)
            .then(response => response.json())
            .then((data: { data: DocumentoInterface[] }) => data.data)
            .catch(error => {
                console.error('Error fetching Documento data:', error);
                return [];
            });
    }

    getById(id: number): Promise<DocumentoInterface> {
        return fetch(`${backroute}/documentos/${id}`)
            .then(response => response.json())
            .then((data: { data: DocumentoInterface }) => data.data)
            .catch(error => {
                console.error(`Error fetching Documento with id ${id}:`, error);
                throw error;
            });
    }

    create(documento: DocumentoInterface): Promise<DocumentoInterface> {
        console.log('Creating Documento:', documento);
        return fetch(`${backroute}/documentos`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(documento)
        })
            .then(response => response.json())
            .then((data: { data: DocumentoInterface, codigo: number, mensaje: string }) => {
                data['codigo'] != 201 && alert(`Error creating Documento: ${JSON.stringify(data.mensaje)}`);
                return data.data;
            })
            .catch(error => {
                console.error('Error creating Documento:', error);
                throw error;
            });
    }

    update(documento: DocumentoInterface): Promise<DocumentoInterface> {
        return fetch(`${backroute}/documentos`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
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
            method: 'DELETE'
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
        return fetch(`${backroute}/imagenes/byProcedimiento/${id}`)
        .then(response => response.json())
        .then((data: { data: DocumentoInterface[] }) => data.data)
        .catch(error => {
            console.error(`Error fetching Imagen with id ${id}:`, error);
            throw error;
        });
    }
}
