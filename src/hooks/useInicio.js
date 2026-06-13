import { useEffect, useState } from "react";
import { getItemsStorage, updateStorage } from "../store/local-storage";

export default function useInicio() {
  const [isOpen, setIsOpen] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    console.log("Cuando React monta por primera vez Inicio");

    function loadItems() {
      setItems(getItemsStorage());
    }

    loadItems();
  }, []);

  useEffect(() => {
    console.log("Cuando isOpen cambie de estado");
  }, [isOpen, items]);

  useEffect(() => {
    console.log("React siempre se dispara");
  });

  function agregarTema(inputRef) {
    console.log("Nuevo tema:", inputRef.current);
    // trim -> elimina espacios al principio y al final del texto.
    const value = inputRef.current.value.trim();
    // Comprobar que el tema no esta vacio despues de eliminar espacios.
    if (value === "") {
      inputRef.current.focus();
      return;
    }
    const newItem = {
      id: Date.now().toString(36),
      title: value,
      completed: false,
    };

    const updatedItems = [...items, newItem];
    // Si el tema es valido, lo anadimos a la lista de items.
    setItems(updatedItems);
    // Actualizamos nuestro LocalStorage
    updateStorage(updatedItems);
    inputRef.current.value = "";
  }

  function actualizarTema(newTema) {
    console.log({ newTema });
  }

  return {
    isOpen,
    setIsOpen,
    items,
    agregarTema,
    actualizarTema,
  };
}
