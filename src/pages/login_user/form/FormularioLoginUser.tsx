
import FormDivText from "../../../components/logics/FormDivText";
import FormDivSelect from "../../../components/logics/FormDivSelect";
import { Link } from "react-router-dom";
import fnc_formularioLoginUser from "../functions/fnc_formularioLoginUser";

export default function FormularioLoginUser() {
  const fncformularioLoginUser = fnc_formularioLoginUser();

  
  return (
    <form onSubmit={fncformularioLoginUser.handleSubmit} className="w-2xl bg-gray-50/50 p-8 font-bold rounded-lg shadow-md">
      <FormDivSelect nombre="tipo_documento" titulo="Tipo de Documento" id="tipo_documento" visuals="p-1 w-full bg-cyan-100 rounded-lg" 
                    value={"id"} alcambio={fncformularioLoginUser.handleChange} iterador={fncformularioLoginUser.typescc} nombredesignado={"nombre"} />
      <FormDivText nombre="identificacion" titulo="Identificación" id="identificacion" type="text" visuals="p-1 m-1 w-full bg-cyan-100 text-center rounded-lg" value={fncformularioLoginUser.form.identificacion} alcambio={fncformularioLoginUser.handleChange} />
      <FormDivText nombre="clave" titulo="Clave" id="clave" type="password" visuals="p-1 m-1 w-full bg-cyan-100 text-center rounded-lg" value={fncformularioLoginUser.form.clave} alcambio={fncformularioLoginUser.handleChange} />
      {fncformularioLoginUser.errores.map((errormsg) => (<p className=" text-red">{errormsg}</p>))}
      <button type="submit" className=" mt-5 rounded-lg bg-black text-white p-2">Ingresar</button>
      <Link to="/register" className=" mt-5 rounded-lg bg-gray-300 text-black p-2 block text-center">¿No tienes una cuenta? Regístrate aquí</Link>
    
    </form>
  );
}
