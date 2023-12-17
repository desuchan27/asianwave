// src\app\routes\subcategory\[subcategoryId]\page.tsx

import getCategory from '@/actions/getCategory'
import getProducts from '@/actions/getProducts'
import Billboard from '@/components/Billboard'
import Container from '@/components/ui/Container'
import NoResults from '@/components/ui/NoResults'
import ProductCard from '@/components/ui/ProductCard'
import { getSubcategories, getSubcategory } from '@/actions/getSubcategory'
import { FC } from 'react'
import SubcategoryCard from '@/components/ui/SubcategoryCard'  // Import the SubcategoryCard component
import ProductList from '@/components/ProductList'
import SubcategoryList from '@/components/SubcategoryList'

interface pageProps {
  params: {
    subcategoryId: string,
  }
  searchParams: {

  }
}

export const revalidate = 0

const page: FC<pageProps> = async ({
  params,
}) => {

  const products = await getProducts({
    subcategoryId: params.subcategoryId
  })

  const featuredProducts = await getProducts({
    subcategoryId: params.subcategoryId,
    isFeatured: true
  })

  const subcategory = await getSubcategory(params.subcategoryId) // pass subcategoryId to getSubcategory

  const allSubcategories = await getSubcategories()  // Assuming you have a function to get all subcategories

  const relatedSubcategories = allSubcategories.filter(sub => sub.categoryId === subcategory.categoryId && sub.id !== subcategory.id)

  return (
    <div className='bg-white'>
      <Container>
        {subcategory.billboard && <Billboard
          data={subcategory.billboard}
        />}
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:hidden text-center">
            <SubcategoryList  // Use SubcategoryList instead of SubcategoryCard
              items={relatedSubcategories}
            />
          </div>
        </div>
        <div className="hidden md:flex justify-center w-full overflow-auto">
          <SubcategoryList  // Use SubcategoryList instead of SubcategoryCard
              items={relatedSubcategories}
            />
        </div>
        <div className="px-4 sm:px-6 lg:px-8 pb-10">
          <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8 pt-10">
            <ProductList
              title="Featured Products"
              items={featuredProducts}
            />
          </div>
        </div>
        <div className="px-4 sm:px-6 lg:px-8 pb-10">
          <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8 pt-10">
            <ProductList
              title="All Products"
              items={products}
            />
          </div>
        </div>
      </Container>
    </div>
  )
}

export default page
