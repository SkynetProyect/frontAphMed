import { useContext, useEffect, useMemo, useState } from "react";
import { SocketContext } from "../../../components/hooks/socket-reducers/SocketContext";
import ProcedimientoAdapter from "../../../services/ProcedimientoAdapter";
import type CategoriaInterface from "../../../interfaces/CategoriaInterface";
import type ProcedimientoInterface from "../../../interfaces/ProcedimientoInterface";
import CategoriaAdapter from "../../../services/CategoriaAdapter";

export default function useProcedimientos(idpatient: number) {
    const { socket } = useContext(SocketContext).SocketState;

    const [procedimientos, setProcedimientos] = useState<ProcedimientoInterface[]>([]);
    const [categorias, setCategorias] = useState<CategoriaInterface[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let isMounted = true;

        setLoading(true);

        Promise.all([
            new ProcedimientoAdapter().getByPaciente(idpatient),
            new CategoriaAdapter().getAll()
        ])
        .then(([procedimientosData, categoriasData]) => {
            if (!isMounted) return;

            setProcedimientos(procedimientosData);
            setCategorias(categoriasData);
        })
        .catch((error) => {
            console.error("Error loading data:", error);
        })
        .finally(() => {
            if (isMounted) setLoading(false);
        });

        return () => {
            isMounted = false;
        };
    }, [idpatient]);

    const categoriaMap = useMemo(() => {
        return new Map(
            categorias.map((categoria) => [
                Number(categoria.id),
                categoria
            ])
        );
    }, [categorias]);

    return {
        socket,
        procedimientos,
        categorias,
        categoriaMap,
        loading,
        isReady: !loading && categorias.length > 0
    };
}