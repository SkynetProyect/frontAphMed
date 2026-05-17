import type VideoInterface from "../interfaces/VideoInterface";
import backroute from "../enviroments/enviroment";

export default class VideoAdapter {
    getAll(): Promise<Array<VideoInterface>> {
        return fetch(`${backroute}/videos`)
            .then(response => response.json())
            .then((data: { data: VideoInterface[] }) => data.data)
            .catch(error => {
                console.error('Error fetching Video data:', error);
                return [];
            });
    }

    getById(id: number): Promise<VideoInterface> {
        return fetch(`${backroute}/videos/${id}`)
            .then(response => response.json())
            .then((data: { data: VideoInterface }) => data.data)
            .catch(error => {
                console.error(`Error fetching Video with id ${id}:`, error);
                throw error;
            });
    }

    create(video: VideoInterface): Promise<VideoInterface> {
        console.log('Creating Video:', video);
        return fetch(`${backroute}/videos`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(video)
        })
            .then(response => response.json())
            .then((data: { data: VideoInterface, codigo: number, mensaje: string }) => {
                data['codigo'] != 201 && alert(`Error creating Video: ${JSON.stringify(data.mensaje)}`);
                return data.data;
            })
            .catch(error => {
                console.error('Error creating Video:', error);
                throw error;
            });
    }

    update(video: VideoInterface): Promise<VideoInterface> {
        return fetch(`${backroute}/videos`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
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
            method: 'DELETE'
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
        return fetch(`${backroute}/imagenes/byProcedimiento/${id}`)
        .then(response => response.json())
        .then((data: { data: VideoInterface[] }) => data.data)
        .catch(error => {
            console.error(`Error fetching Imagen with id ${id}:`, error);
            throw error;
        });
    }

}
