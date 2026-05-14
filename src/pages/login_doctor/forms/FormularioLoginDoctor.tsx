import useForm from "../../../components/hooks/useForm";
import type LoginDoctorInterface from "../../../logic_components/domain/interfaces/LoginDoctorInterface";
import LoginDoctor from "../../../logic_components/domain/models/LoginDoctor";
import FormDivText from "../../../components/logics/FormDivText";

export default function FormularioLoginDoctor() {

  const {form, handleChange, handleSubmit} = useForm<LoginDoctorInterface>(LoginDoctor,()=>{});
  
  return (
    <form onSubmit={handleSubmit} className="w-lg bg-cyan-300/40 p-8 rounded-lg shadow-md">
      <FormDivText nombre="usuario" titulo="Usuario" id="usuario" type="text" visuals="p-1 w-full bg-cyan-100 rounded-lg" value={form.usuario} alcambio={handleChange} />
      <FormDivText nombre="clave" titulo="Clave" id="clave" type="password" visuals="p-1 w-full bg-cyan-100 rounded-lg" value={form.clave} alcambio={handleChange} />
      <button type="submit" className=" mt-5 rounded-lg bg-black text-white p-2">Ingresar</button>
    </form>
  );
}
