"use client"

import { Product } from '@/types'
import { FC, MouseEventHandler, useState } from 'react'
import Currency from '@/components/ui/Currency'
import Button from '@/components/ui/Button'
import { ShoppingCart } from 'lucide-react'
import toast from 'react-hot-toast'
import useVariantSelection from '@/hooks/useVariantSelection'
import { cn } from '@/lib/utils'
import useCart from '@/hooks/useCart'

interface InfoProps {
    data: Product
}

const Info: FC<InfoProps> = ({
    data,
}) => {

    const cart = useCart()

    const [selectedVariantInfo, setSelectedVariantInfo] = useState<string | null>(null)

    const { selectedVariant, handleVariantClick } = useVariantSelection({
        onVariantSelect(option) {
            setSelectedVariantInfo((prev) => (prev === option ? null : option))
            console.log('Selected variant:', option)
        },
    })

    const isButtonDisabled = selectedVariant === null

    const handleAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
        if (selectedVariant) {
            const productWithSelectedVariant = {
                ...data,
                selectedVariant: selectedVariant,
            };

            event.stopPropagation()

        cart.addItem(productWithSelectedVariant)
            console.log(`Product added to cart:`, productWithSelectedVariant);
        } else {
            toast('Please select a variant');
        }
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
            <div className="flex items-center gap-x-4">
                <div className="flex flex-col gap-y-6">
                    <h3 className='font-semibold text-slate-600'>Variants: </h3>
                    <div>
                        {data?.variant?.options?.map((option, index) => (
                            <Button
                        className={cn(
                            'bg-white outline outline-1 text-slate-950 mr-4 text-sm rounded-none font-light',
                            {
                                'outline-2': selectedVariant === option,
                                'outline-custom-purple': selectedVariant === option,
                                'outline-slate-950': selectedVariant !== option,
                                'disabled': selectedVariant === option,
                            }
                        )}
                        key={index}
                        onClick={() => handleVariantClick(option)}
                        disabled={selectedVariant === option}
                    >
                                {option}
                            </Button>
                        ))}
                    </div>
                </div>
            </div>
            <div className="mt-10 flex items-center gap-x-3">
                <Button
                    className={`flex bg-custom-purple items-center gap-x-2 ${isButtonDisabled ? 'disabled' : ''}`}
                    onClick={handleAddToCart}
                    disabled={isButtonDisabled}
                >
                    Add to cart
                    <ShoppingCart />
                </Button>
            </div>

        </div>
    )
}

export default Info