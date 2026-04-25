import TypeccAdapter from "../../../../logic/adapter/TypeccAdapter";
import type LoginInterface from "../../../../logic/domain/interfaces/LoginInterface";
import Login from "../../../../logic/domain/model/Login";
import useForm from "../../../../logic/hook/useForm";
import type TypeccInterface from "../../../../logic/domain/interfaces/TypeccInterface";
import { useEffect, useState } from "react";

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
      <div>
        <label htmlFor="tipo_documento">Tipo de Documento:</label>
        <select
          id="tipo_documento"
          name="tipo_documento"
          onChange={handleChange}
        >
          {typescc.map((type) => (
            <option key={type.id} value={type.id ?? ""}> 
              {type.nombre}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="identificacion">Identificación:</label>
        <input
          id="identificacion"
          name="identificacion"
          type="text"
          value={form.identificacion}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="clave">Clave:</label>
        <input
          id="clave"
          name="clave"
          type="password"
          value={form.clave}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Ingresar</button>
    </form>
  );
}
