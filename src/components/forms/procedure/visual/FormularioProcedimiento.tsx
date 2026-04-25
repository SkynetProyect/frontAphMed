import { useEffect, useState } from "react";
import useForm from "../../../../logic/hook/useForm";
import type ProcedimientoInterface from "../../../../logic/domain/interfaces/ProcedimientoInterface";
import Procedimiento from "../../../../logic/domain/model/Procedimiento";
import FormDivText from "../../../logics/FormDivText";
import FormDivSelect from "../../../logics/FormDivSelect";
import type CategoriaInterface from "../../../../logic/domain/interfaces/CategoriaInterface";
import type PacienteInterface from "../../../../logic/domain/interfaces/PacienteInterface";

export default function FormularioProcedimiento() {

  const {form, handleChange, handleSubmit} = useForm<ProcedimientoInterface>(Procedimiento,()=>{});
  const [categoria, setCategoria] = useState<CategoriaInterface[]>([]);
  const [paciente, setPaciente] = useState<PacienteInterface[]>([]);

  useEffect(() => {
  
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <FormDivText nombre="nombre" titulo="Nombre del Procedimiento" id="nombre" type="text" visuals="w-full" value={form.nombre} alcambio={handleChange} />

      <FormDivSelect nombre="categoria_id" titulo="Categoria:" id="categoria_id" visuals="w-full" 
                    value={"id"} alcambio={handleChange} iterador={categoria} nombredesignado={"nombre"} />
      <FormDivSelect nombre="paciente_id" titulo="Paciente:" id="paciente_id" visuals="w-full" 
                    value={"id"} alcambio={handleChange} iterador={paciente} nombredesignado={"nombre"} />
      
      <button type="submit">Registrar</button>
    </form>
  );
}
