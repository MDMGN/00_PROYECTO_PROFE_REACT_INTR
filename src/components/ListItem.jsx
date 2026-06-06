import Item from "./Item";

export default function ListItem({ items = [] }) {
  return <ul>
    {
        items.map((item, index) => <Item item={item} key={index} /> )
    }
    </ul>;
}