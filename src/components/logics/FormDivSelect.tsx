

export default function FormDivSelect({nombre, titulo, id, value, alcambio, visuals, iterador, nombredesignado}: 
                        Readonly<{nombre: string, titulo: string, id: string, iterador:any[], nombredesignado:string,
                            value: string, alcambio: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void, visuals?: string}>) {
  return (
    <div>
      <label htmlFor={nombre}>{titulo}</label>
      <select
        id={id}
        name={nombre}
        onChange={alcambio}
      >
        {iterador.map((type) => (
          <option key={type.id} value={type[value] ?? ""}> 
            {type[nombredesignado]}
          </option>
        ))}
      </select>
    </div>
  );
}
