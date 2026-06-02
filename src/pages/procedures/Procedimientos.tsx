import { useParams } from "react-router-dom";
import ProcedimientoList from "./components/ProcedimientoList";
import useProcedimientos from "./functions/fnc_procedimientos";
import CButton from "../../components/logics/CButton";
import FormularioProcedimiento from "./forms/FormularioProcedimiento";
import Popup from "reactjs-popup";
import { getUserRole } from "../../guards/token";


export default function Procedimientos({ idpatient }: Readonly<{ idpatient?: number }>) {
    const isDoctor = getUserRole();
    const params = useParams();
    const patientId = idpatient ?? Number.parseInt(params.id ?? "0", 10);
    //* react functions separated */
    const fncprocedimientos = useProcedimientos(patientId);
    console.log(fncprocedimientos.procedimientos);
    //* variables with visual repetitive content */
    const table_column_visuals = "px-6 py-4 text-left text-xs font-semibold uppercase tracking-wide text-gray-500";
    const table_main_visual = "min-w-full border-collapse";

    return (
    <>
        <div className="max-h-[70vh] overflow-y-auto border rounded-lg">
            
            <table className={table_main_visual}>
                
                {/* Header */}
                <thead className="bg-gray-50 border-b border-gray-200 sticky top-0 z-10">
                    <tr>
                        <th className={table_column_visuals}>
                            Nombre
                        </th>

                        <th className={table_column_visuals}>
                            Descripcion
                        </th>

                        <th className={table_column_visuals}>
                            Categoria
                        </th>
                    </tr>
                </thead>

                {/* Body */}
                <tbody className="divide-y divide-gray-100">
                    {fncprocedimientos.procedimientos.map((procedimiento) => {
                        const categoryName =
                            fncprocedimientos.categorias.find(
                                (cate) => cate.id == procedimiento.categoria_id
                            )!.nombre;

                        return (
                            <ProcedimientoList
                                key={procedimiento.id}
                                procedimiento={procedimiento}
                                categoriaName={categoryName}
                            />
                        );
                    })}
                </tbody>

            </table>

        </div>

        {isDoctor && (
            <Popup trigger={<CButton text="Agregar" />} modal nested>
                <FormularioProcedimiento id={patientId} />
            </Popup>
        )}
    </>
);
}