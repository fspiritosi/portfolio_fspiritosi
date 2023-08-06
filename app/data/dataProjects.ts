export default interface MyData {
    id: number;
  title: string;
  description: string;
  image: string;
  link: string;
  state: string;
}


export const data:MyData[] = [
    {
        id:1,
        title: 'Gym-Go',
        description: 'GymGo es una revolucionaria aplicación web diseñada para facilitar la gestión y operación eficiente de gimnasios modernos. Con un enfoque innovador en la flexibilidad y la comodidad, GymGo ofrece a los administradores de gimnasios y a los usuarios una experiencia única en el mundo del fitness',
        image:'https://res.cloudinary.com/gym-go/image/upload/v1691063114/Captura_desde_2023-08-03_08-44-57_vwrcqq.png',
        link: 'https://gym-go-five.vercel.app/',
        state: 'active'
    },
        {
        id:2,
        title: 'Dog World',
        description: 'Dog World es una aplicación que permite conocer las diferentes tipos de razas de perros, filtrarlas por nombre, tamaño, longevidad, todo esto, consumiendo la API:  TheDogApi (https://thedogapi.com/)',
        image:'https://res.cloudinary.com/gym-go/image/upload/v1691345297/Captura_desde_2023-08-06_15-07-55_aqutvt.png',
        link: 'https://vercel.com/fspiritosi/pi-dogs-deploy',
        state: 'active'
    }
]