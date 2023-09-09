import {data} from '@/app/data/dataProjects'
import Image from "next/image";

export default function Projects(){

    return (
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl sm:leading-10 md:text-5xl md:leading-13">
            Mis Proyectos
          </h1>
        </div>
        <div className="grid gap-y-8 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3 md:gap-6 lg:gap-10 pt-8">
          {data?.map((obj) => (
            <article
              key={obj.id}
              className="overflow-hidden rounded-xl dark:border-zinc-600 ronded-lg border-gray-100 bg-white shadow-lg dark:bg-black dark:shadow-gray-700 shadow-teal-100"
            >
              <div className="h-56 w-full relative">
                <Image
                  fill
                  src={obj.image}
                  alt={obj.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 sm:p-6 ">
                <a href={obj.link} target="_blank">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                    {obj.title}
                  </h3>
                </a>
                <p className="line-clamp-6 mt-2 text-sm leading-relaxed text-gray-500 dark:text-gray-400">
                  {obj.description}
                </p>
                <a
                  href={obj.link}
                  target="_blank"
                  className="group mt-4 inline-flex items-center  gap-1 text-sm font-medium text-teal-500"
                >
                  ver proyecto..
                  <span className="block transition-all group-hover:ms-0.5">
                    &rarr;
                  </span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    );
}