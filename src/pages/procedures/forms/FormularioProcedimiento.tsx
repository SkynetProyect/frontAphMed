import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useForm from "../../../components/hooks/useForm";
import type ProcedimientoInterface from "../../../interfaces/ProcedimientoInterface";
import Procedimiento from "../../../models/Procedimiento";
import FormDivText from "../../../components/logics/FormDivText";
import FormDivSelect from "../../../components/logics/FormDivSelect";
import type CategoriaInterface from "../../../interfaces/CategoriaInterface";
import CategoriaAdapter from "../../../services/CategoriaAdapter";
import ProcedimientoAdapter from "../../../services/ProcedimientoAdapter";

export default function FormularioProcedimiento({id}:{id:number}) {
  const navigate = useNavigate();
  const [categorias, setCategorias] = useState<CategoriaInterface[]>([]);
  const [message, setMessage] = useState<string>("");

  const submitProcedimiento = async (procedimiento: ProcedimientoInterface) => {
    setMessage("");

    try {
      const created = await new ProcedimientoAdapter().create(procedimiento);
      if (!created?.id) {
        setMessage("No se pudo crear el procedimiento. Verifique los datos y vuelva a intentar.");
        return;
      }
      navigate(0);
    } catch (error) {
      console.error("Error creando procedimiento:", error);
      setMessage("Error creando procedimiento. Intente de nuevo más tarde.");
    }
  };
  

  const { form, handleChange,setForm, handleSubmit } = useForm<ProcedimientoInterface>(Procedimiento, submitProcedimiento);
  const visuales:string ="p-1 m-1 w-full bg-cyan-100 text-center rounded-lg";

    
  useEffect(() => {
    new CategoriaAdapter()
      .getAll()
      .then(setCategorias)
      .catch(() => setMessage("No se pudieron cargar las categorías."));
    setForm({
      ...form,
      ["paciente_id"]: id
    });
  }, []);


  return (
    <form onSubmit={handleSubmit} className="w-2xl bg-gray-50/50 p-8 font-bold rounded-lg shadow-md">
      <FormDivText
        nombre="nombre"
        titulo="Nombre del Procedimiento"
        id="nombre"
        type="text"
        visuals={visuales}
        value={form.nombre}
        alcambio={handleChange}
      />

      <FormDivText
        nombre="descripcion"
        titulo="Descripción"
        id="descripcion"
        type="text"
        visuals={visuales}
        value={form.descripcion ?? ""}
        alcambio={handleChange}
      />

      <FormDivSelect
        nombre="categoria_id"
        titulo="Categoría"
        id="categoria_id"
        visuals={visuales}
        value="id"
        alcambio={handleChange}
        iterador={categorias}
        nombredesignado="nombre"
      />

      {message && <p className="text-sm text-red-600">{message}</p>}

      <button type="submit" className="rounded bg-cyan-600 px-4 py-2 text-white">
        Registrar
      </button>
    </form>
  );
}
