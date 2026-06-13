const key = "temario";
export function updateStorage(newItems) {
  // Validando que "newItems"-> Array
  if (!Array.isArray(newItems)) return;
  // Guardamos "newItems" en localStorage
  localStorage.setItem(key, JSON.stringify(newItems));
}

export function getItemsStorage() {
  const items = JSON.parse(localStorage.getItem(key)) ?? [];
  return items;
}
