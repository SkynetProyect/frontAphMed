import TypeccAdapter from "../../../../logic/adapter/TypeccAdapter";
import type LoginInterface from "../../../../logic/domain/interfaces/LoginInterface";
import Login from "../../../../logic/domain/model/Login";
import useForm from "../../../../logic/hook/useForm";
import type TypeccInterface from "../../../../logic/domain/interfaces/TypeccInterface";
import { useEffect, useState } from "react";
import FormDivText from "../../../logics/FormDivText";
import FormDivSelect from "../../../logics/FormDivSelect";

export default function FormularioLoginUser() {

  const {form, setForm, handleChange, handleSubmit} = useForm<LoginInterface>(Login,()=>{});
  const [typescc, setTypescc] = useState<TypeccInterface[]>([]);

  useEffect(() => {
    new TypeccAdapter().getAll().then((data) => {
      setTypescc(data);
    });
  }, []);
  
  return (
    <form onSubmit={handleSubmit}>
      <FormDivSelect nombre="tipo_documento" titulo="Tipo de Documento" id="tipo_documento" visuals="w-full" 
                    value={"id"} alcambio={handleChange} iterador={typescc} nombredesignado={"nombre"} />
      <FormDivText nombre="identificacion" titulo="Identificación" id="identificacion" type="text" visuals="w-full" value={form.identificacion} alcambio={handleChange} />
      <FormDivText nombre="clave" titulo="Clave" id="clave" type="password" visuals="w-full" value={form.clave} alcambio={handleChange} />
      <button type="submit">Ingresar</button>
    </form>
  );
}
