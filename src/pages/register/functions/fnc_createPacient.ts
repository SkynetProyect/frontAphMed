import PacienteAdapter from "../../../services/PacienteAdapter";
import type PacienteInterface from "../../../interfaces/PacienteInterface";

export default async function createPacient(form: PacienteInterface) {
    const respuesta = await new PacienteAdapter().create(form);
    respuesta.id && alert(`Paciente creado con éxito: ${JSON.stringify(respuesta)}`);
    //ahora de aqui lo puedo redireccionar a la pagina de login o a la pagina de inicio, dependiendo de lo que se quiera hacer
}