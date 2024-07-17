import { useScroll, useTransform } from 'framer-motion';
import React, { useRef } from 'react'

const useScrollGrowHook = () => {
    const componentRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: componentRef,
        offset: ['0 1', '1.2 1'] // '0 1' start 0 hocce amr div er top r 1 hocche view port ba total screen er bottom
        // '2 1' end -> 2 hocce div er 2 gun length scroll korle end hobe
    }); //its value 0 or 1


    const scaleValues = useTransform(scrollYProgress, [0, 1], [0.8, 1]);    // 0 theke 1 porjonto scale 1 theke 1.2 hobe
    const opacityValues = useTransform(scrollYProgress, [0, 1], [0.2, 1]);

    const style = {
        scale: scaleValues,
        opacity: opacityValues
    }
    return (
        { componentRef, style }
    )
}

export default useScrollGrowHook