import type TypeccInterface from "../interfaces/TypeccInterface";
import  backroute  from '../enviroments/enviroment.ts';

export default class TypeccAdapter{
    
    getAll(): Promise<Array<TypeccInterface>> {
        const url = `${backroute}/tipocedulas/`;
        return fetch(url)
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