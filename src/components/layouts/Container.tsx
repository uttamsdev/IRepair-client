import { cn } from '@/lib/utils'
import React, { ReactNode } from 'react'

type TContainerProps = {
    children: ReactNode,
    className?: string
}
const Container = ({ children, className } : TContainerProps) => {
    return (
        <div className={cn('px-5 w-full mx-auto max-w-[1230px]', className)}>{children}</div>
    )
}

export default Container