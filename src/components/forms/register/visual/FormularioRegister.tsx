import { useEffect, useState } from "react";
import TypeccAdapter from "../../../../logic/adapter/TypeccAdapter";
import type PacienteInterface from "../../../../logic/domain/interfaces/PacienteInterface";
import Register from "../../../../logic/domain/model/Register";
import useForm from "../../../../logic/hook/useForm";
import type TypeccInterface from "../../../../logic/domain/interfaces/TypeccInterface";
import FormDivText
 from "../../../logics/FormDivText";
import FormDivSelect from "../../../logics/FormDivSelect";

export default function FormularioRegister() {

  const {form, setForm, handleChange, handleSubmit} = useForm<PacienteInterface>(Register,()=>{});
  const [typescc, setTypescc] = useState<TypeccInterface[]>([]);

  useEffect(() => {
    new TypeccAdapter().getAll().then((data) => {
      setTypescc(data);
    });
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <FormDivText nombre="nombre" titulo="Nombre del Procedimiento" id="nombre" type="text" visuals="w-full" value={form.nombre} alcambio={handleChange} />
      <FormDivText nombre="email" titulo="Email" id="email" type="email" visuals="w-full" value={form.email} alcambio={handleChange} />
      <FormDivText nombre="telefono" titulo="Teléfono" id="telefono" type="number" visuals="w-full" value={form.telefono} alcambio={handleChange} />
      <FormDivSelect nombre="tipo_documento" titulo="Tipo de Documento" id="tipo_documento" visuals="w-full" 
                    value={"id"} alcambio={handleChange} iterador={typescc} nombredesignado={"nombre"} />
      <FormDivText nombre="identificacion" titulo="Identificación" id="identificacion" type="text" visuals="w-full" value={form.identificacion} alcambio={handleChange} />
      <FormDivText nombre="clave" titulo="Clave" id="clave" type="password" visuals="w-full" value={form.clave} alcambio={handleChange} />
      <button type="submit">Registrarse</button>
    </form>
  );
}
