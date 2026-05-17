import { useEffect, useState } from "react";
import useForm from "../../../components/hooks/useForm";
import { useParams } from "react-router-dom";


export default function VerProcedimiento() {
  const { id } = useParams();
  
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

    </form>
  );
}