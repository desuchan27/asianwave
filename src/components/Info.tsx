"use client"

import { Product } from '@/types'
import { FC, MouseEventHandler } from 'react'
import Currency from '@/components/ui/Currency'
import Button from '@/components/ui/Button'
import { ShoppingCart } from 'lucide-react'
import toast from 'react-hot-toast'
import useCart from '@/hooks/useCart'

interface InfoProps {
    data: Product
}

const Info: FC<InfoProps> = ({
    data,
}) => {

    const cart = useCart()

    const handleAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
        const product = {
            ...data,
        };

        event.stopPropagation()

        cart.addItem(product)
        console.log(`Product added to cart:`, product);
    };

    return (
        <div>
            <h1 className='text-3xl font-bold text-gray-900'>
                {data.name}
            </h1>
            <div className="mt-3 flex items-end justify-between">
                <p className="text-2xl text-gray-900">
                    <Currency value={data?.price} />
                </p>
            </div>
            <hr className="my-4" />
            <div className="mt-10 flex items-center gap-x-3">
                <Button
                    className={`flex bg-custom-purple items-center gap-x-2`}
                    onClick={handleAddToCart}
                >
                    Add to cart
                    <ShoppingCart />
                </Button>
            </div>
        </div>
    )
}

export default Info