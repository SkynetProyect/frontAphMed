import type TypeccInterface from "../interfaces/TypeccInterface";
import  backroute  from '../enviroments/enviroment.ts';
import { getAuthHeaders } from "../guards/token";

export default class TypeccAdapter{
    
    getAll(): Promise<Array<TypeccInterface>> {
        const url = `${backroute}/tipocedulas/`;
        return fetch(url, {
            headers: getAuthHeaders()
        })
        .then(response => response.json())
        .then((data: { data: TypeccInterface[] }) => {
            return data.data;
        })
        .catch(error => {
            console.error('Error fetching Typecc data:', error);
            return [];
        });
    }

}