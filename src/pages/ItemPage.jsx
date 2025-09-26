import { useParams } from "react-router"

export function ItemPage() {
  const { id } = useParams()

  return <div> item page{id}</div>
}
