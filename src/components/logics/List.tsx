
import Unit from "./Unit";

export default function List({width, height, orientation, lista}: Readonly<{width: string, height: string, orientation: string, lista: any[]}>) {

    return (
        <div className={`${width} ${height}`}>
            {lista.map((item) => <Unit key={item.id} object={item} />)}
        </div>
    )
}