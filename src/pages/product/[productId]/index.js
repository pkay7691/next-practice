import { useRouter } from 'next/router'

export default function ProductDetail () {

  const router = useRouter()
  const productId = router.query.productId
  return (
    <div>Details about Product {productId}</div>
  )
}
