import { Popup } from "reactjs-popup";
import FormularioRegister from "../register/forms/FormularioRegister";
import CButton from "../../components/logics/CButton";
import CustomerList from "./components/CustomerList";
import fnc_customers from "./functions/fnc_customers";



export default function Customers(){
    const fnccustomers = fnc_customers();

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
                    {fnccustomers.pacientes.map((paciente) => (
                        <CustomerList
                            key={paciente.id}
                            paciente={paciente}
                        />
                    ))}
                </tbody>
            </table>
        </div>
            <Popup trigger={<CButton text="Agregar" />} modal nested>
                <FormularioRegister fnc={fnccustomers.registerPacient} />
            </Popup>

        </>
    );

}