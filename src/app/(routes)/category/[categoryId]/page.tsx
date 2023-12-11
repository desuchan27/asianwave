import getCategory from '@/actions/getCategory'
import getProducts from '@/actions/getProducts'
import Billboard from '@/components/Billboard'
import Container from '@/components/ui/Container'
import NoResults from '@/components/ui/NoResults'
import ProductCard from '@/components/ui/ProductCard'
import { FC } from 'react'

interface pageProps {
  params: {
    categoryId: string
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
  })

  const category = await getCategory(params.categoryId)

    return (
    <div className='bg-white'>
        <Container>
            <Billboard
                data={category.billboard}
            />
            <div className="px-4 sm:px-6 lg:px-8 pb-24">
                <div className="mt-6 lg:col-span-4 lg:mt-0">
                    {products.length === 0 && <NoResults /> }
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {products.map((item) => (
                            <ProductCard 
                                key={item.id}
                                data={item}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default page