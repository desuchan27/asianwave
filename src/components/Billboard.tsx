'use client'

import { FC, useState } from 'react'
import { Billboard as BillboardType } from '@/types'

interface BillboardProps {
    data: BillboardType
}

const Billboard: FC<BillboardProps> = ({
    data
}) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className='p-4 sm:p-6 lg:p-8 rounded-xl overflow-hidden'>
            <div
                className='rounded-xl relative aspect-[2.4/1] lg:aspect-[4/1] overflow-hidden bg-cover bg-center'
                style={{
                    backgroundImage: `url(${data?.imageUrl})`,
                    position: 'relative',
                }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <div
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        background: `rgba(9, 9, 11, ${isHovered ? '0.50' : '0'})`,
                        transition: 'background 0.3s ease'
                    }}
                />
                <div
                    className='h-full w-full flex flex-col justify-center items-center gap-y-8 relative z-10' // Changed z-index to 20
                    style={{
                        transform: isHovered ? 'scale(1.5)' : 'scale(1)',
                        transition: 'transform 0.3s ease'
                    }}
                >
                    <div
                        className='text-center font-bold text-5xl sm:text-6xl lg:text-8xl sm:max-w-xl max-w-xs'
                        style={{
                            color: isHovered ? '#EDE9FE' : '#916bbf',
                            textShadow: isHovered ? '0 0 10px #916bbf, 0 0 20px #EDE9FE, 0 0 30px #EDE9FE, 0 0 40px #916bbf' : 'none',
                            WebkitTextStroke: isHovered ? '1px' : '1px #EDE9FE',
                            transition: 'color 0.3s ease, text-shadow 0.3s ease, -webkit-text-stroke 0.3s ease',
                            textTransform: 'uppercase',
                            fontWeight: 'bold',
                        }}
                    >
                        {data.label}
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Billboard