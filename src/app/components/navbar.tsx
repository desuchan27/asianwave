import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className="min-w-fit md:max-w-full flex items-center justify-between flex-wrap bg-white">
        <div className="flex items-center justify-between my-0 p-4">
            <Link 
            href={'/'} 
            className='flex items-center'
            >
                <Image
                    src="/images/icons/logo_wide.png"
                    width={200}
                    height={100}
                    alt="Asianwave Logo wide"
                />
            </Link>
            <h1 className='self-center text-xl md:text-2xl font-semibold whitespace-nowrap text-custom-purple'>
                SIGN-UP
                </h1>
        </div>
    </nav>
  )
}

export default Navbar