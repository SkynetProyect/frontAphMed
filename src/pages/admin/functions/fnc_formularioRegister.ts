import { useEffect, useState } from "react";
import TypeccAdapter from "../../../services/TypeccAdapter";
import type PacienteInterface from "../../../interfaces/PacienteInterface";
import Register from "../../../models/Register";
import useForm from "../../../components/hooks/useForm";
import type TypeccInterface from "../../../interfaces/TypeccInterface";

export default function useFormularioRegister ({fnc}: {fnc: (form:any) => any}){
    
    const {form, setForm, handleChange, handleSubmit} = useForm<PacienteInterface>(Register, fnc);
    const [typescc, setTypescc] = useState<TypeccInterface[]>([]);
    const visuales:string ="p-1 m-1 w-full bg-cyan-100 text-center rounded-lg";

    useEffect(() => {
    new TypeccAdapter().getAll().then((data) => {
        setTypescc(data);
    }); 
    }, []);

    return {
        form,
        setForm,
        handleChange,
        handleSubmit,
        typescc,
        visuales
    }
    
}