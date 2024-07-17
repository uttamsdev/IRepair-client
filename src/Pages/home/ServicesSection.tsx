import BatteryReplacement from '@/components/ServicesTiles/BatteryReplacement'
import Container from '@/components/ui/layouts/Container'
import useScrollGrowHook from '@/hooks/ScrollGrowHook';
import React from 'react'
import { motion } from 'framer-motion'

const ServicesSection = () => {
    const { style, componentRef } = useScrollGrowHook();
    return (
        <Container className='my-40'>
            <div className='text-center flex flex-col items-center'>
                <h1>Services that we provide</h1>
                <p className='max-w-[80ch] mt-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae maiores vitae tempore autem voluptate porro odio dolores adipisci quisquam itaque sunt dolorem nostrum, error voluptates velit iusto quam placeat sit necessitatibus doloremque reprehenderit minima ex praesentium! Autem nostrum officia unde!</p>
            </div>

            <div className='grid grid-cols-12 gap-5'>
                <BatteryReplacement />
                <motion.div  ref={componentRef} style={style} className='bg-light-gray rounded-2xl h-[415px] col-span-6 lg:col-span-5'></motion.div>
                <div className='bg-light-gray rounded-2xl h-[415px]  col-span-6 lg:col-span-7'></div>
                <div className='bg-light-gray rounded-2xl h-[415px] col-span-12'></div>
                <div className='bg-light-gray rounded-2xl h-[415px]  col-span-12 md:col-span-6 lg:col-span-4'></div>
                <div className='md:col-span-6  col-span-12 lg:col-span-4 bg-light-gray rounded-2xl h-[415px] '></div>
                <div className='col-span-12 lg:col-span-4 bg-light-gray rounded-2xl h-[415px] '></div>
            </div>
        </Container>
    )
}

export default ServicesSection