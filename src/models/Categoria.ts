import type CategoriaInterface from "../interfaces/CategoriaInterface";
export default class Categoria implements CategoriaInterface{
    id?: number;
    nombre: string = "";
}