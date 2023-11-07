'use client'

import {motion} from "framer-motion"

export default function InputImg(){
    const imageVariants = {
        initial: { scale: 0.75 }, 
        hover: { scale: 0.9 },
      };
    
      return (
        <div>
                <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25%"
                    height="25%"
                    viewBox="0 0 200 250"
                    whileHover="hover" 
                    initial="initial" 
                >
                    <motion.image
                        href="/images/coal.svg" 
                        width="100%" 
                        height="100%" 
                        variants={imageVariants}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    />
                </motion.svg>
                <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25%"
                    height="25%"
                    viewBox="0 0 200 250"
                    whileHover="hover" 
                    initial="initial" 
                >
                    <motion.image
                        href="/images/air.svg" 
                        width="100%" 
                        height="100%" 
                        variants={imageVariants}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    />
                </motion.svg>       
        </div>
      );
}