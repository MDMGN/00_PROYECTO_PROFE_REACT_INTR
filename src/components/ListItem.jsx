import Item from "./Item";

export default function ListItem({ items = [], onUpdateItem, onDeleteItem }) {
  return (
    <ul>
      {items.map((item) => (
        <Item
          item={item}
          key={item.id}
          onUpdateItem={onUpdateItem}
          onDeleteItem={onDeleteItem}
        />
      ))}
    </ul>
  );
}
