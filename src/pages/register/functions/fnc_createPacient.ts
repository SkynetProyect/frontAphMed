import PacienteAdapter from "../../../services/PacienteAdapter";
import type PacienteInterface from "../../../interfaces/PacienteInterface";
import { type NavigateFunction } from "react-router-dom";

export default async function createPacient(
    form: PacienteInterface,
    navigate: NavigateFunction
) {

    const respuesta =
    await new PacienteAdapter().create(form);

    if(respuesta.id){

        alert(
            `Paciente creado con éxito`
        );

        navigate("/login_user");
    }
}