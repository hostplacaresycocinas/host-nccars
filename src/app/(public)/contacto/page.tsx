'use client';

import { company, sedes } from '@/app/constants/constants';
import LocationIcon from '@/components/icons/LocationIcon';

import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';

const ContactoPage = () => {
  return (
    <div className='min-h-screen bg-white'>
      <Header />

      <div className=''>
        {/* Hero Section con imagen de fondo */}
        <section className='relative h-44 md:h-60 lg:h-72 flex items-center justify-center overflow-hidden'>
          {/* Imagen de fondo con overlay */}
          <div className='absolute inset-0 z-0'>
            <Image
              src='/assets/contacto/contacto-banner.webp'
              alt={`Equipo de ${company.name}`}
              fill
              className='object-cover'
              priority
            />
            <div className='absolute inset-0 bg-black/80 md:bg-black/70'></div>
          </div>

          {/* Contenido centrado */}
          <div className='relative z-10 text-center px-4 max-w-4xl mx-auto'>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className='text-2xl md:text-3xl lg:text-4xl font-semibold text-color-primary-light mb-3 md:mb-4 lg:mb-6'
            >
              Contacto
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className='text-xl md:text-2xl text-white/90 font-medium leading-relaxed'
            >
              Contactanos para cualquier consulta
            </motion.p>
          </div>
        </section>

        {/* Sección de Sedes */}
        <section className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16'>
          <div className='space-y-8 md:space-y-10 lg:space-y-16'>
            {sedes.map((sede, index) => (
              <motion.div
                key={sede.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true, margin: '0px 0px -100px 0px' }}
                className=''
              >
                {/* Imagen de la sede en formato 16:9 */}
                <a
                  href={sede.appointment}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='block group'
                >
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true, margin: '0px 0px -100px 0px' }}
                    className='relative w-full h-[220px] sm:h-[300px] md:h-[350px] lg:h-[400px] xl:h-[450px] rounded-xl sm:rounded-2xl overflow-hidden shadow-xl sm:shadow-2xl'
                  >
                    <Image
                      src={`/assets/sedes/${sede.image}`}
                      alt={`${sede.title} - ${company.name}`}
                      fill
                      className='object-cover transition-transform duration-1000 group-hover:scale-105'
                      priority={index === 0}
                      style={{
                        objectPosition: `center 30%`,
                      }}
                    />
                    {/* Overlay sutil */}
                    <div className='absolute inset-0 bg-gradient-to-t from-black/80 to-black/50'></div>

                    {/* Título sobre la imagen */}
                    <div className='absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6'>
                      <div className='flex flex-col sm:flex-row sm:justify-between sm:items-end gap-3 sm:gap-0'>
                        <div className='flex-1'>
                          <h3 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-color-title-light mb-1 sm:mb-2'>
                            {sede.title}
                          </h3>
                          <p className='text-sm sm:text-base md:text-lg lg:text-xl text-white/90 mb-2 sm:mb-3'>
                            {sede.adress}, {sede.city}
                          </p>

                          {/* Horarios */}
                          <div className='mb-2 sm:mb-3'>
                            {sede.schedule.map((schedule, idx) => (
                              <p
                                key={idx}
                                className='text-white/90 text-xs sm:text-sm md:text-base lg:text-lg'
                              >
                                {schedule}
                              </p>
                            ))}
                          </div>
                        </div>

                        {/* Enlace a Google Maps */}
                        <div
                          onClick={(e) => e.stopPropagation()}
                          className='sm:ml-6'
                        >
                          <div className='inline-flex items-center px-3 py-2 sm:px-4 sm:py-2 bg-white/20 backdrop-blur-sm text-white rounded-lg hover:bg-white/30 transition-colors duration-300 border border-white/30 cursor-pointer text-xs sm:text-sm md:text-base'>
                            <LocationIcon className='w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2 flex-shrink-0' />
                            <span className='hidden sm:inline'>
                              Ver en Google Maps
                            </span>
                            <span className='sm:hidden'>Maps</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </a>
              </motion.div>
            ))}
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default ContactoPage;
