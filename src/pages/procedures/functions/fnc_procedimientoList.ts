import type ProcedimientoInterface from "../../../interfaces/ProcedimientoInterface";
import { useNavigate } from "react-router-dom";

export default function useProcedimientoList({ procedimiento }: { procedimiento: ProcedimientoInterface})
{
    const navigate = useNavigate();
    
    const handleClick = () => {
        navigate(`/procedimiento/${procedimiento.id}`);
    };

    return { handleClick};
}