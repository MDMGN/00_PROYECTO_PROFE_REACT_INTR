import { useRef, useState } from "react";
import Boton from "./Boton";

export default function Item({ item, onUpdateItem, onDeleteItem }) {
  const { id, title, completed } = item;
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState(title);
  const btnEditTitle = isEditing ? "Guardar" : "Editar";
  const inputRef = useRef(null);

  return (
    <li>
      <span>
        <input
          ref={inputRef}
          type="text"
          readOnly={!isEditing}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </span>
      <span>
        <Boton
          text={btnEditTitle}
          onClick={() => {
            if (isEditing) {
              onUpdateItem({
                id,
                title: inputRef.current.value.trim(),
                completed,
              });
            } else {
              inputRef.current.focus();
            }

            setIsEditing(!isEditing);
          }}
        />
        <Boton
          text={"Eliminar"}
          color={"red"}
          onClick={() => onDeleteItem(id)}
        />
      </span>
    </li>
  );
}
