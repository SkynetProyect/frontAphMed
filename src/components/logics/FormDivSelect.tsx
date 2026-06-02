import { useEffect } from "react";


export default function FormDivSelect({nombre, titulo, id, value, alcambio, visuals, iterador, nombredesignado}: 
                        Readonly<{nombre: string, titulo: string, id: string, iterador:any[], nombredesignado:string,
                            value: string, alcambio: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void, visuals?: string}>) {
  useEffect(() => {
    if (iterador.length > 0 && !value) {
      alcambio({
        target: {
          name: nombre,
          value: String(iterador[0].id ?? "")
        }
      } as React.ChangeEvent<HTMLSelectElement>);
    }
  }, [iterador]);
  
  return (
    <div>
      <label className={visuals} htmlFor={nombre}>{titulo}</label>
      <select
        id={id}
        value={value}
        name={nombre}
        onChange={alcambio}
      >
        {iterador.map((type) => (
          <option key={type.id} value={type.id ?? ""}>
            {type[nombredesignado]}
          </option>
        ))}
      </select>
    </div>
  );
}
