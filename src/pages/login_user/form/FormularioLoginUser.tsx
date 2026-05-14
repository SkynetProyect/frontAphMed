import TypeccAdapter from "../../../services/TypeccAdapter";
import type LoginInterface from "../../../interfaces/LoginInterface";
import Login from "../../../models/Login";
import useForm from "../../../components/hooks/useForm";
import type TypeccInterface from "../../../interfaces/TypeccInterface";
import { useEffect, useState } from "react";
import FormDivText from "../../../components/logics/FormDivText";
import FormDivSelect from "../../../components/logics/FormDivSelect";

export default function FormularioLoginUser() {

  const {form, setForm, handleChange, handleSubmit} = useForm<LoginInterface>(Login,()=>{});
  const [typescc, setTypescc] = useState<TypeccInterface[]>([]);

  useEffect(() => {
    new TypeccAdapter().getAll().then((data) => {
      setTypescc(data);
    });
  }, []);
  
  return (
    <form onSubmit={handleSubmit} className="w-2xl bg-gray-50/50 p-8 font-bold rounded-lg shadow-md">
      <FormDivSelect nombre="tipo_documento" titulo="Tipo de Documento" id="tipo_documento" visuals="p-1 w-full bg-cyan-100 rounded-lg" 
                    value={"id"} alcambio={handleChange} iterador={typescc} nombredesignado={"nombre"} />
      <FormDivText nombre="identificacion" titulo="Identificación" id="identificacion" type="text" visuals="p-1 m-1 w-full bg-cyan-100 text-center rounded-lg" value={form.identificacion} alcambio={handleChange} />
      <FormDivText nombre="clave" titulo="Clave" id="clave" type="password" visuals="p-1 m-1 w-full bg-cyan-100 text-center rounded-lg" value={form.clave} alcambio={handleChange} />
      <button type="submit" className=" mt-5 rounded-lg bg-black text-white p-2">Ingresar</button>
    </form>
  );
}
