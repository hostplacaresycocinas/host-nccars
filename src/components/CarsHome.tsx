'use client';

import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { company, API_BASE_URL, TENANT } from '@/app/constants/constants';

interface FirstImage {
  s3ImageUrl: string;
  s3ThumbnailUrl: string;
  order: number;
}

interface ApiCar {
  id: string;
  credentialId: string;
  itemId: string;
  title: string;
  status: string;
  categoryId: string;
  price: string;
  availableQuantity: number;
  soldQuantity: number;
  condition: string;
  listingTypeId: string;
  permalink: string;
  thumbnailUrl: string;
  currencyId: string;
  lastSyncedAt: string;
  brand: string;
  model: string;
  year: number;
  kilometers: number;
  fuelType: string;
  transmission: string;
  doors: number;
  color: string;
  engineSize: string;
  attributes: string;
  createdAt: string;
  updatedAt: string;
  firstImage: FirstImage;
}

interface CarsHomeProps {
  title: string;
}

const CarsHome = ({ title }: CarsHomeProps) => {
  const [emblaRef] = useEmblaCarousel({ dragFree: true, loop: false });
  const [clicked, setClicked] = useState(false);
  const [vehiculos, setVehiculos] = useState<ApiCar[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadVehiculos = async () => {
      setLoading(true);
      try {
        // Construir query parameters para obtener vehículos destacados
        const params = new URLSearchParams();
        params.append('tenant', TENANT);
        params.append('page', '1');
        params.append('limit', '10'); // Máximo 10 vehículos

        const response = await fetch(
          `${API_BASE_URL}/api/items?${params.toString()}`
        );

        if (!response.ok) {
          throw new Error(`Error ${response.status}: ${response.statusText}`);
        }

        const data = await response.json();

        // Filtrar vehículos que tienen al menos 1 imagen y están activos
        const filteredCars = (data.items || []).filter(
          (car: ApiCar) =>
            car.firstImage &&
            car.firstImage.s3ThumbnailUrl &&
            car.status === 'active'
        );

        setVehiculos(filteredCars);
      } catch (err) {
        console.error('Error al cargar vehículos:', err);
        setError('No se pudieron cargar los vehículos');
      } finally {
        setLoading(false);
      }
    };

    loadVehiculos();
  }, []);

  if (loading) {
    return (
      <section className='flex justify-center w-full bg-color-bg-primary'>
        <div className='max-w-7xl w-full mx-4 sm:mx-6 md:mx-8 lg:mx-10 overflow-hidden'>
          <div className='flex items-center mb-4 md:mb-6 lg:mb-8'>
            <div className='h-10 w-1 bg-color-primary mr-4'></div>
            <h3 className='text-2xl sm:text-3xl text-color-title tracking-wide'>
              {title}
            </h3>
          </div>
          <div className='flex justify-center py-8'>
            <div className='animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-color-primary'></div>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className='flex justify-center w-full bg-color-bg-primary'>
        <div className='max-w-7xl w-full mx-4 sm:mx-6 md:mx-8 lg:mx-10 overflow-hidden'>
          <div className='flex items-center mb-4 md:mb-6 lg:mb-8'>
            <div className='h-10 w-1 bg-color-primary mr-4'></div>
            <h3 className='text-2xl sm:text-3xl text-color-title tracking-wide'>
              {title}
            </h3>
          </div>
          <div className='text-center py-8 text-red-500'>{error}</div>
        </div>
      </section>
    );
  }

  if (vehiculos.length === 0) {
    return (
      <section className='flex justify-center w-full bg-color-bg-primary'>
        <div className='max-w-7xl w-full mx-4 sm:mx-6 md:mx-8 lg:mx-10 overflow-hidden'>
          <div className='flex items-center mb-4 md:mb-6 lg:mb-8'>
            <div className='h-10 w-1 bg-color-primary mr-4'></div>
            <h3 className='text-2xl sm:text-3xl text-color-title tracking-wide'>
              {title}
            </h3>
          </div>
          <div className='text-center py-8 text-color-text'>
            No hay vehículos disponibles
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className='flex justify-center w-full bg-color-bg-primary'>
      <div className='max-w-7xl w-full mx-4 sm:mx-6 md:mx-8 lg:mx-10 overflow-hidden'>
        <div className='flex items-center mb-4 md:mb-6 lg:mb-8'>
          <div className='h-10 w-1 bg-color-primary mr-4'></div>
          <h3 className='text-2xl sm:text-3xl text-color-title tracking-wide'>
            {title}
          </h3>
        </div>

        <div
          onMouseUp={() => setClicked(false)}
          onMouseDown={() => setClicked(true)}
          ref={emblaRef}
          className={`${
            clicked ? 'cursor-grabbing' : 'cursor-grab'
          } select-none`}
        >
          <div className='flex gap-6 sm:gap-7 md:gap-8'>
            {/* Vehículos */}
            {vehiculos.map((car) => (
              <Link
                href={`/catalogo/${car.itemId}`}
                className='w-full relative overflow-hidden flex-[0_0_75%] min-[500px]:flex-[0_0_55%] sm:flex-[0_0_40%] lg:flex-[0_0_30%] xl:flex-[0_0_26%]'
                key={car.id}
              >
                {/* Card container con borde que se ilumina */}
                <div className='relative overflow-hidden group-hover:border-color-primary transition-all duration-500 h-full shadow-[0_8px_30px_-15px_rgba(0,0,0,0.7)] group-hover:shadow-[0_8px_30px_-10px_rgba(233,0,2,0.2)]'>
                  {car.status !== 'active' && (
                    <div className='absolute top-0 left-0 w-full h-full bg-black/70 flex items-center justify-center z-20'>
                      <span className='bg-red-500 text-white text-sm font-medium px-3 py-1.5 rounded'>
                        Pausado
                      </span>
                    </div>
                  )}

                  {/* Contenedor de la imagen */}
                  <div className='relative overflow-hidden aspect-[4/3] rounded-xl group'>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, ease: 'easeOut' }}
                      className='w-full h-full '
                    >
                      <Image
                        priority
                        width={600}
                        height={600}
                        className='object-cover w-full h-full transition-transform duration-700'
                        src={
                          car.firstImage?.s3ThumbnailUrl
                            ? car.firstImage.s3ThumbnailUrl
                            : '/assets/placeholder.webp'
                        }
                        alt={`${car.title || car.model}`}
                      />
                    </motion.div>

                    {/* Overlay con "Ver más" al hacer hover */}
                    <div className='absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                    <div className='absolute inset-0 opacity-0 group-hover:opacity-100 flex items-center justify-center'>
                      <div className='flex flex-col items-center gap-2 text-white'>
                        <div className='w-12 h-12 rounded-full bg-white/20 hover:bg-white/30 transition-colors flex items-center justify-center border border-white/30 [backdrop-filter:blur(4px)]'>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            className='w-6 h-6'
                            fill='none'
                            viewBox='0 0 24 24'
                            stroke='currentColor'
                          >
                            <path
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              strokeWidth={2}
                              d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
                            />
                            <path
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              strokeWidth={2}
                              d='M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z'
                            />
                          </svg>
                        </div>
                        <span className='text-sm font-medium tracking-wide'>
                          Ver más
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Información del vehículo */}
                  <div className='py-3 relative group'>
                    <h3
                      className={`${
                        company.dark
                          ? 'group-hover:text-color-primary'
                          : 'group-hover:text-color-primary-dark'
                      } text-color-title text-lg md:text-xl font-bold tracking-tight truncate md:mb-1 transition-colors duration-300`}
                    >
                      {car.title || car.model}
                    </h3>

                    {car.price && parseFloat(car.price) > 0 ? (
                      <div
                        className={`${
                          company.price ? '' : 'hidden'
                        } text-color-primary text-lg md:text-xl font-bold tracking-tight truncate md:mb-1 transition-colors duration-300`}
                      >
                        {car.currencyId === 'ARS' ? '$' : 'US$'}
                        {parseFloat(car.price).toLocaleString(
                          car.currencyId === 'ARS' ? 'es-AR' : 'en-US'
                        )}
                      </div>
                    ) : (
                      ''
                    )}

                    {/* Diseño minimalista con separadores tipo | */}
                    <div className='flex flex-wrap items-center text-color-text font-medium'>
                      <span className=''>{car.brand}</span>
                      <span
                        className={`${
                          company.dark
                            ? 'text-color-primary'
                            : 'text-color-primary'
                        } mx-2`}
                      >
                        |
                      </span>
                      <span>{car.year}</span>
                    </div>

                    {/* Precio o etiqueta destacada */}
                    <div className='flex justify-between items-center text-color-text mt-0.5'>
                      {car.kilometers === 0 ? (
                        <span className='text-sm font-semibold uppercase tracking-wider text-color-primary'>
                          Nuevo <span className='text-color-primary'>•</span>{' '}
                          {car.kilometers.toLocaleString('es-ES')} km
                        </span>
                      ) : (
                        <span className='text-sm text-color-text font-medium uppercase tracking-wider'>
                          Usado <span className='text-color-primary'>•</span>{' '}
                          {car.kilometers.toLocaleString('es-ES')} km
                        </span>
                      )}
                    </div>

                    <div className='md:mt-1'>
                      <span
                        className={`${
                          company.dark
                            ? 'text-color-primary group-hover:text-color-primary-dark'
                            : 'text-color-primary group-hover:text-color-primary-dark'
                        } inline-flex items-center  transition-colors font-semibold`}
                      >
                        Ver más
                        <span className='inline-block transform translate-x-0 group-hover:translate-x-1 transition-transform duration-300 ml-1'>
                          →
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarsHome;
