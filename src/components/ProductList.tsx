import { Product } from '@/types'
import { FC } from 'react'
import NoResults from '@/components/ui/NoResults'
import ProductCard from '@/components/ui/ProductCard'

interface ProductListProps {
    title: string
    items: Product[]
}

const ProductList: FC<ProductListProps> = ({title, items}) => {
  return (
    <div className='space-y-4'>
        <h3 className='font-bold text-xl sm:text-3xl text-custom-purple'>{title}</h3>
        {items.length === 0 && <NoResults />}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {items.map((item) => (
                <ProductCard 
                    key={item.id}
                    data={item}
                />
            ))}
        </div>
    </div>
  )
}

export default ProductList