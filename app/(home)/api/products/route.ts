import {products} from '@/lib/products'

export async function GET() {
  return Response.json(products, {status: 200})
}