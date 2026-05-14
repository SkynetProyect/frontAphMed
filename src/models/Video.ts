import type VideoInterface from "../interfaces/VideoInterface";
export default class Video implements VideoInterface{
    id?: number;
    url: string = "";
}