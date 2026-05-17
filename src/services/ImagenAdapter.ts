import type ImagenInterface from "../interfaces/ImagenInterface";
import backroute from "../enviroments/enviroment";
import { getAuthHeaders } from "../guards/token";

export default class ImagenAdapter {
    getAll(): Promise<Array<ImagenInterface>> {
        return fetch(`${backroute}/imagenes`, {
            headers: getAuthHeaders()
        })
            .then(response => response.json())
            .then((data: { data: ImagenInterface[] }) => data.data)
            .catch(error => {
                console.error('Error fetching Imagen data:', error);
                return [];
            });
    }

    getById(id: number): Promise<ImagenInterface> {
        return fetch(`${backroute}/imagenes/${id}`, {
            headers: getAuthHeaders()
        })
            .then(response => response.json())
            .then((data: { data: ImagenInterface }) => data.data)
            .catch(error => {
                console.error(`Error fetching Imagen with id ${id}:`, error);
                throw error;
            });
    }

    create(
        imagen: ImagenInterface,
        file: File
    ): Promise<ImagenInterface> {

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
            data: ImagenInterface,
            codigo: number,
            mensaje: string
        }) => {

            if (data.codigo != 201) {
                alert(`Error: ${data.mensaje}`);
            }

            return data.data;
        })
        .catch(error => {
            console.error("Error creating Imagen:", error);
            throw error;
        });
    }

    update(imagen: ImagenInterface): Promise<ImagenInterface> {
        return fetch(`${backroute}/imagenes`, {
            method: 'PUT',
            headers: getAuthHeaders({
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify(imagen)
        })
            .then(response => response.json())
            .then((data: { data: ImagenInterface }) => data.data)
            .catch(error => {
                console.error('Error updating Imagen:', error);
                throw error;
            });
    }

    delete(id: number): Promise<void> {
        return fetch(`${backroute}/imagenes/${id}`, {
            method: 'DELETE',
            headers: getAuthHeaders()
        })
            .then(() => {
                return;
            })
            .catch(error => {
                console.error(`Error deleting Imagen with id ${id}:`, error);
                throw error;
            });
    }

    getByProcedimiento(procedimientoId:number): Promise<ImagenInterface[]>{
        return fetch(`${backroute}/imagenes/byProcedimiento/${procedimientoId}`, {
            headers: getAuthHeaders()
        })
        .then(response => response.json())
        .then((data: { data: ImagenInterface[] }) => data.data)
        .catch(error => {
            console.error(`Error fetching Imagen with id ${procedimientoId}:`, error);
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
            console.error(`Error fetching Imagen with id ${id}:`, error);
            throw error;
        });
    }
}
