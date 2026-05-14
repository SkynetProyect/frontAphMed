import useForm from "../../../components/hooks/useForm";
import type LoginDoctorInterface from "../../../interfaces/LoginDoctorInterface";
import LoginDoctor from "../../../models/LoginDoctor";
import FormDivText from "../../../components/logics/FormDivText";

export default function FormularioLoginDoctor() {

  const {form, handleChange, handleSubmit} = useForm<LoginDoctorInterface>(LoginDoctor,()=>{});
  
  return (
    <form onSubmit={handleSubmit} className="w-2xl bg-gray-50/50 p-8 font-bold rounded-lg shadow-md">
      <FormDivText nombre="usuario" titulo="Usuario" id="usuario" type="text" visuals="p-1 m-1 w-full bg-cyan-100 text-center rounded-lg" value={form.usuario} alcambio={handleChange} />
      <FormDivText nombre="clave" titulo="Clave" id="clave" type="password" visuals="p-1 m-1 w-full bg-cyan-100 text-center rounded-lg" value={form.clave} alcambio={handleChange} />
      <button type="submit" className=" mt-5 rounded-lg bg-black text-white p-2">Ingresar</button>
    </form>
  );
}
