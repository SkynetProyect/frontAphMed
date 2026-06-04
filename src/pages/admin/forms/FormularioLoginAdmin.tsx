import useForm from "../../../components/hooks/useForm";
import FormDivText from "../../../components/logics/FormDivText";
import Login from "../../../models/Login";
import { loginWithBearer } from "../../../guards/auth";
import { useNavigate } from "react-router-dom";
import type LoginInterface from "../../../interfaces/LoginInterface";
import { toast } from "react-hot-toast/headless";

export default function FormularioLoginAdmin() {
  const navigate = useNavigate();
  const iniciarsesion = (login: Login) => {
      console.log("Login data:", login);
      loginWithBearer(login.identificacion, login.clave, true).then((response) => {
          if (response.codigo === 200 && response.data?.paciente?.id) {
              navigate(0);
          } else {
              toast.error(`${response.mensaje}`, {
                duration: 5000,
              });
          }
      });
  }
  const {form, handleChange, handleSubmit} = useForm<LoginInterface>(Login,iniciarsesion);
  
  return (
    <form onSubmit={handleSubmit} className="w-2xl bg-gray-50/50 p-8 font-bold rounded-lg shadow-md">
      <FormDivText nombre="identificacion" titulo="identificacion" id="identificacion" type="text" visuals="p-1 m-1 w-full bg-cyan-100 text-center rounded-lg" value={form.identificacion} alcambio={handleChange} />
      <FormDivText nombre="clave" titulo="Clave" id="clave" type="password" visuals="p-1 m-1 w-full bg-cyan-100 text-center rounded-lg" value={form.clave} alcambio={handleChange} />
      <button type="submit" className=" mt-5 rounded-lg bg-black text-white p-2">Ingresar</button>
    </form>
  );
}
