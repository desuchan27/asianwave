import { FC } from 'react'

interface ContainerProps {
    children: React.ReactNode
}

const Container: FC<ContainerProps> = ({ children }) => {
    return (
        <div className='mx-auto max-w-7xl text-slate-600'>
            {children}
        </div>)
}

export default Container;