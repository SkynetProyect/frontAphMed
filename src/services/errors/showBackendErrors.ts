import toast, { Toaster } from 'react-hot-toast';

export default function showBackendErrors(data: any){
  if (!Array.isArray(data.data) || data.data.length === 0) {
    toast.error(data.mensaje || 'Error desconocido');
    return;
  }

  data.data.forEach((err: any) => {
    const constraints = Object.values(err.constraints || {}) as string[];
    console.log(`Error en ${err.property}:`, constraints);
    constraints.forEach((msg) => {
      toast.error(`${err.property}: ${msg}`, {
        duration: 5000,
      });
    });
  });
};