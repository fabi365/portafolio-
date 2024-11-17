import React from 'react'
import {
  DiHtml5,
  DiCss3,
  DiJavascript1,
  DiRubyRough,
  DiRor,
  DiPython,
  DiDjango,
  DiPhp,
  DiLaravel,
  DiIllustrator,
  DiPhotoshop,
  DiReact,
  DiMongodb,
  DiPostgresql,
  DiAndroid,
  DiWordpress,
  DiGithubBadge,
  DiSqllite,
  DiBootstrap,
} from 'react-icons/di'
import { CgSoftwareDownload } from "react-icons/cg";
import { FaGears } from "react-icons/fa6";

import { RiTailwindCssFill } from "react-icons/ri";
import Reveal from './Reveal'


const skills = [
  {
    category: 'Software',
    technologies: [
      {name: 'Instalación Win10/11', icon: <CgSoftwareDownload className='text-blue-600 mx-2'/>},
      {name: 'Instalación Linux', icon: <CgSoftwareDownload className='text-blue-600 mx-2'/>},
      {name: 'Formateo', icon: <CgSoftwareDownload className='text-blue-600 mx-2'/>},
      {name: 'Instalación Office', icon: <CgSoftwareDownload className='text-blue-600 mx-2'/>},
      {name: 'Instalación Photoshop', icon: <CgSoftwareDownload className='text-blue-600 mx-2'/>},
      {name: 'Instalación Camaras,S', icon: <CgSoftwareDownload className='text-blue-600 mx-2'/>},
      {name: 'Mto,Preventivo', icon: <CgSoftwareDownload className='text-blue-600 mx-2'/>},
      {name: 'Mto,Corectivo', icon: <CgSoftwareDownload className='text-blue-600 mx-2'/>},
      {name: 'Instalación Redes', icon: <CgSoftwareDownload className='text-blue-600 mx-2'/>},
      {name: 'Ins,Antivirus', icon: <CgSoftwareDownload className='text-blue-600 mx-2'/>},
      
    ]
  },
  {
    category: 'Hardware',
    technologies: [
        {name: ' Cambio Pasta termica', icon: <FaGears className='text-gray-200 mx-2'/>},
        {name: 'Mantenimiento Preventivo', icon: <FaGears className='text-gray-200 mx-2'/>},
        {name: 'Mantenimiento Corectivo', icon: <FaGears className='text-gray-200 mx-2'/>},
        {name: 'Limpieza Interna', icon: <FaGears className='text-gray-200 mx-2'/>},
        {name: 'Lubricacion de Cooler', icon: <FaGears className='text-gray-200 mx-2'/>},
        {name: 'Reparación de Carcasas', icon: <FaGears className='text-gray-200 mx-2'/>},
        {name: 'Micro Soldadura', icon: <FaGears className='text-gray-200 mx-2'/>},
        {name: 'Mantenimiento de Impresora', icon: <FaGears className='text-gray-200 mx-2'/>},
    ]
  }
]


const Skills = () => {
  return (
    <div className='max-w-[900px] mx-auto flex felx-col justify-center px-4 text-gray-200 pb-8 md:py-12' id="skills">
      <Reveal>
        <h2 className='text-3xl font-bold mb-4 text-center'>Servicios </h2>
        <p className='text-center mb-8'>
        Los servicios realizados según su necesidad  <a href="#" className='underline'>Contactanos</a>
        </p>

        <div className="flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-8
                        ">
            {skills.map((skill, index) => (
                <div key={index} className="border border-purple-900 p-6 rounded-lg bg-purple-900/20 shadow-lg
                                w-full md:w-1/2">
                    <h3 className="text-xl font-bold mb-4 text-center">{skill.category}</h3>
                    <div className="grid grid-cols-2 gap-4">
                        {skill.technologies.map((tech, idx) => (
                            <div key={idx} className="flex items-center space-x-2">
                                <span className="text-2xl">{tech.icon}</span>
                                <span>{tech.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
      </Reveal>

    </div>
  )
}

export default Skills
