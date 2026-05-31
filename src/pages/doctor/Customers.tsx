import { Popup } from "reactjs-popup";
import FormularioRegister from "../register/forms/FormularioRegister";
import CButton from "../../components/logics/CButton";
import CustomerList from "./components/CustomerList";
import fnc_customers from "./functions/fnc_customers";


export default function Customers(){
    const { pacientes, registerPacient, page, setPage, totalPages } = fnc_customers();

    return (
        <>
        <div className="w-full overflow-x-auto rounded-2xl border border-gray-200 bg-white shadow-sm">
            <table className="min-w-full border-collapse">
                
                {/* Header */}
                <thead className="bg-gray-50 border-b border-gray-200">
                    <tr>
                        <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">
                            Paciente
                        </th>
                        <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">
                            Contacto
                        </th>
                        <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">
                            Estado
                        </th>
                    </tr>
                </thead>

                {/* Body */}
                <tbody className="divide-y divide-gray-100">
                    {pacientes.map((paciente) => (
                        <CustomerList
                            key={paciente.id}
                            paciente={paciente}
                        />
                    ))}
                </tbody>
            </table>

            {/* Pagination */}
            <div className="flex items-center justify-between px-6 py-4 border-t border-gray-200">
                <span className="text-sm text-gray-500">
                    Página {page} de {totalPages}
                </span>
                <div className="flex gap-2">
                    <button
                        onClick={() => setPage(p => p - 1)}
                        disabled={page === 1}
                        className="px-3 py-1.5 text-sm rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                    >
                        ← Anterior
                    </button>
                    <button
                        onClick={() => setPage(p => p + 1)}
                        disabled={page === totalPages}
                        className="px-3 py-1.5 text-sm rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                    >
                        Siguiente →
                    </button>
                </div>
            </div>
        </div>

        <Popup trigger={<CButton text="Agregar" />} modal nested>
            <FormularioRegister fnc={registerPacient} />
        </Popup>
        </>
    );
}