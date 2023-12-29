"use client";

import { assets } from '@/constant/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import styles from "./home.module.css";


export default function AboutMe() {
    const { ref, inView } = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });

    return (
        <section ref={ref} className={`safe-x-padding ${styles.sectionDistance}`}>
            <div className='text-center'>
                <motion.h2 initial={{ y: 100, opacity: 0 }} animate={inView ? { y: 0, opacity: 1 } : {}} transition={{ duration: 0.5 }} className={styles.sectionTitle}>
                    About Me
                </motion.h2>
                <motion.p initial={{ y: 100, opacity: 0 }} animate={inView ? { y: 0, opacity: 1 } : {}} transition={{ duration: 0.7 }} className={`${styles.sectionDescription} max-w-[960px] mx-auto`}>
                I&apos;m , a curious 🌟 student currently pursuing studies in the department of Computer 
                Science & Engineering at the esteemed University of Moratuwa.
                 💡 I am a passionate Web Application Developer and AI 
                Enthusiast with a strong background in deep learning.
                 💻 As a dedicated practitioner in the field, I specialize in turning innovative ideas into 
                 powerful solutions. 🚀
                </motion.p>
            </div>
        </section >
    )
}
