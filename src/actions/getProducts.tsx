import qs from "query-string"

import { Product } from "@/types";

const URL=`${process.env.NEXT_PUBLIC_API_URL}/products`;

interface Query {
  categoryId?: string;
  variantOptions?: string[]
  isFeatured?: boolean 
}

const getProducts = async (query: Query): Promise<Product[]> => {
  const url = qs.stringifyUrl({
    url: URL,
    query: {
      variantOptions: query.variantOptions,
      categoryId: query.categoryId,
      isFeatured: query.isFeatured
    }
  })
  
  const res = await fetch(url);

  return res.json();
};

export default getProducts;
