import { useState } from "react";
import Boton from "./Boton";

export default function Item({ item, onUpdateItem }) {
  const { id, title, completed } = item;
  const [value, setValue] = useState(title);
  const [isEditing, setIsEditing] = useState(false);

  return (
    <li>
      <span>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          readOnly={!isEditing}
        />
      </span>
      <span>
        <Boton
          text={"Editar"}
          onClick={() => {
            onUpdateItem(item);
          }}
        />
        <Boton text={"Eliminar"} color={"red"} />
      </span>
    </li>
  );
}
