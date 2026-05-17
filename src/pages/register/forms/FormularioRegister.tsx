import FormDivText from "../../../components/logics/FormDivText";
import FormDivSelect from "../../../components/logics/FormDivSelect";
import useFormularioRegister from "../functions/fnc_formularioRegister";



export default function FormularioRegister({fnc}: {fnc: (form:any) => any}) {

  const formularioRegister = useFormularioRegister({fnc});

  return (
    <form onSubmit={formularioRegister.handleSubmit} className="w-2xl bg-gray-50/50 p-8 font-bold rounded-lg shadow-md">
      <FormDivText nombre="nombre" titulo="Nombre del Paciente" id="nombre" type="text" visuals={formularioRegister.visuales} value={formularioRegister.form.nombre} alcambio={formularioRegister.handleChange} />
      <FormDivText nombre="email" titulo="Email" id="email" type="email" visuals={formularioRegister.visuales} value={formularioRegister.form.email} alcambio={formularioRegister.handleChange} />
      <FormDivText nombre="telefono" titulo="Teléfono" id="telefono" type="number" visuals={formularioRegister.visuales} value={formularioRegister.form.telefono} alcambio={formularioRegister.handleChange} />
      <FormDivSelect nombre="tipo_documento" titulo="Tipo de Documento" id="tipo_documento" visuals={formularioRegister.visuales} 
                    value={"id"} alcambio={formularioRegister.handleChange} iterador={formularioRegister.typescc} nombredesignado={"nombre"} />
      <FormDivText nombre="identificacion" titulo="Identificación" id="identificacion" type="text" visuals={formularioRegister.visuales} value={formularioRegister.form.identificacion} alcambio={formularioRegister.handleChange} />
      <FormDivText nombre="clave" titulo="Clave" id="clave" type="password" visuals={formularioRegister.visuales} value={formularioRegister.form.clave} alcambio={formularioRegister.handleChange} />
      <button type="submit" className=" cursor-pointer mt-5 rounded-lg bg-black text-white p-2">Registrar</button>
    </form>
  );
}
