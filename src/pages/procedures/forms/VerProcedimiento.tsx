import { useEffect, useState } from "react";
import useForm from "../../../components/hooks/useForm";
import type ProcedimientoInterface from "../../../logic_components/domain/interfaces/ProcedimientoInterface";
import Procedimiento from "../../../logic_components/domain/models/Procedimiento";
import FormDivText from "../../../logics/FormDivText";
import FormDivSelect from "../../../logics/FormDivSelect";
import type CategoriaInterface from "../../../logic_components/domain/interfaces/CategoriaInterface";
import type PacienteInterface from "../../../logic_components/domain/interfaces/PacienteInterface";
import Categoria from "../../../logic_components/domain/models/Categoria";
import Paciente from "../../../logic_components/domain/models/Paciente";
import NavMosaico from "../../../mosaicos/NavMosaico";

export default function VerProcedimiento() {

  const {form, handleChange, handleSubmit} = useForm<ProcedimientoInterface>(Procedimiento,()=>{});
  const [categoria, setCategoria] = useState<CategoriaInterface>(new Categoria());
  const [paciente, setPaciente] = useState<PacienteInterface>(new Paciente());

  useEffect(() => {
  
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <FormDivText nombre="nombre" titulo="Nombre del Procedimiento" id="nombre" type="text" visuals="w-full" value={form.nombre} alcambio={handleChange} />
      <FormDivText nombre="categoria_id" titulo="Categoria:" id="categoria_id" type="text" visuals="w-full" value={categoria?.nombre} alcambio={handleChange} disabled={true} />
      <FormDivText nombre="paciente_id" titulo="Paciente:" id="paciente_id" type="text" visuals="w-full" value={paciente?.nombre} alcambio={handleChange} disabled={true} />
      <NavMosaico procedimientoId={form.id ?? 0} />
      <button type="submit">Registrar</button>
    </form>
  );
}