import Image from "next/image";
import Me from "@/public/avatarFabricio.png";
import Link from "next/link";

function About() {
  return (
    <>
      <div className="divide-y divide-gray-100 dark:divide-gray-700">
        <div className="space-y-2 pt-8  pb-8 md:space-x-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl sm:leading-10 md:text-5xl md:leading-13">
            Hola Mundo!!
          </h1>
        </div>
        <div className="items-center space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
          <div className="flex flex-col items-center pt-8">
            <Image
              alt="Picture of Fabricio"
              src={Me}
              className="h-48 w-48 rounded-full object-cover object-top"
            />
            <h3 className="pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight">
              Fabricio Spiritosi
            </h3>
            <p className="text-gray-500 dark:text-gray-300 text-center">
              Hola! Mi nombre es Fabricio y soy Desarrollador Full Stack
            </p>
            {/* <div className="flex space-x-5 pt-6">
              <a href="" target="_blank">
                <svg
                  viewBox="0 0 1024 1024"
                  fill="currentColor"
                  className="w-8 h-8 text-teal-500 hover:text-teal-600"
                >
                  <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0138.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z" />
                </svg>
              </a>
              <a href="" target="_blank">
                <svg
                  viewBox="0 0 1024 1024"
                  fill="currentColor"
                  className="w-8 h-8 text-teal-500 hover:text-teal-600"
                >
                  <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM349.3 793.7H230.6V411.9h118.7v381.8zm-59.3-434a68.8 68.8 0 1168.8-68.8c-.1 38-30.9 68.8-68.8 68.8zm503.7 434H675.1V608c0-44.3-.8-101.2-61.7-101.2-61.7 0-71.2 48.2-71.2 98v188.9H423.7V411.9h113.8v52.2h1.6c15.8-30 54.5-61.7 112.3-61.7 120.2 0 142.3 79.1 142.3 181.9v209.4z" />
                </svg>
              </a>
              <a href="" target="_blank">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-8 h-8 text-teal-500 hover:text-teal-600"
                >
                  <path d="M18.73 5.41l-1.28 1L12 10.46 6.55 6.37l-1.28-1A2 2 0 002 7.05v11.59A1.36 1.36 0 003.36 20h3.19v-7.72L12 16.37l5.45-4.09V20h3.19A1.36 1.36 0 0022 18.64V7.05a2 2 0 00-3.27-1.64z" />
                </svg>
              </a>
            </div> */}
          </div>
          <div className="prose max-w-none prose-lg pt-8 dark:prose-invert xl:col-span-2 pb-8">
            <p>
              Soy un Desarrollador Full Stack apasionado por el código y la
              resolución lógica. Mi camino hacia la programación comenzó de
              manera autodidacta, donde descubrí una fascinación innata por la
              creación de soluciones tecnológicas. Decidí llevar mi pasión al
              siguiente nivel y tomé la decisión de embarcarme en el emocionante
              viaje del aprendizaje formal. Con el bootcamp de SoyHenry, afiancé
              mis habilidades y adquirí una hoja de ruta bien definida para
              crecer como profesional.
            </p>
            <p>
              Lo que realmente me apasiona es enfrentar desafíos en ambos
              extremos de la pila tecnológica. Ya sea resolviendo problemas
              complejos en el Back-End o dando vida a interfaces de usuario
              atractivas en el Front-End, disfruto cada paso del proceso de
              desarrollo. Mi experiencia me ha llevado a descubrir otra faceta
              que me apasiona: el diseño de UI. Me encanta experimentar con
              estilos, colores y estructuras para crear experiencias visuales
              que sean atractivas y funcionales.
            </p>
            <p>
              Como Desarrollador Full Stack, mi objetivo es seguir creciendo en
              mi carrera y contribuir a proyectos innovadores que marquen la
              diferencia en la vida de las personas. Estoy emocionado por seguir
              aprendiendo y enfrentar nuevos desafíos que me permitan seguir
              expandiendo mis habilidades en este emocionante campo de la
              tecnología.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
