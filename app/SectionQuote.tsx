"use client";

import React from 'react'
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import { suarte } from '@/constant/font';
import styles from "./home.module.css";

const AnimatedImage = motion(Image);

export default function SectionQuote() {
    const { ref, inView } = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });

    return (
        <section ref={ref} className={`safe-x-padding ${styles.sectionDistance}`} aria-label='Quote Section'>
            <div className='relative text-center'>
                <motion.p
                 initial={{ y: 100, opacity: 0 }}
                  animate={inView ? { y: 0, opacity: 1 } : {}} 
                  transition={{ duration: 0.5 }} 
                  className={styles.creatorQuotes}
                
                  >
                The only way to discover the limits of the possible is to go beyond them into the impossible.
                </motion.p>
            </div>
            <motion.p initial={{ y: 100, opacity: 0 }} animate={inView ? { y: 0, opacity: 1 } : {}} transition={{ duration: 0.5, delay: 0.5 }} className={styles.creatorQuotesName} style={suarte.style}>
                - Arthur C. Clarke
            </motion.p>
        </section >
    )
}
