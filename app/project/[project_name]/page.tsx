"use client";


import { getProjectBySlug } from "@/external/project_data";
import { assets } from "@/constant/assets";
import { MotionProps, motion } from "framer-motion";
// import { useInView } from "react-intersection-observer";


export default function ProjectPage({params}: {params: {project_name: string}}) {
  const { project_name } = params;
  const project = getProjectBySlug(project_name);

  if(!project) {
    return <div>Project not found</div>
  }
  // const { ref, inView } = useInView({
  //   threshold: 0.1,
  //   triggerOnce: true,
  // });

  

  return (
    <section>
       <div className='py-6 text-center safe-x-padding'>
                <p className='text-base font-medium md:text-xl lg:text-2xl'>
                Under developement.
                </p>
            </div>
      </section>


    // <section
    //   ref={ref}
    //   className="safe-x-padding mt-10 mb-[172px]"
    //   aria-label="Hero Section"
    // >
    //   <h2>{project?.title}</h2>
    //   <div className="relative text-center">
    //     <motion.p
    //       initial={{ y: 100, opacity: 0 }}
    //       animate={inView ? { y: 0, opacity: 1 } : {}}
    //       transition={{ duration: 0.5 }}
    //       className="text-3xl font-bold text-white"
    //     >
    //       {project?.title}
    //     </motion.p>
    //   </div>

    //   {/* Display additional project details */}
    //   <div>
    //     <h3>Tech Stacks</h3>
    //     <ul>
    //       {project?.techStacks.map((tech) => (
    //         <li key={tech.name}>
    //           <img src={tech.imageUrl} alt={tech.name} />
    //           <a href={tech.webUrl} target="_blank" rel="noopener noreferrer">
    //             {tech.name}
    //           </a>
    //         </li>
    //       ))}
    //     </ul>

    //     <h3>Contributors</h3>
    //     <ul>
    //       {project?.contributors.map((contributor) => (
    //         <li key={contributor.name}>
    //           {contributor.name} - {contributor.email}
    //         </li>
    //       ))}
    //     </ul>

    //     <h3>Images</h3>
    //     <div>
    //       {project?.images.map((image) => (
    //         <img key={image.alt} src={image.url} alt={image.alt} />
    //       ))}
    //     </div>

    //     <h3>Descriptions</h3>
    //     <ul>
    //       {project?.descriptions.map((desc) => (
    //         <li key={desc.title}>
    //           <strong>{desc.title}</strong>: {desc.description}
    //         </li>
    //       ))}
    //     </ul>

    //     <h3>Links</h3>
    //     <div>
    //       <a href={project?.repositoryUrl} target="_blank" rel="noopener noreferrer">
    //         Repository
    //       </a>
    //       {project?.demoUrl && (
    //         <a href={project?.demoUrl} target="_blank" rel="noopener noreferrer">
    //           Demo
    //         </a>
    //       )}
    //     </div>
    //   </div>
    // </section>
  );
};

