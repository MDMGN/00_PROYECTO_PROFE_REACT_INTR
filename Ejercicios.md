# Pasos para poder actualizar y eliminar nuestra lista de .

- En nuestro componente "Item" actualizar su estado para poder controlar el flujo.
  - Si se pulsa en editar pasa el estado a true y cambia el tetxo del botón a "Guardar".
  - Si se pulsa en guardar el estado de isEditing cambiará a false y el texto del botón nuevamente a editar.

  - Cuando el estado de "isEditing" sea true pasar el nuevo valor a "onUpdateItem"

  - Cuando el estado de "isEditing" sea false, colocar el foco en el input y finalizar la función.
