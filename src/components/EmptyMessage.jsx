import { useEffect } from "react";

export default function EmptyMessage() {
  useEffect(() => {
    console.log("Cuando se monta EmptyMessage por primera vez");
    return () => {
      console.log("Cuando se desmonta EmptyMessage");
    };
  }, []);
  return <p>No hay temarios</p>;
}
