export const company = {
  dark: false,
  darkmode: true,
  shortAdress: true,
  favicon: false,
  price: false,
  objectCover: '50%',
  id: 'jcaautos',
  name: 'JCA AUTOS',
  adress: null,
  city: null,
  email: 'jcaautosseleccionados@gmail.com',
  instagram: 'jcaautosseleccionados',
  facebook: 'https://www.facebook.com/JCA.Autos.Seleccionados/',
  whatsapp: ['3484540518'],
  googlemapsLink: null,
  googlemaps: null,
  openDays: null,
  footer:
    'Compra y Venta de Autos: Vehículos seleccionados, atención personalizada.',
};

export const API_BASE_URL = 'https://dealership.agenciagrvity.com';
export const TENANT = 'accotto-automotores';

export const metadataCompany = {
  metadataBase: 'https://jcaautos.vercel.app/',
  title: 'JCA AUTOS - Compra y Venta de Autos',
  description:
    'Compra y Venta de Autos: Vehículos seleccionados, atención personalizada.',
};

export const sedes = [
  {
    id: 1,
    title: 'JCA 25 de Mayo',
    adress: 'Av. 25 de Mayo 841',
    city: 'Escobar',
    tel: null,
    whatsapp: '1122334455',
    schedule: ['Lunes a Sábados 09:00 a 19:00hs'],
    appointment: 'https://maps.app.goo.gl/bg1XMiuiKhBx7x3T6',
    image: 'sede-1.webp',
  },
  {
    id: 2,
    title: 'JCA Tapia de cruz',
    adress: 'Av. Tapia de cruz 1363',
    city: 'Escobar',
    tel: null,
    whatsapp: '1122334455',
    schedule: ['Lunes a Sábados 09:00 a 19:00hs'],
    appointment: 'https://maps.app.goo.gl/4ktuiDMRxc1LCCcE8',
    image: 'sede-2.webp',
  },
  {
    id: 3,
    title: 'JCA Sarmiento',
    adress: 'Av. Sarmiento 3025',
    city: 'Matheu',
    tel: null,
    whatsapp: '1122334455',
    schedule: ['Lunes a Sábados 09:00 a 19:00hs'],
    appointment: 'https://maps.app.goo.gl/qVkmMqiJmqLHrSrt7',
    image: 'sede-3.webp',
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
