import { useEffect, useState } from "react";
import TypeccAdapter from "../../../../logic/adapter/TypeccAdapter";
import type RegisterInterface from "../../../../logic/domain/interfaces/RegisterInterface";
import Register from "../../../../logic/domain/model/Register";
import useForm from "../../../../logic/hook/useForm";
import type TypeccInterface from "../../../../logic/domain/interfaces/TypeccInterface";

export default function FormularioRegister() {

  const {form, setForm, handleChange, handleSubmit} = useForm<RegisterInterface>(Register,()=>{});
  const [typescc, setTypescc] = useState<TypeccInterface[]>([]);

  useEffect(() => {
    new TypeccAdapter().getAll().then((data) => {
      setTypescc(data);
    });
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="nombre">Nombre:</label>
        <input
          id="nombre"
          type="text"
          name="nombre"
          value={form.nombre}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="telefono">Teléfono:</label>
        <input
          id="telefono"
          name="telefono"
          type="number"
          value={form.telefono}
          onChange={handleChange}
        />
      </div>
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
      <button type="submit">Registrarse</button>
    </form>
  );
}
