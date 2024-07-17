import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import useScrollGrowHook from '@/hooks/ScrollGrowHook';
const BatteryReplacement = () => {
    
    const { style, componentRef } = useScrollGrowHook()
    /*// '0 1' start 0 hocce amr div er top r 1 hocche view port ba total screen er bottom
        // '2 1' end -> 2 hocce div er 2 gun length scroll korle end hobe
    }); //its value 0 or 1*/


    // const scaleValues = useTransform(scrollYProgress, [0, 1], [0.8, 1]);    // 0 theke 1 porjonto scale 1 theke 1.2 hobe
    // const opacityValues = useTransform(scrollYProgress, [0, 1], [0.2, 1]);
    // const xValues = useTransform(scrollYProgress, [0, 1], [-1000, 0]);
    return (
        <motion.div
            // style={{ scale: scaleValues, opacity: opacityValues, x: xValues }}

            style={style}
            ref={componentRef} className='bg-light-gray rounded-2xl h-[415px] col-span-12'></motion.div>
    )
}

export default BatteryReplacement