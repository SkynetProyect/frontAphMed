import type CategoriaInterface from "../interfaces/CategoriaInterface";
import backroute from "../enviroments/enviroment";

export default class CategoriaAdapter {
    getAll(): Promise<Array<CategoriaInterface>> {
        return fetch(`${backroute}/categorias`)
            .then(response => response.json())
            .then((data: { data: CategoriaInterface[] }) => data.data)
            .catch(error => {
                console.error('Error fetching Categoria data:', error);
                return [];
            });
    }

    getById(id: number): Promise<CategoriaInterface> {
        return fetch(`${backroute}/categorias/${id}`)
            .then(response => response.json())
            .then((data: { data: CategoriaInterface }) => data.data)
            .catch(error => {
                console.error(`Error fetching Categoria with id ${id}:`, error);
                throw error;
            });
    }

    create(categoria: CategoriaInterface): Promise<CategoriaInterface> {
        console.log('Creating Categoria:', categoria);
        return fetch(`${backroute}/categorias`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(categoria)
        })
            .then(response => response.json())
            .then((data: { data: CategoriaInterface, codigo: number, mensaje: string }) => {
                data['codigo'] != 201 && alert(`Error creating Categoria: ${JSON.stringify(data.mensaje)}`);
                return data.data;
            })
            .catch(error => {
                console.error('Error creating Categoria:', error);
                throw error;
            });
    }

    update(categoria: CategoriaInterface): Promise<CategoriaInterface> {
        return fetch(`${backroute}/categorias`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(categoria)
        })
            .then(response => response.json())
            .then((data: { data: CategoriaInterface }) => data.data)
            .catch(error => {
                console.error('Error updating Categoria:', error);
                throw error;
            });
    }

    delete(id: number): Promise<void> {
        return fetch(`${backroute}/categorias/${id}`, {
            method: 'DELETE'
        })
            .then(() => {
                return;
            })
            .catch(error => {
                console.error(`Error deleting Categoria with id ${id}:`, error);
                throw error;
            });
    }
}
