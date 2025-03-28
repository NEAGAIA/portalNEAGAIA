"use client";
import { FaHtml5, FaCss3Alt, FaJsSquare, FaPython, FaJava, FaNodeJs, FaReact, FaRust } from 'react-icons/fa';
import { SiTypescript, SiTensorflow, SiKeras, SiHaskell, SiNextdotjs, SiGithub, SiGitlab } from 'react-icons/si';

const about = {
  title: "About me",
  description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque natus maiores earum, obcaecati tempora fuga culpa esse!",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Franklin Sales de Oliveira"
    },
    {
      fieldName: "Age",
      fieldValue: "24 years"
    },
    {
      fieldName: "Nationality",
      fieldValue: "Brazilian"
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Spanish, and Portuguese"
    },
    {
      fieldName: "University",
      fieldValue: "Federal University of Pelotas, Brazil"
    },
    {
      fieldName: "Course",
      fieldValue: "Computer Science"
    },
  ]
};

// experience data
const experience = {
  icon: '/assets/resume/badge.svg',
  title: "My experience",
  description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque natus maiores earum, obcaecati tempora fuga culpa esse!",
  items: [
    {
      company: "ViTech",
      position: "Research Intern",
      duration: "2023 - Present",
    },
    {
      company: "ViTech",
      position: "Research Intern",
      duration: "2023 - Present",
    },
    {
      company: "ViTech",
      position: "Research Intern",
      duration: "2023 - Present",
    },
    {
      company: "ViTech",
      position: "Research Intern",
      duration: "2023 - Present",
    },
    {
      company: "ViTech",
      position: "Research Intern",
      duration: "2023 - Present",
    },
    {
      company: "ViTech",
      position: "Research Intern",
      duration: "2023 - Present",
    },
    {
      company: "ViTech",
      position: "Research Intern",
      duration: "2023 - Present",
    },
    {
      company: "ViTech",
      position: "Research Intern",
      duration: "2023 - Present",
    },
  ]
}

// education data
const education = {
  icon: '/assets/resume/cap.svg',
  title: "My education",
  description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque natus maiores earum, obcaecati tempora fuga culpa esse!",
  items: [
    {
      institution: "Online Course Platform",
      degree: "Full Stack Web Development Bootcamp",
      duration: "2023",
    },
    {
      institution: "Online Course Platform",
      degree: "Full Stack Web Development Bootcamp",
      duration: "2023",
    },
    {
      institution: "Online Course Platform",
      degree: "Full Stack Web Development Bootcamp",
      duration: "2023",
    },
    {
      institution: "Online Course Platform",
      degree: "Full Stack Web Development Bootcamp",
      duration: "2023",
    },
    {
      institution: "Online Course Platform",
      degree: "Full Stack Web Development Bootcamp",
      duration: "2023",
    },
  ]
}

// skills data
const skills = {
  icon: '/assets/resume/cap.svg',
  title: "My Skills",
  description: "These are some of the technologies and tools I have experience with:",
  skilllist: [
    {
      icon: <FaHtml5 />,
      name: "HTML5",
    },
    {
      icon: <FaCss3Alt />,
      name: "CSS3",
    },
    {
      icon: <FaJsSquare />,
      name: "JavaScript",
    },
    {
      icon: <FaPython />,
      name: "Python",
    },
    {
      icon: <FaJava />,
      name: "Java",
    },
    {
      icon: <FaNodeJs />,
      name: "Node.js",
    },
    {
      icon: <FaReact />,
      name: "React",
    },
    {
      icon: <FaRust />,
      name: "Rust",
    },
    {
      icon: <SiTypescript />,
      name: "TypeScript",
    },
    {
      icon: <SiTensorflow />,
      name: "TensorFlow",
    },
    {
      icon: <SiKeras />,
      name: "Keras",
    },
    {
      icon: <SiHaskell />,
      name: "Haskell",
    },
    {
      icon: <SiNextdotjs />,
      name: "Next.js",
    },
    {
      icon: <SiGithub />,
      name: "GitHub",
    },
    {
      icon: <SiGitlab />,
      name: "GitLab",
    },
  ],
}
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip";

import { ScrollArea } from '@/components/ui/scroll-area'; 
import { motion } from 'framer-motion';

const Resume = () => {
  return (
    <motion.div 
      initial = {{opacity: 0}} 
      animate={{
        opacity: 1, 
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className='min-h-[80vh] flex items-center justify-center py-12 xl:py-0'
    >
      <div className="container mx-auto">
        <Tabs 
          defaultValue='experience' 
          className='flex flex-col xl:flex-row gap-[60px]'
        >
          <TabsList className='flex flex-col w-full max-w-80px] mx-auto xl:mx-0 gap-6'>
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about me">About me</TabsTrigger>
          </TabsList>
          {/* content */}
          <div className='min-h-[70vh] w-full'>
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                <h3 className='text-4xl font-bold'>{experience.title}</h3>
                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                    {experience.items.map((item, index)=>{
                      return <li key={index} className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'>
                        <span className='text-accent'>{item.duration}</span>
                        <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left'>{item.position}
                        </h3>
                        <div className='flex items-center gap-3'>
                          {/* dot */}
                          <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                          <p className='text-white/60'>{item.company}</p>
                        </div>
                      </li>
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>





            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                <h3 className='text-4xl font-bold'>{education.title}</h3>
                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                    {education.items.map((item, index)=>{
                      return <li key={index} className='bg-[#232329] h-[250px] w-full lg:w-[280px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'>
                        <span className='text-accent'>{item.duration}</span>
                        <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left'>{item.degree}
                        </h3>
                        <div className='flex items-center gap-3'>
                          {/* dot */}
                          <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                          <p className='text-white/60'>{item.institution}</p>
                        </div>
                      </li>
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>




            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className='flex flex-col gap-[30px]'>
                <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                  <h3 className='text-4xl font-bold'>{skills.title}    
                  </h3>
                  <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{skills.description}
                  </p>
                </div>
                <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]'>
                  {skills.skilllist.map((skill, index)=>{
                    return <li key={index}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className='w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group'>
                            <div className='text-6xl group-hover:text-accent transition duration-300'>{skill.icon}</div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className='capitalize'>{skill.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                      </li>
                  })}
                </ul>
              </div>
            </TabsContent>








            {/* about me */}
            <TabsContent value="about me" className="w-full text-center xl:text-left"
            >
              <div className='flex flex-col gap-[30px]'>
                <h3 className='text-4xl font-bold'>{about.title}</h3>
                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>
                  {about.description}
                </p>
                <ul className='grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0'>
                  {about.info.map((item, index) =>{
                    return (
                      <li key={index} className='flex items-center justify-center xl:justify-start gap-4'>
                        <span className='text-white/60'>{item.fieldName}</span>
                        <span className='text-xl'>{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>










        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
