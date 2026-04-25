/* estas separaciones logicas son geniales para ahorrar espacio en ese caos de codigo spaguetti que es el front.
aqui una explicacion del destructuring para entender mejor los props:

{var1, var2}: {var1: tipo1, var2: tipo2}*/

export default function FormDivText({nombre, titulo, id, type, value, alcambio, visuals, disabled=false}: 
                        Readonly<{nombre: string, titulo: string, id: string, type: string, disabled?: boolean,
                            value: string, alcambio: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void, visuals?: string}>) {
  return (
    <div>
      <label htmlFor={nombre}>{titulo}</label>
      <input
        id={id}
        type={type}
        name={nombre}
        value={value}
        onChange={alcambio}
        disabled={disabled}
      />
    </div>
  );
}
