"use client"

import { Product } from '@/types'
import { FC, MouseEventHandler, useState } from 'react'
import Currency from '@/components/ui/Currency'
import Button from '@/components/ui/Button'
import { ShoppingCart } from 'lucide-react'
import toast from 'react-hot-toast'
import useCart from '@/hooks/useCart'

interface InfoProps {
    data: Product
}

const Info: FC<InfoProps> = ({ data }) => {
    const [quantity, setQuantity] = useState<number>(1);

    const cart = useCart()

    const handleQuantityChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        const newQuantity = parseInt(event.target.value, 10);
        setQuantity(newQuantity);
    };

    const handleAddToCart: React.MouseEventHandler<HTMLButtonElement> = (event) => {
        event.stopPropagation();

        const product = {
            ...data,
            quantity,
        };

        cart.addItem(product);
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
            <div className="mt-10 items-center gap-x-3 w-full">
                <div className='flex items-center w-full mb-10'>
                    <label htmlFor="quantity" className="mr-2 justify-center items-center">
                        Quantity:
                    </label>
                    <input
                        type="number"
                        min="1"
                        value={quantity}
                        onChange={handleQuantityChange}
                        className="border rounded-md p-2 w-16 mr-2"
                    />
                    {quantity !== null && (
                        <p className="text-sm text-gray-500 mt-2">{data.quantity} pieces available</p>
                    )}
                </div>
                <Button
                    className={`flex bg-custom-purple items-center gap-x-2 ${quantity >= 1 ? 'cursor-pointer' : 'cursor-not-allowed'}`}
                    onClick={handleAddToCart}
                    disabled={quantity === null || quantity < 1 || quantity % 1 !== 0 || quantity > data.quantity}
                >
                    Add to cart
                    <ShoppingCart />
                </Button>
            </div>

        </div>
    );
};

export default Info;