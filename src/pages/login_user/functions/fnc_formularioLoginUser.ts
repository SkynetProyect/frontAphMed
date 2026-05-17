
import TypeccAdapter from "../../../services/TypeccAdapter";
import type LoginInterface from "../../../interfaces/LoginInterface";
import Login from "../../../models/Login";
import useForm from "../../../components/hooks/useForm";
import type TypeccInterface from "../../../interfaces/TypeccInterface";
import { useEffect, useState } from "react";
import PacienteAdapter from "../../../services/PacienteAdapter";
import { useNavigate } from "react-router-dom";

export default function fnc_formularioLoginUser() {
    const navigate = useNavigate(); 
    const [ errores, setErrores ] = useState<String []>([]);
    const iniciarsesion = (login: Login) => {
        console.log("Login data:", login);
        new PacienteAdapter().login(login.identificacion, login.clave).then((response) => {
            if (response.codigo == 200) {
                navigate("/procedimientos/"+response.data.id); 
            }
            else{
                setErrores([response.mensaje]);
            }
        });
        
    }

    const {form, setForm, handleChange, handleSubmit} = useForm<LoginInterface>(Login,iniciarsesion);
    const [typescc, setTypescc] = useState<TypeccInterface[]>([]);

    useEffect(() => {
    new TypeccAdapter().getAll().then((data) => {
        setTypescc(data);
    });
    }, []);

    return { form,typescc, setForm, handleChange, handleSubmit, errores};
}