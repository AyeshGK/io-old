"use client";

import React from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import Image from "next/image";
import { assets } from "@/constant/assets";
import styles from "./home.module.css";

const AnimatedImage = motion(Image);

export default function SectionLetsConnect() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const socialMediaLinks = {
    linkedin: "https://linkedin.com/in/ayesh-vininda-1998gk",
    instagram: "https://instagram.com/ayesh_vininda",
    github: "https://github.com/ayeshgk",
    dribble: "https://dribbble.com/ayesh-vininda",
    gmail: "mailto:ayeshgk@gmail.com",
    medium: "https://medium.com/@ayeshgk",
    twitter: "https://twitter.com/AyeshVininda",
  }

  const socialMedia = [
    {
      initial: { y: 50, opacity: 0 },
      animate: inView ? { y: 0, opacity: 1 } : {},
      transition: { duration: 0.5, delay: 0.4 },
      whileHover: { scale: 1.1, transition: { duration: 0.2 } },
      className:
        "hidden lg:block absolute hover:cursor-pointer top-14 left-14 xl:left-24 w-10 h-10 md:w-[168px] md:h-[168px] z-10",
      src: assets.home.letsConnect.linkedin,
      alt: "",
      width: 168,
      height: 168,
      tabIndex: 0,
      onClick: () =>
        window.open(socialMediaLinks.linkedin, "_blank"),
    },
    {
      initial: { y: 50, opacity: 0 },
      animate: inView ? { y: 0, opacity: 1 } : {},
      transition: { duration: 0.5, delay: 0.6 },
      whileHover: { scale: 1.1, transition: { duration: 0.2 } },
      className:
        "hidden lg:block absolute hover:cursor-pointer top-14 right-14 xl:right-24 w-10 h-10 md:w-[168px] md:h-[168px] z-10",
      src: assets.home.letsConnect.twitter,
      alt: "",
      width: 168,
      height: 168,
      tabIndex: 0,
      onClick: () => window.open(socialMediaLinks.twitter, "_blank"),
    },
    {
      initial: { y: -50, opacity: 0 },
      animate: inView ? { y: 0, opacity: 1 } : {},
      transition: { duration: 0.5, delay: 1 },
      whileHover: { scale: 1.1, transition: { duration: 0.2 } },
      className:
        "hidden lg:block absolute hover:cursor-pointer bottom-14 right-36 xl:right-44 md:right-24 w-10 h-10 md:w-[168px] md:h-[168px] z-10",
      src: assets.home.letsConnect.github,
      alt: "",
      width: 168,
      height: 168,
      tabIndex: 0,
      onClick: () => window.open(socialMediaLinks.github, "_blank"),
    },
    {
      initial: { y: -50, opacity: 0 },
      animate: inView ? { y: 0, opacity: 1 } : {},
      transition: { duration: 0.5, delay: 0.8 },
      whileHover: { scale: 1.1, transition: { duration: 0.2 } },
      className:
        "hidden lg:block absolute hover:cursor-pointer bottom-14 left-36 xl:left-44 md:left-24 w-10 h-10 md:w-[168px] md:h-[168px] z-10",
      src: assets.home.letsConnect.medium,
      alt: "",
      width: 168,
      height: 168,
      tabIndex: 0,
      onClick: () =>
        window.open(socialMediaLinks.medium, "_blank"),
    },
    {
      initial: { y: 100, opacity: 0 },
      animate: inView ? { y: 0, opacity: 1 } : {},
      transition: { duration: 0.5, delay: 0 },
      whileHover: { scale: 1.1, transition: { duration: 0.2 } },
      className:
        "hidden lg:block absolute hover:cursor-pointer -bottom-64 w-10 h-10 md:w-[310px] md:h-[310px] z-10",
      src: assets.home.letsConnect.gmail,
      alt: "",
      width: 310,
      height: 310,
      tabIndex: 0,
      onClick: () => window.open(socialMediaLinks.gmail, "_self"),
    },
  ];

  return (
    <section
      ref={ref}
      className={`safe-x-padding ${styles.sectionDistance} overflow-y-hidden lg:h-[1000px]`}
      aria-label="Let&apos;s Connect Section"
    >
      <div className="text-center">
        <motion.h2
          initial={{ y: 100, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className={styles.sectionTitle}
        >
          Let&apos;s Connect
        </motion.h2>
        <motion.p
          initial={{ y: 100, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.7 }}
          className={`${styles.sectionDescription} max-w-[730px] mx-auto`}
        >
          So come along and join me on my journey of discovery and exploration. Let&apos;s build some amazing things together! 🌱👨‍💻💫
        </motion.p>
      </div>
      <div className="h-full mt-4">
        <div className="relative flex flex-col items-center justify-center">
          <div className="hidden lg:block absolute animate-ping -z-[2]">
          </div>
          <AnimatedImage
            initial={{ y: 50, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-52 h-52 md:w-[330px] md:h-[330px] lg:w-[530px] lg:h-[530px] rounded-full bg-gray lg:bg-transparent"
            src={assets.home.hero.avatarSmile}
            alt=""
            width={530}
            height={530}
            priority
          />
          {socialMedia.map((socialMediaLink, index) => (
            <AnimatedImage key={index.toString()} {...socialMediaLink} />
          ))}
          <div className="flex flex-row flex-wrap items-center justify-center gap-3 mt-4 lg:hidden">
            <AnimatedImage
              initial={{ y: 50, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="z-[1] hover:cursor-pointer w-[100px] h-[100px]"
              src={assets.home.letsConnect.linkedin}
              alt=""
              width={100}
              height={100}
              tabIndex={0}
              onClick={() =>
                window.open(socialMediaLinks.linkedin, "_blank")
              }
            />
            <AnimatedImage
              initial={{ y: -50, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="z-[1] hover:cursor-pointer w-[100px] h-[100px]"
              src={assets.home.letsConnect.twitter}
              alt=""
              width={100}
              height={100}
              tabIndex={0}
              onClick={() =>
                window.open(socialMediaLinks.twitter, "_blank")
              }
            />
            <AnimatedImage
              initial={{ y: 100, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0 }}
              className="z-[1] hover:cursor-pointer w-[100px] h-[100px]"
              src={assets.home.letsConnect.gmail}
              alt=""
              width={100}
              height={100}
              tabIndex={0}
              onClick={() =>
                window.open(socialMediaLinks.gmail, "_self")
              }
            />
            <AnimatedImage
              initial={{ y: 50, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="z-[1] hover:cursor-pointer w-[100px] h-[100px]"
              src={assets.home.letsConnect.medium}
              alt=""
              width={100}
              height={100}
              tabIndex={0}
              onClick={() =>
                window.open(socialMediaLinks.medium, "_blank")
              }
            />
            <AnimatedImage
              initial={{ y: -50, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 1 }}
              className="z-[1] hover:cursor-pointer w-[100px] h-[100px]"
              src={assets.home.letsConnect.github}
              alt=""
              width={100}
              height={100}
              tabIndex={0}
              onClick={() =>
                window.open(socialMediaLinks.github, "_blank")
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
}
