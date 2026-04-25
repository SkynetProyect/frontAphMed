import type TypeccInterface from "../domain/interfaces/TypeccInterface";

export default class TypeccAdapter{
    
    getAll(): Promise<Array<TypeccInterface>> {
        return fetch('http://localhost:8080/api/v1/typecc')
        .then(response => response.json())
        .then((data: TypeccInterface[]) => {
            return data;
        })
        .catch(error => {
            console.error('Error fetching Typecc data:', error);
            return [];
        });
    }

}