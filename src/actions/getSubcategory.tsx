import { Subcategory } from "@/types";

const URL=`${process.env.NEXT_PUBLIC_API_URL}/subcategories`;

const getSubcategories = async (): Promise<Subcategory[]> => {
  const res = await fetch(URL);
  return res.json();
};

const getSubcategory = async (subcategoryId: string): Promise<Subcategory> => {
  const res = await fetch(`${URL}/${subcategoryId}`);
  return res.json();
};

export { getSubcategories, getSubcategory };