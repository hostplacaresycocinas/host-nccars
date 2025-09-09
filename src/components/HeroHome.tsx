'use client';

import Link from 'next/link';
import HeroCarousel from './HeroCarousel';
import { motion } from 'framer-motion';

const HeroHome = () => {
  return (
    <section
      id='inicioSection'
      className='flex justify-center overflow-hidden bg-black'
    >
      <div className={`max-w-[1920px] w-full flex flex-col items-center z-10`}>
        <div className='flex justify-center max-w-6xl lg:max-w-[1920px] w-full mx-4 sm:mx-6 md:mx-8 lg:mx-10'>
          <article className='h-[400px] md:h-[480px] lg:h-[600px] xl:h-[680px] relative w-full flex flex-col items-center justify-center md:min-w-[430px] lg:min-w-[540px] z-20'>
            <HeroCarousel />
            <div
              className={`absolute w-full h-full top-0 -right-0 bg-black/65 md:bg-black/75 -z-20`}
            ></div>

            <div className='flex flex-col gap-2 md:gap-3 items-center font-oswald'>
              <div className='md:gap-3 text-nowrap'>
                <motion.h2
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className='uppercase text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-[85px] font-bold text-color-primary-light'
                >
                  Concesionario
                  {/* Tu próximo vehículo */}
                </motion.h2>
              </div>
              <div className='md:gap-3 text-nowrap lg:mb-2'>
                <motion.h2
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className='uppercase text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-[85px] font-bold text-color-title-light'
                >
                  Multimarcas
                  {/* esta en {company.name} */}
                </motion.h2>
              </div>
            </div>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className='text-lg lg:text-xl xl:text-2xl text-center text-color-text-light mx-4 max-w-md sm:max-w-md lg:max-w-lg xl:max-w-xl mb-1 sm:mb-2 md:mb-4 mt-1'
            >
              Tenemos el auto que buscas: Vehículos seleccionados, usados y 0km.
              ¡Consultanos!
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className='flex flex-col sm:flex-row gap-3 md:gap-4 mb-2 md:mb-1 lg:mb-0'
            >
              <Link
                href='/catalogo'
                className='flex group relative px-6 md:px-8 py-3.5 md:py-4 bg-color-primary hover:bg-color-primary-dark text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform'
              >
                <span className='relative z-10 flex items-center justify-center gap-2'>
                  <span>Explorar Catálogo</span>
                </span>
              </Link>
            </motion.div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default HeroHome;
