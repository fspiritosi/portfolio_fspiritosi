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
    }
]