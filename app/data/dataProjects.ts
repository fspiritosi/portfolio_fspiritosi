import BannerGymGo from "@/app/assets/bannerGymGo.png";
import BannerDogWorld from "@/app/assets/background2.jpg";



export default interface MyData {
    id: number;
  title: string;
  description: string;
  image: any;
  link: string;
  state: string;
  linkGithub:string
}


export const data:MyData[] = [
    {
        id:1,
        title: 'Gym-Go',
        description: 'GymGo es una revolucionaria aplicación web diseñada para facilitar la gestión y operación eficiente de gimnasios modernos. Con un enfoque innovador en la flexibilidad y la comodidad, GymGo ofrece a los administradores de gimnasios y a los usuarios una experiencia única en el mundo del fitness',
        image:BannerGymGo,
        link: 'https://gym-go-five.vercel.app/',
        linkGithub:"https://github.com/fspiritosi/gym-go",
        state: 'active'
    },
        {
        id:2,
        title: 'Dog World',
        description: 'Dog World es una aplicación que permite conocer las diferentes tipos de razas de perros, filtrarlas por nombre, tamaño, longevidad, todo esto, consumiendo la API:  TheDogApi (https://thedogapi.com/)',
        image:BannerDogWorld,
        link: 'https://vercel.com/fspiritosi/pi-dogs-deploy',
        linkGithub:"https://github.com/fspiritosi/PI-Dogs-Deploy",
        state: 'active'
    }
]