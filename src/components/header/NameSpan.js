import React, { useState, useEffect } from 'react'
import { motion, useAnimationControls } from 'framer-motion'

const NameSpan = ({ children }) => {
    const controls = useAnimationControls()
    const [isPlaying, setIsPlaying] = useState(false)


    useEffect(() => {
        rubberBand()
    }, [])


    const rubberBand = () => {
        controls.start({
            transform: [
                "scale3d(1, 1, 1)",
                "scale3d(1.4, 0.55, 1.4)",
                "scale3d(0.75, 1.25, 1)",
                "scale3d(1.25, 0.85, 1)",
                "scale3d(.9, 1.05, 1)",
                "scale3d(1, 1, 1)",
            ],
            transition: {
                times: [0, 0.4, 0.6, 0.7, 0.8, 0.9]
            },
            color: [
                "#fff",

                "#666",
                "#666",
                "#2c306c",
                "#2c306c",
                "#2c306c",
                // "#2fa1d6",
                // "#2fa1d6",

                "#fff"]
        })
        setIsPlaying(true)



    }


    return (
        <motion.span animate={controls}
            onMouseOver={() => { if (!isPlaying) rubberBand() }}
            onAnimationComplete={() => setIsPlaying(false)

            }> {children}</motion.span >
    )
}

export default NameSpan