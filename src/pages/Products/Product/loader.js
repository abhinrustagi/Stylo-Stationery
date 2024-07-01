import { Products } from "products";

export async function productLoader({ params }) {
  const product = Products.find((product) => product.slug === params.slug);
  return { product };
}
