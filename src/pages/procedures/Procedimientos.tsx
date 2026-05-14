import ProcedimientoList from "./components/ProcedimientoList";
import fnc_procedimientos from "./functions/fnc_procedimientos";


export default function Procedimientos(){
    
    const fncprocedimientos = fnc_procedimientos(1);

    return (
            <table className="min-w-full border-collapse">
                {/* Header */}
                <thead className="bg-gray-50 border-b border-gray-200">
                    <tr>
                        <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">
                            Nombre
                        </th>

                        <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">
                            Descripcion
                        </th>

                        <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">
                            Categoria
                        </th>
                    </tr>
                </thead>

                {/* Body */}
                <tbody className="divide-y divide-gray-100">
                    {fncprocedimientos.procedimientos.map((procedimiento) => (
                        <ProcedimientoList
                            key={procedimiento.id}
                            procedimiento={procedimiento}
                            categorias={fncprocedimientos.categorias}
                        />
                    ))}
                </tbody>
            </table>

    );
}