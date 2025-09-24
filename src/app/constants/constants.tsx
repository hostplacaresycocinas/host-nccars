export const company = {
  dark: false,
  darkmode: true,
  shortAdress: true,
  favicon: false,
  price: true,
  objectCover: '50%',
  id: 'nccars',
  name: 'NC.CARS',
  adress: null,
  city: null,
  email: 'info@nccars.com.ar',
  instagram: 'nccarsmultimarcas',
  tiktok: 'nc.carsmultimarcas',
  facebook: null,
  whatsapp: ['1164236622'],
  googlemapsLink: null,
  googlemaps: null,
  openDays: null,
  footer:
    'Compra y Venta de Autos: Vehículos seleccionados, atención personalizada.',
};

export const API_BASE_URL = 'https://only-motors.agenciagrvity.com';
export const TENANT = 'nc-cars';

export const metadataCompany = {
  metadataBase: 'https://nccars.com.ar/',
  title: 'NC Cars - Compra y Venta de Autos',
  description:
    'Compra y Venta de Autos: Vehículos seleccionados, atención personalizada.',
};

export const sedes = [
  {
    id: 1,
    title: 'NC Cars Moreno',
    adress: 'Acceso Oeste KM.43',
    city: 'Moreno',
    tel: null,
    whatsapp: '1122334455',
    schedule: ['Lunes a Viernes 11:00 a 21:00hs', 'Sábados 11:00 a 18:00hs'],
    appointment: 'https://maps.app.goo.gl/Re22SJCSSaEam6EM7',
    image: 'sede-1.webp',
  },
  {
    id: 2,
    title: 'NC Cars CABA',
    adress: 'Av. Boyacá 2240',
    city: 'CABA',
    tel: null,
    whatsapp: '1122334455',
    schedule: ['Lunes a Viernes 11:00 a 21:00hs', 'Sábados 11:00 a 18:00hs'],
    appointment: 'https://maps.app.goo.gl/6bCN4CH4JY4djBxJ7',
    image: 'sede-2.webp',
  },
];

// Cambie el archivo data.json, necesito que actualices la informacion de catalogo.json. Las images tomalas de images de data.json, la descripcion tomala de caption de data.json, pero necesito que el texto este parseado, que no este todo junto sin espacios y saltos de linea. En name pone la marca y el modelo del vehiculo en title case, marca, marcaId todo esto acorde a la informacion de caption. Si en caption no se dice kilometraje o precio pone 999999, categoria estimala para el vehiculo (categorias tipicas de vehiculos en argentina. como utilitario, deportivo, suv, hatchback, etc). Transmision, motor, combustible y puertas estimalas acorde al vehiculo. La cantidad de vehiculos tiene que ser la de data.json, si en catalogo.json hay otros vehiculos removelos, los vehiclos de catalogo json tienen que ser los mismos que en data.json. No hagas un script, simplemente actualizalo con ia.

export const navigation = [
  {
    id: '0',
    title: 'Inicio',
    url: '/',
  },
  {
    id: '1',
    title: 'Catálogo',
    url: '/catalogo',
  },
  {
    id: '2',
    title: 'Nosotros',
    url: '/nosotros',
  },
  {
    id: '3',
    title: 'Contacto',
    url: '/contacto',
    button: false,
  },
];
