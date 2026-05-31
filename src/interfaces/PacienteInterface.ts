export default interface PacienteInterface {
    id?: number,
    nombre: string,
    email: string,
    telefono: string,
    tipo_documento: number,
    identificacion: string,
    clave?: string,
    is_doctor: boolean
}