
"use client";

import { assets } from "@/constant/assets";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useInView } from "react-intersection-observer";

const categories = [
    {
        slug: 'app',
        name: 'App',
    },
    {
        slug: 'design',
        name: 'Design',
    }
];

const blogTypes = [
    {
        slug: 'web-dev',
        name: 'Web Development',
    },
    {
        slug: 'ai_n_ml',
        name: 'AI & ML',
    },
    {
        slug: 'os',
        name: 'Operating Systems',
    }
]

const initialBlogs = [
    {
        slug: 'finetuining',
        title: 'Finetuning 🧐',
        image: assets.home.blogs.blog5,
        repositoryUrl: "",
        link: "https://medium.com/@ayeshgk/finetuning-155807d4840a",
        summary: "Finetuning is taking a pre-trained model and further training it on a more specific dataset or task.",
        keywords: [
            {
                name: 'LLMs',
            },
            {
                name:'Finetuining',
            },
            {
                name:'Prompting',
            },
        ],
        blogType: blogTypes[1],
        category: categories[0]
    },
    {
        slug: 'beyound-forward-and-reverse-proxies',
        title: 'Beyound Forward and Reverse Proxies',
        image: assets.home.blogs.blog1,
        repositoryUrl: "",
        link: "https://medium.com/@ayeshgk/beyond-forward-and-reverse-proxies-d8f24a28e3ed",
        summary: "Proxy is an intermediate server which acts as a bridge between client and servers. Different types of proxies work in between client and server communication. Different types of proxies have different types of functionalities such as Caching, Anonymity and privacy, Content filtering, Access control, Load balancing and Firewall protection.",
        keywords: [
            {
                name: 'Proxy',
            },
            {
                name:'API Gateway',
            },
            {
                name:'Load Balancing',
            },
        ],
        blogType: blogTypes[0],
        category: categories[0]
    },
    {
        slug: 'all-the-things-you-need-to-know-about-web-rendering',
        title: 'All the things you need to know about web rendering.',
        image: assets.home.blogs.blog2,
        repositoryUrl: "",
        link: "https://medium.com/@ayeshgk/all-the-things-you-need-to-know-about-web-rendering-8e44a1b5fa30",
        summary: "Website rendering is the process of displaying content of the web page on user’s device. Web browsers retrieves HTML,CSS and JavaScript for the relevant web page then combine those things together and show it nicely in user’s device. Other than that it includes text formatting's, images and other media.",
        keywords: [
            {
                name: 'Web Rendering',
            },
            {
                name:'Website',
            },
        ],
        blogType: blogTypes[0],
        category: categories[0]
    },
    {
        slug: 'cpu-scheduler-in-linux-operating-system',
        title: 'CPU scheduler in Linux operating system',
        image: assets.home.blogs.blog3,
        repositoryUrl: "",
        link: "https://medium.com/@ayeshgk/cpu-scheduler-in-linux-operating-system-b233e94ec6a9",
        summary: "CPU scheduler is the main division in the Operating system, and it is part of the OS kernel. It schedules tasks and with searching resources availability. Here I’m going to explain the Linux OS CPU scheduler",
        keywords: [
            {
                name: 'Linux',
            },
            {
                name:'Operating Systems',
            },
            {
                name:'CPU Scheduler',
            },
        ],
        blogType: blogTypes[2],
        category: categories[0]
    },
    {
        slug: 'knn-in-simple',
        title: 'KNN in simple',
        image: assets.home.blogs.blog4,
        repositoryUrl: "",
        link: "https://medium.com/@ayeshgk/knn-in-simple-36abeaeb76a7",
        summary: "KNN is a supervised learning algorithm. It can be used in both classification and regression. But most use it as a classification algorithm. It classified new data into one of the available categories.",
        keywords: [
            {
                name: 'KNN',
            },
            {
                name:'Machine Learning',
            },
            {
                name:"Classification",
            }
        ],
        blogType: blogTypes[1],
        category: categories[0]
    },
]

export default function Blog() {
    const [projects, setProjects] = useState(initialBlogs);
    const [filteredBlogs, setfilteredBlogs] = useState(initialBlogs);

    const { ref, inView } = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });

    return (
        <section ref={ref} className='safe-x-padding mt-[38px] overflow-y-hidden lg:min-h-[1000px]'>
            <div className='text-center'>
                <motion.h2 initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.2 }} className='mb-6 text-5xl font-extrabold lg:text-6xl font-montserrat gradient-text'>Explore Blogs</motion.h2>
                <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.4 }} className='font-medium text-xl lg:text-2xl text-accent max-w-[730px] mx-auto'>
                🌐🔍✍️ Embracing the journey of sharing insights and experiences through the art of blogging.
                </motion.p>
            </div>
            <div className='my-[50px] h-full'>
                <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.4 }} className="grid grid-flow-row grid-cols-4 gap-6 md:grid-cols-8 xl:grid-cols-12">
                    {filteredBlogs.map((blog, index) => (
                        <div key={index} className="col-span-4 shadow-md hover:shadow-2xl hover:scale-[1.01] rounded-2xl transition-all duration-500 ease-in-out">
                            <Link
                                className="w-full h-full bg-white"
                                // href={`/blog/${blog.slug}`}
                                href = {blog.link}
                                target="_blank"
                            >
                                <div className="relative overflow-hidden max-h-48 rounded-tl-2xl rounded-tr-2xl">
                                    <div className="relative">
                                        <Image className="object-cover" src={blog.image} alt={`${blog.title} thumbnail`} />
                                        <div className="absolute top-0 right-0 p-2 bg-black z-[1] text-white rounded-bl-2xl text-sm hover:opacity-0 transition-all duration-500 ease-in-out">
                                            {blog.blogType.name}
                                        </div>
                                    </div>
                                    <div className="absolute bottom-0 left-0 px-6 py-3">
                                        <div className="flex flex-row flex-wrap gap-x-4">
                                            {blog.keywords.map((keyword, index) => (
                                                <motion.div
                                                    key={index}
                                                    initial={{ opacity: 0 }}
                                                    animate={inView ? { opacity: 1 } : {}}
                                                    transition={{ duration: 1, delay: 0.5 + (index * 0.1) }}
                                                    className="p-1 bg-white border-[0.5px] border-gray/70 rounded-full hover:cursor-help"
                                                >
                                                
                                                    <span  className="text-sm font-medium text-gray-700"
                                                    >{keyword.name}</span>
                                                    
                                                </motion.div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <div className="p-6 py-4">
                                    <h5 className="mb-2 text-base font-bold line-clamp-1">{blog.title}</h5>
                                    <p className="text-sm font-normal line-clamp-2">{blog.summary}</p>
                                    <div className="grid grid-flow-col gap-4 mt-4">
                                        {/* {blog.link && (
                                            <button
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    window.open(blog.link, '_blank', 'utm_source=ayesh.my.id&utm_medium=campaign&utm_campaign=portfolio');
                                                }}
                                                className="flex flex-row items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-white transition-all duration-200 transform rounded-lg shadow-lg bg-accent hover:gradient-bg line-clamp-1">
                                                <span>
                                                    {blog.category.slug === 'design' ?
                                                        "See Prototype"
                                                        :
                                                        "Visit Demo"
                                                    }
                                                </span>
                                                <IoMdOpen />
                                            </button>
                                        )} */}

                                        {/* {blog.repositoryUrl && (
                                            <button
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    window.open(blog.repositoryUrl, '_blank', 'utm_source=ayesh.my.id&utm_medium=campaign&utm_campaign=portfolio');
                                                }}
                                                rel="noopener noreferrer"
                                                className="flex flex-row items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-white transition-all duration-200 transform rounded-lg shadow-lg bg-accent hover:gradient-bg line-clamp-1"
                                            >
                                                {blog.category.slug === 'design' ? (
                                                    <>
                                                        <span>Dribble</span>
                                                        <BsDribbble />
                                                    </>
                                                ) : (
                                                    <>
                                                        <span>Github</span>
                                                        <BsGithub />
                                                    </>
                                                )}
                                            </button>
                                        )} */}
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>

    )
}
