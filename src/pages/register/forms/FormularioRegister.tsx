import { useEffect, useState } from "react";
import TypeccAdapter from "../../../services/TypeccAdapter";
import type PacienteInterface from "../../../logic_components/domain/interfaces/PacienteInterface";
import Register from "../../../logic_components/domain/models/Register";
import useForm from "../../../components/hooks/useForm";
import type TypeccInterface from "../../../logic_components/domain/interfaces/TypeccInterface";
import FormDivText
 from "../../../components/logics/FormDivText";
import FormDivSelect from "../../../components/logics/FormDivSelect";

export default function FormularioRegister() {

  const {form, setForm, handleChange, handleSubmit} = useForm<PacienteInterface>(Register,()=>{});
  const [typescc, setTypescc] = useState<TypeccInterface[]>([]);

  useEffect(() => {
    new TypeccAdapter().getAll().then((data) => {
      setTypescc(data);
    }); 
  }, []);

  return (
    <form onSubmit={handleSubmit} className=" w-lg bg-cyan-300/45 p-8 rounded-lg shadow-md">
      <FormDivText nombre="nombre" titulo="Nombre del Paciente" id="nombre" type="text" visuals="p-1 w-full bg-cyan-100 rounded-lg" value={form.nombre} alcambio={handleChange} />
      <FormDivText nombre="email" titulo="Email" id="email" type="email" visuals="p-1 w-full bg-cyan-100 rounded-lg" value={form.email} alcambio={handleChange} />
      <FormDivText nombre="telefono" titulo="Teléfono" id="telefono" type="number" visuals="p-1 w-full bg-cyan-100 rounded-lg" value={form.telefono} alcambio={handleChange} />
      <FormDivSelect nombre="tipo_documento" titulo="Tipo de Documento" id="tipo_documento" visuals="p-1 w-full bg-cyan-100 rounded-lg" 
                    value={"id"} alcambio={handleChange} iterador={typescc} nombredesignado={"nombre"} />
      <FormDivText nombre="identificacion" titulo="Identificación" id="identificacion" type="text" visuals="p-1 w-full bg-cyan-100 rounded-lg" value={form.identificacion} alcambio={handleChange} />
      <FormDivText nombre="clave" titulo="Clave" id="clave" type="password" visuals="p-1 w-full bg-cyan-100 rounded-lg" value={form.clave} alcambio={handleChange} />
      <button type="submit" className=" mt-5 rounded-lg bg-black text-white p-2">Registrarse</button>
    </form>
  );
}
