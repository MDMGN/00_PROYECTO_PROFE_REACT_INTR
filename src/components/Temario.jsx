import { useRef, useState } from "react";
import Boton from "./Boton";
import ListItem from "./ListItem";
import "./Temario.css";

export default function Temario({ title, description, items, onAddItem }) {
  const inputRef = useRef(null);

  console.log("Rederizando Temario");

  function onChange() {
    const value = inputRef.current.value;
    console.log("Valor del input", value);
  }

  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
      <div className="agregar-tema">
        <input
          ref={inputRef}
          id="input-tema"
          type="text"
          placeholder="Agregar un nuevo tema"
          onChange={onChange}
        />
        <Boton
          text="Agregar"
          onClick={() => onAddItem(inputRef.current.value)}
        />
      </div>
      <ListItem items={items} />
    </div>
  );
}
