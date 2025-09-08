export const company = {
  dark: false,
  darkmode: true,
  shortAdress: true,
  favicon: false,
  price: true,
  objectCover: '50%',
  id: 'automotors',
  name: 'Auto Motors',
  adress: null,
  city: null,
  email: 'automotors@gmail.com',
  instagram: 'automotors.cba',
  facebook: null,
  whatsapp: ['3512471838', '3512335243'],
  googlemapsLink: null,
  googlemaps: null,
  openDays: null,
  footer:
    'Compra y Venta de Autos: Vehículos seleccionados, atención personalizada.',
};

export const API_BASE_URL = 'https://dealership.agenciagrvity.com';
export const TENANT = 'accotto-automotores';

export const metadataCompany = {
  metadataBase: 'https://automotors.vercel.app/',
  title: 'Auto Motors - Compra y Venta de Autos',
  description:
    'Compra y Venta de Autos: Vehículos seleccionados, atención personalizada.',
};

export const sedes = [
  {
    id: 1,
    title: 'Auto Motors Castro Barros',
    adress: 'Av. Castro Barros 893',
    city: 'Córdoba',
    tel: null,
    whatsapp: '1122334455',
    schedule: ['Lunes a Viernes 09:00 a 18:00hs', 'Sábados 09:30 a 13:30hs'],
    appointment: 'https://maps.app.goo.gl/PF6Hr74Z5BPHQBLF7',
    image: 'sede-1.webp',
  },
  {
    id: 2,
    title: 'Auto Motors Sagrada Familia',
    adress: 'Av. Sagrada Familia 652',
    city: 'Córdoba',
    tel: null,
    whatsapp: '1122334455',
    schedule: ['Lunes a Viernes 09:00 a 18:00hs', 'Sábados 09:30 a 13:30hs'],
    appointment: 'https://maps.app.goo.gl/DFz8CTtnFTP8AWZ59',
    image: 'sede-2.webp',
  },
];

// Cambie el archivo data.json, necesito que actualices la informacion de catalogo.json. Las images tomalas de images de data.json, la descripcion tomala de caption de data.json, pero necesito que el texto este parseado, que no este todo junto sin espacios y saltos de linea. En name pone la marca y el modelo del vehiculo en title case, marca, marcaId todo esto acorde a la informacion de caption. Si en caption no se dice kilometraje o precio pone 999999, categoria estimala para el vehiculo (categorias tipicas de vehiculos en argentina. como utilitario, deportivo, suv, hatchback, etc). Transmision, motor, combustible y puertas estimalas acorde al vehiculo. La cantidad de vehiculos tiene que ser la de data.json, si en catalogo.json hay otros vehiculos removelos, los vehiclos de catalogo json tienen que ser los mismos que en data.json. No hagas un script, simplemente actualizalo con ia.

export const preguntas = [
  {
    id: 'preg-1',
    question: '¿Qué métodos de pago aceptan?',
    answer:
      'Aceptamos efectivo, transferencias bancarias y financiación a través de entidades financieras. También trabajamos con permutas y consignaciones. Consultanos para conocer las opciones disponibles según el vehículo.',
  },
  {
    id: 'preg-2',
    question: '¿Los vehículos están revisados?',
    answer:
      'Sí, todos nuestros vehículos pasan por una revisión técnica antes de ser ofrecidos. Verificamos el estado mecánico, documentación y funcionamiento general para garantizar la calidad.',
  },
  {
    id: 'preg-3',
    question: '¿Dan garantía en los vehículos?',
    answer:
      'Ofrecemos garantía según el estado y antigüedad del vehículo. Los términos específicos se acuerdan al momento de la compra, siempre priorizando la transparencia con nuestros clientes.',
  },
  {
    id: 'preg-4',
    question: '¿Puedo ir a ver los autos?',
    answer:
      '¡Por supuesto! Estamos ubicados en Av. Juan Bautista Alberdi 7008, CABA. Te invitamos a visitarnos en nuestro horario de atención para conocer nuestros vehículos personalmente.',
  },
  {
    id: 'preg-5',
    question: '¿Hacen permutas y consignaciones?',
    answer:
      'Sí, trabajamos con permutas y consignaciones. Evaluamos tu vehículo y te ofrecemos las mejores condiciones. Contactanos para coordinar una evaluación sin compromiso.',
  },
];

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
