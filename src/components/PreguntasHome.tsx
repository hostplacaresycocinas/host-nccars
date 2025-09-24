'use client';

import { company } from '@/app/constants/constants';
import { useState } from 'react';
import DropDownIcon from './icons/DropDownIcon';
import { motion, AnimatePresence } from 'framer-motion';

const PreguntasHome = () => {
  const [activeAnswer, setActiveAnswer] = useState<string | null>('preg-1');

  const toggleAnswer = (id: string) => {
    if (activeAnswer !== id) {
      setActiveAnswer(id);
    }
  };

  return (
    <section
      id='preguntasSection'
      className='mt-10 mb-16 md:mt-16 md:mb-24 relative overflow-hidden'
    >
      {/* Patrón de fondo decorativo */}
      <div className='absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.03)_1px,transparent_0)] bg-[length:20px_20px]'></div>

      <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
        {/* Título y subtítulo */}
        <div className='text-center mb-3 md:mb-5 lg:mb-10'>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: '0px 0px -100px 0px' }}
            className='text-2xl md:text-3xl lg:text-4xl font-extrabold text-color-title mb-2'
          >
            Preguntas Frecuentes
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: '0px 0px -100px 0px' }}
            className='text-color-text max-w-2xl mx-auto md:text-lg font-medium'
          >
            Contamos con mucha experiencia en el mercado automotriz.
            <br />
            ¡Cualquier consulta no dudes en contactarnos!
          </motion.p>
        </div>

        {/* Grid de preguntas */}
        <div className='grid gap-6'>
          {/* Pregunta 1 */}
          <motion.div
            key='preg-1'
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '0px 0px -100px 0px' }}
            transition={{ duration: 0.5, delay: 0 * 0.1 }}
            className='group'
          >
            <div
              onClick={() => toggleAnswer('preg-1')}
              className={`relative bg-color-bg-secondary rounded-2xl shadow-sm border border-gray-200 hover:shadow-lg transition-colors duration-300 cursor-pointer overflow-hidden
                ${
                  activeAnswer === 'preg-1'
                    ? 'ring-2 ring-color-primary/20 shadow-lg'
                    : 'hover:border-gray-300'
                }`}
            >
              {/* Línea decorativa superior */}
              <div
                className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-color-primary to-color-primary/60 transition-colors duration-300
                ${activeAnswer === 'preg-1' ? 'opacity-100' : 'opacity-0'}`}
              ></div>

              <div className='p-6 md:p-8'>
                <div className='flex items-start justify-between gap-4'>
                  <div className='flex-1'>
                    <h4 className='text-lg md:text-xl font-semibold text-color-title-light mb-2 group-hover:text-color-primary-light transition-colors duration-300'>
                      ¿Qué métodos de pago aceptan?
                    </h4>
                  </div>

                  {/* Botón de toggle */}
                  <div className='flex-shrink-0'>
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300
                      ${
                        activeAnswer === 'preg-1'
                          ? `bg-color-primary text-white shadow-lg ${
                              company.dark
                                ? 'bg-color-primary-dark'
                                : 'bg-color-primary'
                            }`
                          : `${
                              company.dark
                                ? 'group-hover:bg-color-primary-dark'
                                : 'group-hover:bg-color-primary'
                            } bg-gray-100 text-gray-600 group-hover:text-color-title-light`
                      }`}
                    >
                      <motion.div
                        animate={{
                          rotate: activeAnswer === 'preg-1' ? 180 : 0,
                        }}
                        transition={{
                          duration: 0.3,
                          ease: 'easeInOut',
                        }}
                      >
                        <DropDownIcon className='w-5 h-5' />
                      </motion.div>
                    </div>
                  </div>
                </div>

                {/* Contenido expandible */}
                <AnimatePresence>
                  {activeAnswer === 'preg-1' && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        duration: 0.4,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className='overflow-hidden'
                    >
                      <div className='mt-6 pt-6 border-t border-gray-100'>
                        <p className='text-color-text-light leading-relaxed text-base md:text-lg'>
                          Aceptamos efectivo, transferencias bancarias y
                          financiación a través de entidades financieras.
                          También trabajamos con permutas y consignaciones.
                          Consultanos para conocer las opciones disponibles
                          según el vehículo.
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>

          {/* Pregunta 2 */}
          <motion.div
            key='preg-2'
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '0px 0px -100px 0px' }}
            transition={{ duration: 0.5, delay: 1 * 0.1 }}
            className='group'
          >
            <div
              onClick={() => toggleAnswer('preg-2')}
              className={`relative bg-color-bg-secondary rounded-2xl shadow-sm border border-gray-200 hover:shadow-lg transition-colors duration-300 cursor-pointer overflow-hidden
                ${
                  activeAnswer === 'preg-2'
                    ? 'ring-2 ring-color-primary/20 shadow-lg'
                    : 'hover:border-gray-300'
                }`}
            >
              {/* Línea decorativa superior */}
              <div
                className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-color-primary to-color-primary/60 transition-colors duration-300
                ${activeAnswer === 'preg-2' ? 'opacity-100' : 'opacity-0'}`}
              ></div>

              <div className='p-6 md:p-8'>
                <div className='flex items-start justify-between gap-4'>
                  <div className='flex-1'>
                    <h4 className='text-lg md:text-xl font-semibold text-color-title-light mb-2 group-hover:text-color-primary-light transition-colors duration-300'>
                      ¿Los vehículos están revisados?
                    </h4>
                  </div>

                  {/* Botón de toggle */}
                  <div className='flex-shrink-0'>
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300
                      ${
                        activeAnswer === 'preg-2'
                          ? `bg-color-primary text-white shadow-lg ${
                              company.dark
                                ? 'bg-color-primary-dark'
                                : 'bg-color-primary'
                            }`
                          : `${
                              company.dark
                                ? 'group-hover:bg-color-primary-dark'
                                : 'group-hover:bg-color-primary'
                            } bg-gray-100 text-gray-600 group-hover:text-color-title-light`
                      }`}
                    >
                      <motion.div
                        animate={{
                          rotate: activeAnswer === 'preg-2' ? 180 : 0,
                        }}
                        transition={{
                          duration: 0.3,
                          ease: 'easeInOut',
                        }}
                      >
                        <DropDownIcon className='w-5 h-5' />
                      </motion.div>
                    </div>
                  </div>
                </div>

                {/* Contenido expandible */}
                <AnimatePresence>
                  {activeAnswer === 'preg-2' && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        duration: 0.4,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className='overflow-hidden'
                    >
                      <div className='mt-6 pt-6 border-t border-gray-100'>
                        <p className='text-color-text-light leading-relaxed text-base md:text-lg'>
                          Sí, todos nuestros vehículos pasan por una revisión
                          técnica antes de ser ofrecidos. Verificamos el estado
                          mecánico, documentación y funcionamiento general para
                          garantizar la calidad.
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>

          {/* Pregunta 3 */}
          <motion.div
            key='preg-3'
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '0px 0px -100px 0px' }}
            transition={{ duration: 0.5, delay: 2 * 0.1 }}
            className='group'
          >
            <div
              onClick={() => toggleAnswer('preg-3')}
              className={`relative bg-color-bg-secondary rounded-2xl shadow-sm border border-gray-200 hover:shadow-lg transition-colors duration-300 cursor-pointer overflow-hidden
                ${
                  activeAnswer === 'preg-3'
                    ? 'ring-2 ring-color-primary/20 shadow-lg'
                    : 'hover:border-gray-300'
                }`}
            >
              {/* Línea decorativa superior */}
              <div
                className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-color-primary to-color-primary/60 transition-colors duration-300
                ${activeAnswer === 'preg-3' ? 'opacity-100' : 'opacity-0'}`}
              ></div>

              <div className='p-6 md:p-8'>
                <div className='flex items-start justify-between gap-4'>
                  <div className='flex-1'>
                    <h4 className='text-lg md:text-xl font-semibold text-color-title-light mb-2 group-hover:text-color-primary-light transition-colors duration-300'>
                      ¿Dan garantía en los vehículos?
                    </h4>
                  </div>

                  {/* Botón de toggle */}
                  <div className='flex-shrink-0'>
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300
                      ${
                        activeAnswer === 'preg-3'
                          ? `bg-color-primary text-white shadow-lg ${
                              company.dark
                                ? 'bg-color-primary-dark'
                                : 'bg-color-primary'
                            }`
                          : `${
                              company.dark
                                ? 'group-hover:bg-color-primary-dark'
                                : 'group-hover:bg-color-primary'
                            } bg-gray-100 text-gray-600 group-hover:text-color-title-light`
                      }`}
                    >
                      <motion.div
                        animate={{
                          rotate: activeAnswer === 'preg-3' ? 180 : 0,
                        }}
                        transition={{
                          duration: 0.3,
                          ease: 'easeInOut',
                        }}
                      >
                        <DropDownIcon className='w-5 h-5' />
                      </motion.div>
                    </div>
                  </div>
                </div>

                {/* Contenido expandible */}
                <AnimatePresence>
                  {activeAnswer === 'preg-3' && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        duration: 0.4,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className='overflow-hidden'
                    >
                      <div className='mt-6 pt-6 border-t border-gray-100'>
                        <p className='text-color-text-light leading-relaxed text-base md:text-lg'>
                          Ofrecemos garantía según el estado y antigüedad del
                          vehículo. Los términos específicos se acuerdan al
                          momento de la compra, siempre priorizando la
                          transparencia con nuestros clientes.
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>

          {/* Pregunta 4 */}
          <motion.div
            key='preg-4'
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '0px 0px -100px 0px' }}
            transition={{ duration: 0.5, delay: 3 * 0.1 }}
            className='group'
          >
            <div
              onClick={() => toggleAnswer('preg-4')}
              className={`relative bg-color-bg-secondary rounded-2xl shadow-sm border border-gray-200 hover:shadow-lg transition-colors duration-300 cursor-pointer overflow-hidden
                ${
                  activeAnswer === 'preg-4'
                    ? 'ring-2 ring-color-primary/20 shadow-lg'
                    : 'hover:border-gray-300'
                }`}
            >
              {/* Línea decorativa superior */}
              <div
                className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-color-primary to-color-primary/60 transition-colors duration-300
                ${activeAnswer === 'preg-4' ? 'opacity-100' : 'opacity-0'}`}
              ></div>

              <div className='p-6 md:p-8'>
                <div className='flex items-start justify-between gap-4'>
                  <div className='flex-1'>
                    <h4 className='text-lg md:text-xl font-semibold text-color-title-light mb-2 group-hover:text-color-primary-light transition-colors duration-300'>
                      ¿Puedo ir a ver los autos?
                    </h4>
                  </div>

                  {/* Botón de toggle */}
                  <div className='flex-shrink-0'>
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300
                      ${
                        activeAnswer === 'preg-4'
                          ? `bg-color-primary text-white shadow-lg ${
                              company.dark
                                ? 'bg-color-primary-dark'
                                : 'bg-color-primary'
                            }`
                          : `${
                              company.dark
                                ? 'group-hover:bg-color-primary-dark'
                                : 'group-hover:bg-color-primary'
                            } bg-gray-100 text-gray-600 group-hover:text-color-title-light`
                      }`}
                    >
                      <motion.div
                        animate={{
                          rotate: activeAnswer === 'preg-4' ? 180 : 0,
                        }}
                        transition={{
                          duration: 0.3,
                          ease: 'easeInOut',
                        }}
                      >
                        <DropDownIcon className='w-5 h-5' />
                      </motion.div>
                    </div>
                  </div>
                </div>

                {/* Contenido expandible */}
                <AnimatePresence>
                  {activeAnswer === 'preg-4' && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        duration: 0.4,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className='overflow-hidden'
                    >
                      <div className='mt-6 pt-6 border-t border-gray-100'>
                        <div className='text-color-text-light leading-relaxed text-base md:text-lg'>
                          <p>¡Por supuesto! Tenemos dos sedes:</p>
                          <p>
                            • <strong>NC Cars Moreno</strong> en Acceso Oeste
                            KM.43, Francisco Alvarez, Moreno (colectora sur Av.
                            Gaona 13402 y José Martí, sobre la autopista).
                          </p>
                          <p>
                            • <strong>NC Cars CABA</strong> en Av. Boyacá 2240,
                            Paternal CABA.
                          </p>
                          <p>
                            Te invitamos a visitarnos para conocer nuestros
                            vehículos personalmente.
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>

          {/* Pregunta 5 */}
          <motion.div
            key='preg-5'
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '0px 0px -100px 0px' }}
            transition={{ duration: 0.5, delay: 4 * 0.1 }}
            className='group'
          >
            <div
              onClick={() => toggleAnswer('preg-5')}
              className={`relative bg-color-bg-secondary rounded-2xl shadow-sm border border-gray-200 hover:shadow-lg transition-colors duration-300 cursor-pointer overflow-hidden
                ${
                  activeAnswer === 'preg-5'
                    ? 'ring-2 ring-color-primary/20 shadow-lg'
                    : 'hover:border-gray-300'
                }`}
            >
              {/* Línea decorativa superior */}
              <div
                className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-color-primary to-color-primary/60 transition-colors duration-300
                ${activeAnswer === 'preg-5' ? 'opacity-100' : 'opacity-0'}`}
              ></div>

              <div className='p-6 md:p-8'>
                <div className='flex items-start justify-between gap-4'>
                  <div className='flex-1'>
                    <h4 className='text-lg md:text-xl font-semibold text-color-title-light mb-2 group-hover:text-color-primary-light transition-colors duration-300'>
                      ¿Hacen permutas y consignaciones?
                    </h4>
                  </div>

                  {/* Botón de toggle */}
                  <div className='flex-shrink-0'>
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300
                      ${
                        activeAnswer === 'preg-5'
                          ? `bg-color-primary text-white shadow-lg ${
                              company.dark
                                ? 'bg-color-primary-dark'
                                : 'bg-color-primary'
                            }`
                          : `${
                              company.dark
                                ? 'group-hover:bg-color-primary-dark'
                                : 'group-hover:bg-color-primary'
                            } bg-gray-100 text-gray-600 group-hover:text-color-title-light`
                      }`}
                    >
                      <motion.div
                        animate={{
                          rotate: activeAnswer === 'preg-5' ? 180 : 0,
                        }}
                        transition={{
                          duration: 0.3,
                          ease: 'easeInOut',
                        }}
                      >
                        <DropDownIcon className='w-5 h-5' />
                      </motion.div>
                    </div>
                  </div>
                </div>

                {/* Contenido expandible */}
                <AnimatePresence>
                  {activeAnswer === 'preg-5' && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        duration: 0.4,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className='overflow-hidden'
                    >
                      <div className='mt-6 pt-6 border-t border-gray-100'>
                        <p className='text-color-text-light leading-relaxed text-base md:text-lg'>
                          Sí, trabajamos con permutas y consignaciones.
                          Evaluamos tu vehículo y te ofrecemos las mejores
                          condiciones. Contactanos para coordinar una evaluación
                          sin compromiso.
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PreguntasHome;
