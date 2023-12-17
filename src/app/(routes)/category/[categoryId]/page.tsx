import getCategory from '@/actions/getCategory'
import getProducts from '@/actions/getProducts'
import Billboard from '@/components/Billboard'
import Container from '@/components/ui/Container'
import NoResults from '@/components/ui/NoResults'
import ProductCard from '@/components/ui/ProductCard'
import { getSubcategories } from '@/actions/getSubcategory'

import { FC } from 'react'
import SubcategoryCard from '@/components/ui/SubcategoryCard'
import ProductList from '@/components/ProductList'
import SubcategoryList from '@/components/SubcategoryList'

interface pageProps {
  params: {
    categoryId: string,
  }
  searchParams: {

  }
}

export const revalidate = 0

const page: FC<pageProps> = async ({
  params,
}) => {

  const products = await getProducts({
    categoryId: params.categoryId,
    isFeatured: true
  })

  const category = await getCategory(params.categoryId)

  const allSubcategories = await getSubcategories()

  const subcategories = allSubcategories.filter(subcategory => subcategory.categoryId === category.id)



  return (
    <div className='bg-white'>
      <Container>
        <Billboard
          data={category.billboard}
        />
        <div className="px-4 sm:px-6 lg:px-8 pb-24">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:hidden text-center">
            <SubcategoryList  // Use SubcategoryList instead of SubcategoryCard
              items={subcategories}
            />
          </div>
          <div className=" hidden md:flex justify-center w-full overflow-auto">
            <SubcategoryList  // Use SubcategoryList instead of SubcategoryCard
              items={subcategories}
            />
          </div>
          <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8 pt-10">
            <ProductList
              title="Featured Products"
              items={products}
            />
          </div>
        </div>
      </Container>
    </div>
  )
}

export default page