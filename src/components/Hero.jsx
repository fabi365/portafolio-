import React from 'react';
import profilepic from '../assets/profpic.png';
import { TypeAnimation } from 'react-type-animation';
import ShinyEffect from './ShinyEffect';
import {
  AiOutlineGithub,
  AiOutlineInstagram,
  AiOutlineLinkedin,
  
} from 'react-icons/ai';
import { DiIllustrator,DiPhotoshop,DiLinux} from 'react-icons/di';
import { motion } from 'framer-motion';
import { FaWhatsappSquare } from 'react-icons/fa';
import { TfiMicrosoft } from "react-icons/tfi";
import { PiMicrosoftExcelLogoThin,PiMicrosoftWordLogoLight, PiMicrosoftTeamsLogoBold } from "react-icons/pi";
import { BiLogoAdobe } from "react-icons/bi";


const Hero = () => {
  return (
    <div className='mt-24 max-w-[1200px] mx-auto relative'>
      <div className='grid md:grid-cols-2 place-items-center gap-8'>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <TypeAnimation
            sequence={[
              'Técnico en Sistemas',
              1000,
              'Reparación de pc',
              1000,
              'Instalación de Redes.',
              1000,
              'Instalación de Cámaras.',
              1000,
              'Instalación de software',
              1000,
            ]}
            speed={50}
            repeat={Infinity}
            className='font-bold text-gray-400 text-xl md:text-5xl italic- mb-4'
          />
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className='text-gray-200 md:text-7xl text-5xl tracking-tight mb-4'
          >
            HOLA, YO SOY <br />
            <span className='text-purple-500'>FABIAN LOPEZ</span>
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1 }}
            className='text-gray-300 max-w-[300px] md:max-w-[500px] md:text-2xl text-lg mb-6'
          >
            Tengo 10 años de experiencia: Descarga las Recomendaciones
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1.5 }}
            className='flex flex-row items-center gap-6 my-4 md:mb-0'
          >
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: '0px 0px 8px rgba(0,0,0,0.3)',
              }}
              className='z-10 cursor-pointer font-bold text-gray-200 md:w-auto p-4 border border-purple-400 rounded-xl'
            >
              <a
                href='https://drive.google.com/file/d/1Md33jlcj6N6sx0B9YB2Z_hPznrVIVIai/view?usp=drive_link'
                target='_blank'
                rel='noopener noreferrer'
                download
              >
                Download 
              </a>
            </motion.button>

            <div className='flex gap-6 flex-row text-4xl md:text-6xl text-purple-400 z-20'>
                                     
              <motion.a
                whileHover={{ scale: 1.2 }}
                href='https://wa.me/573193024139'
                target='_blank'
><FaWhatsappSquare /></motion.a>
            </div>
          </motion.div>
        </motion.div>

        <motion.img
          src={profilepic}
          className='w-[300px] md:w-[450px]'
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 2 }}
        className='flex flex-row text-7xl px-12 md:px-0 w-full justify-center items-center py-24'
      >
        <p className='text-gray-200 mr-6'>PROGRAMAS</p>
        <TfiMicrosoft  className='text-red-500 mx-2' /> 
        <DiLinux  className='text-yellow-500 mx-2' /> 
        
        <PiMicrosoftExcelLogoThin   className='text-blue-500 mx-2' /> 
        <PiMicrosoftWordLogoLight   className='text-blue-500 mx-2' /> 
        < PiMicrosoftTeamsLogoBold   className='text-blue-500 mx-2' /> 
        < BiLogoAdobe   className='text-blue-500 mx-2' /> 
        <DiIllustrator className='text-yellow-700 mx-2' />
        <DiPhotoshop className='text-blue-600 mx-2' />
      </motion.div>

      <div className='absolute inset-0 hidden md:block'>
        <ShinyEffect left={0} top={0} size={1400} />
      </div>
    </div>
  );
};

export default Hero;

