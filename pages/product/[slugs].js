import { useRouter } from 'next/router'
 
export default function Product() {
  const router = useRouter()
  return <p>Product Detail: {router.query.slug}</p>
}