import { useState } from "react";
import type ProcedimientoInterface from "../../../interfaces/ProcedimientoInterface";
import type CategoriaInterface from "../../../interfaces/CategoriaInterface";

export default function ProcedimientoList({ procedimiento, categorias }: { procedimiento: ProcedimientoInterface; categorias: CategoriaInterface[] }) {
    const [categoria, setOpen] = useState<CategoriaInterface>(categorias.find((cat) => cat.id === procedimiento.categoria_id) || { id: 0, nombre: "Sin categoria" });

    return (

        <tr className="cursor-pointer border-b border-gray-100 hover:bg-gray-50 transition-colors">

            {/* procedimiento */}
            <td className="px-6 py-5">
                <div className="flex items-center gap-4">

                    {/* Avatar */}
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-cyan-500 text-white font-semibold">
                        {procedimiento.nombre.slice(0, 2).toUpperCase()}
                    </div>

                    {/* nombre */}
                    <div className="flex flex-col">
                        <span className="font-semibold text-gray-900">
                            {procedimiento.nombre}
                        </span>
                    </div>

                </div>
            </td>

            {/* descripcion */}
            <td className="px-6 py-5">
                <div className="flex flex-col">
                    <span className="text-sm text-gray-700">
                        {procedimiento.descripcion}
                    </span>
                </div>
            </td>

            {/* categoria */}
            <td className="px-6 py-5">
                <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
                    {categoria.nombre}
                </span>
            </td>
        </tr>

    );

}