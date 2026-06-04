import FormularioRegisterDoctor from "./forms/FormularioRegisterDoctor";
import type PacienteInterface from "../../interfaces/PacienteInterface";
import { useNavigate } from "react-router-dom";
import createPacient from "./functions/fnc_createPacient";
import { useEffect, useState } from "react";
import PacienteAdapter from "../../services/PacienteAdapter";
import { Popup } from "reactjs-popup";
import CButton from "../../components/logics/CButton";
import { getAuthToken, getUserRole } from "../../guards/token";
import FormularioLoginAdmin from "./forms/FormularioLoginAdmin";
import HeaderL from "../../components/header/HeaderL";

export default function Admin() {
    const adapter = new PacienteAdapter();
    
    const navigate = useNavigate();
    const [doctores, setDoctores] = useState<PacienteInterface[]>([]);
    const [loggedIn, setLoggedIn] = useState(false);

    const handleCreateDoctor = async (form: PacienteInterface) => {
        form.tipo_documento = 1; // solo se permiten doctores locales
        form.is_doctor = true;
        await createPacient(form, navigate);
        navigate(0);
    };

    useEffect(() => {
        setLoggedIn(Boolean(getAuthToken() && getUserRole()));
    }, []);

    useEffect(() => {
        if (!loggedIn) return;

        adapter.getDoctors()
            .then((doctors) =>
                doctors.filter(
                    (paciente: PacienteInterface) => paciente.is_doctor
                )
            )
            .then(setDoctores);
    }, [loggedIn]);

    if (!loggedIn) {
        return (
            <div className="w-screen min-h-screen p-8 bg-gray-50 flex items-center justify-center">
                <FormularioLoginAdmin />
            </div>
        );
    }

    return (
        <div className="w-screen min-h-screen p-8 bg-gray-50">
            <HeaderL />


                {/* Doctors Table */}
                <div className="w-full overflow-x-auto rounded-2xl border border-gray-200 bg-white shadow-sm">
                    <table className="w-full border-collapse">

                        <thead className="bg-gray-50 border-b border-gray-200">
                            <tr>
                                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">
                                    Doctor
                                </th>

                                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">
                                    Contacto
                                </th>

                                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">
                                    Identificacion
                                </th>
                            </tr>
                        </thead>

                        <tbody className="divide-y divide-gray-100">
                            {doctores.map((doctor) => (
                                <tr
                                    key={doctor.id}
                                    className="hover:bg-gray-50 transition-colors"
                                >
                                    <td className="px-6 py-4">
                                        <div className="font-medium text-gray-900">
                                            {doctor.nombre}
                                        </div>
                                    </td>

                                    <td className="px-6 py-4">
                                        <div className="text-sm text-gray-900">
                                            {doctor.email}
                                        </div>

                                        <div className="text-sm text-gray-500">
                                            {doctor.telefono}
                                        </div>
                                    </td>

                                    <td className="px-6 py-4">
                                        <div className="text-sm text-gray-900">
                                            {doctor.identificacion}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <button
                                            onClick={async () => {
                                                await adapter.delete(Number(doctor.id!));
                                                navigate(0);
                                            }}
                                            className="rounded-lg bg-red-500 text-white px-3 py-1 text-sm hover:bg-red-600 transition-colors"
                                        >
                                            Eliminar
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    {doctores.length === 0 && (
                        <div className="p-8 text-center text-gray-500">
                            No hay doctores registrados.
                        </div>
                    )}
        

            </div>
            <Popup trigger={<CButton text="Agregar" />} modal nested>
                <FormularioRegisterDoctor fnc={handleCreateDoctor} />
            </Popup>
        </div>
    );
}