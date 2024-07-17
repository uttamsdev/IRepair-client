import { Button } from '@/components/ui/button'
import Container from '@/components/ui/layouts/Container'
import React from 'react'
import { motion, stagger } from 'framer-motion'

const HeroSection = () => {
    const intro = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.5,
                staggerChildren: 0.25, // 1 second delay between each child
                delayChildren: 0.5
            }
        }
    }

    const introChildren = {
        hidden: { opacity: 0, y: -300 },
        visible: {
            opacity: 1, y: 0,
            transition: {
                duration: 0.5,
                type: 'spring',
                bounce: 0.2
            }
        }
    }

    const laptop = {
        initial: { y: 0, rotate: 0, scale: 5 },
        animate: {
            y: 30,
            rotate: -30,
            scale: 1,
            transition: {
                duration: 1,
                y: { //applicable for only y
                    yoyo: Infinity,
                    repeat: Infinity,
                    duration: 1.5,
                    repeatType: 'reverse',
                    ease: 'easeInOut'
                }
            }
        }
    }
    return (
        <div className='overflow-hidden '>
            <Container className='h-screen place-content-center grid grid-cols-1 lg:grid-cols-2'>
                <motion.div
                    variants={intro}
                    initial='hidden'
                    animate='visible'
                >
                    <motion.h1 variants={introChildren} className='md:text-8xl font-bold text-gray text-5xl lg:text-nowrap'><span>Don't worry</span> <br /> <span className='text-black'>We'll fix it.</span></motion.h1>
                    <motion.p variants={introChildren} className='mt-2.5 text-dark-gray max-w-[50ch] text-justify'>
                        Welcome to <span>iRepair</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos temporibus sint velit animi magnam dicta eligendi odit nemo neque in quas fugit tempore ullam eum, illum vel voluptatem! Dicta, accusantium?
                    </motion.p>
                    <motion.div variants={introChildren} >
                        <Button className='mt-1'>Book a service</Button>
                    </motion.div>

                </motion.div>

                <motion.div initial='initial' animate='animate' variants={laptop} >
                    <img className=' rounded shadow-md mx-auto lg:w-full w-3/4 h-[95%] mt-2.5 object-contain' src='https://icityrepair.com/wp-content/uploads/2020/11/macbook-repair-1.png' />
                </motion.div>
            </Container>
        </div>
    )
}

export default HeroSection