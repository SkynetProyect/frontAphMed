import useForm from "../../../../logic/hook/useForm";
import type LoginDoctorInterface from "../../../../logic/domain/interfaces/LoginDoctorInterface copy";
import LoginDoctor from "../../../../logic/domain/model/LoginDoctor";

export default function FormularioLoginDoctor() {

  const {form, handleChange, handleSubmit} = useForm<LoginDoctorInterface>(LoginDoctor,()=>{});
  
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="usuario">Usuario:</label>
        <input
          id="usuario"
          name="usuario"
          type="text"
          value={form.usuario}
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
