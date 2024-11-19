import React from 'react'
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai"
import { motion } from "framer-motion"
import Reveal from "./Reveal"


const Contact = () => {
  return (
    <div className='px-6 max-w-[1000px] mx-auto md:my-12' id="contact">
      <Reveal>
      <div className='grid md:grid-cols-2 place-items-center'>
        <div>
          <div className='text-gray-300 my-3'>
            <h3 className='text-4xl font-semibold mb-5'>Sobre <span>Mi</span></h3>
            <p className='text-justify leading-7 w-11/12 mx-auto'>
            Déjame tu mensaje para ponernos en contacto, o para enviarte una cotización,
             llevo años trabajando en la instalación de software, 
             cámaras de seguridad, mantenimiento de equipos de cómputo, 
             portátiles y pc de escritorio, 
            también si necesitas accesoria para la adquisición de un equipo.   
            </p>
          </div>
          <div className='flex mt-10 items-center gap-7'>
            <div className='bg-grey-800/40 p-4 rounded-lg'>
              <h3 className='md:text-4xl text-2xl font-semibold text-white'>
                10 <span>Años</span>
              </h3>
              <p className='text-xs md:text-base'><span>Experiencia</span></p>
            </div>
            <div className='bg-grey-800/40 p-5 rounded-lg'>
              <h3 className='md:text-4xl text-2xl font-semibold text-white'>
              Instala       <span>Software</span>
              </h3>
              <p className='text-xs md:text-base'><span>Original</span></p>
            </div>
           
          </div>
        </div>

        <form
          action="https://getform.io/f/alllqzpa"
          method='POST'
          className='max-w-6xl p-5 md:p-12'
          id='form'
        >
          <p className='text-gray-100 font-bold text-xl mb-2'>
          ¡Conectémonos!
          </p>
          <input
            type="text"
            id="name"
            placeholder='Tu Nombre...'
            name='name'
            className='mb-2 w-full rounded-md border border-purple-600 py-2 pl-2 pr-4'
          />
          <input
            type="email"
            id="email"
            placeholder='Tu Email...'
            name='email'
            className='mb-2 w-full rounded-md border border-purple-600 py-2 pl-2 pr-4'
          />
          <textarea
            name="textarea"
            id="textarea"
            cols="30"
            rows="4"
            placeholder="Escribe Tu Mensaje ..."
            className="w-full py-3 rounded-md text-gray-100 font-semibold text-xl bg-primary-color"
          />
          <button
              type="submit"
              className="w-full py-3 rounded-md text-gray-100 font-semibold text-xl bg-primary-color"
          >Envia tu Email
          </button>
        </form>
      </div>
      </Reveal>

    </div>
  )
}

export default Contact
