import { useEffect } from "react";


export default function FormDivSelect({nombre, titulo, id, value, alcambio, visuals, iterador, nombredesignado}: 
                        Readonly<{nombre: string, titulo: string, id: string, iterador:any[], nombredesignado:string,
                            value: string, alcambio: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void, visuals?: string}>) {
    useEffect(() => {

    if (iterador.length > 0) {

      const firstValue = iterador[0][value] ?? "";

      alcambio({
        target: {
          name: nombre,
          value: firstValue
        }
      } as React.ChangeEvent<HTMLSelectElement>);

    }

  }, [iterador]);
  
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
