"use client"

import { Product } from '@/types'
import Image from 'next/image'
import { FC, MouseEventHandler } from 'react'
import IconButton from '@/components/ui/IconButton'
import { Expand, ShoppingCart } from 'lucide-react'
import Currency from '@/components/ui/Currency'
import { useRouter } from 'next/navigation'
import usePreviewModalStore from '@/hooks/previewModalStore'
import useCart from '@/hooks/useCart'

interface ProductCardProps {
    data: Product
}

const ProductCard: FC<ProductCardProps> = ({
    data
}) => {

    const previewModal = usePreviewModalStore()
    const cart = useCart()

    const router = useRouter()

    const handleClick = () => {
        router.push(`/products/${data.id}`)
    }

    const onPreview: MouseEventHandler<HTMLButtonElement> = (event) => {
        event.stopPropagation()

        previewModal.onOpen(data)
    }

    const onAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
        event.stopPropagation()

        cart.addItem(data)
    }

    return (
        <div 
            onClick={handleClick}
            className='bg-white group cursor-pointer rounded-xl border border-custom-light-purple p-3 space-y-4 hover:text-custom-purple'>
            <div className='aspect-square rounded-xl bg-gray-100 relative' >
                <Image
                    src={data?.images?.[0]?.url}
                    fill
                    alt='image'
                    className='aspect-square object-cover rounded-md'
                />
                <div className='opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5'>
                    <div className="flex gap-x-6 justify-center">
                        <IconButton
                            onClick={ onPreview }
                            icon={ <Expand size={20} className='text-gray-600' /> }
                        />
                        <IconButton
                            onClick={ onAddToCart }
                            icon={ <ShoppingCart size={20} className='text-gray-600' /> }
                        />
                    </div>
                </div>
            </div>
            <div>
                <p className="font-semibold text-lg ">
                    {data.name}
                </p>
                <p className='text-sm text-gray-500'>
                    {data.subcategory?.name}
                </p>
            </div>
            <div className='flex items-center justify-between '>
                <Currency value={data?.price} />
            </div>
        </div>
    )
}

export default ProductCard