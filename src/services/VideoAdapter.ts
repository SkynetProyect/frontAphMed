import type VideoInterface from "../interfaces/VideoInterface";
import backroute from "../enviroments/enviroment";
import { getAuthHeaders } from "../guards/token";

export default class VideoAdapter {
    getAll(): Promise<Array<VideoInterface>> {
        return fetch(`${backroute}/videos`, {
            headers: getAuthHeaders()
        })
            .then(response => response.json())
            .then((data: { data: VideoInterface[] }) => data.data)
            .catch(error => {
                console.error('Error fetching Video data:', error);
                return [];
            });
    }

    getById(id: number): Promise<VideoInterface> {
        return fetch(`${backroute}/videos/${id}`, {
            headers: getAuthHeaders()
        })
            .then(response => response.json())
            .then((data: { data: VideoInterface }) => data.data)
            .catch(error => {
                console.error(`Error fetching Video with id ${id}:`, error);
                throw error;
            });
    }

    create(
        video: VideoInterface,
        file: File
    ): Promise<VideoInterface> {

        const formData = new FormData();

        // 📌 archivo
        formData.append("file", file);

        // 📌 objeto como JSON string
        formData.append(
            "data",
            JSON.stringify(video)
        );

        return fetch(`${backroute}/videos`, {
            method: "POST",
            headers: getAuthHeaders(),
            body: formData
        })
        .then(res => res.json())
        .then((data: {
            data: VideoInterface,
            codigo: number,
            mensaje: string
        }) => {

            if (data.codigo != 201) {
                alert(`Error: ${data.mensaje}`);
            }
            alert('Subida correctamente');
            return data.data;
        })
        .catch(error => {
            console.error("Error creating VideoInt error");
            throw error;
        });
    }

    update(video: VideoInterface): Promise<VideoInterface> {
        return fetch(`${backroute}/videos`, {
            method: 'PUT',
            headers: getAuthHeaders({
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify(video)
        })
            .then(response => response.json())
            .then((data: { data: VideoInterface }) => data.data)
            .catch(error => {
                console.error('Error updating Video:', error);
                throw error;
            });
    }

    delete(id: number): Promise<void> {
        return fetch(`${backroute}/videos/${id}`, {
            method: 'DELETE',
            headers: getAuthHeaders()
        })
            .then(() => {
                return;
            })
            .catch(error => {
                console.error(`Error deleting Video with id ${id}:`, error);
                throw error;
            });
    }

    getByProcedimiento(id:number): Promise<VideoInterface[]>{
        return fetch(`${backroute}/videos/byProcedimiento/${id}`, {
            headers: getAuthHeaders()
        })
        .then(response => response.json())
        .then((data: { data: VideoInterface[] }) => data.data)
        .catch(error => {
            console.error(`Error fetching Imagen with id ${id}:`, error);
            throw error;
        });
    }

    deleteByProcedimiento(id:number): Promise<Object>{
        return fetch(`${backroute}/videos/byProcedimiento/${id}`, {
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
