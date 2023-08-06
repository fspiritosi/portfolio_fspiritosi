import React from 'react'

function Footer() {
  return (
    <div className="mt-auto mb-0 w-full bg-teal-400 p-4 flex justify-center dark:bg-teal-800">
      <div className="text-sm font-bold flex justify-around w-full align-middle">
        <div className="my-auto mx-0">
          <p className=" text-gray-800 text-xs dark:text-gray-200">
            Created By @fspiri
          </p>
        </div>
        {/* <div className="my-auto mx-0">
          <p className=" text-gray-800 text-xs">
            +54 9 2995810476
          </p>
        </div> */}
        <div className="flex space-x-5">
          <a href="https://github.com/fspiritosi" target="_blank">
            <svg
              viewBox="0 0 1024 1024"
              fill="currentColor"
              className="w-8 h-8  text-gray-800 hover:text-gray-700  dark:text-gray-200 dark:hover:text-gray-400"
            >
              <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0138.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z" />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/fabriciospiritosi/"
            target="_blank"
          >
            <svg
              viewBox="0 0 1024 1024"
              fill="currentColor"
              className="w-8 h-8  text-gray-800 hover:text-gray-700  dark:text-gray-200 dark:hover:text-gray-400"
            >
              <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM349.3 793.7H230.6V411.9h118.7v381.8zm-59.3-434a68.8 68.8 0 1168.8-68.8c-.1 38-30.9 68.8-68.8 68.8zm503.7 434H675.1V608c0-44.3-.8-101.2-61.7-101.2-61.7 0-71.2 48.2-71.2 98v188.9H423.7V411.9h113.8v52.2h1.6c15.8-30 54.5-61.7 112.3-61.7 120.2 0 142.3 79.1 142.3 181.9v209.4z" />
            </svg>
          </a>
          <a href="https://www.gmail.com" target="_blank">
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-8 h-8 text-gray-800 hover:text-gray-700  dark:text-gray-200 dark:hover:text-gray-400"
            >
              <path d="M18.73 5.41l-1.28 1L12 10.46 6.55 6.37l-1.28-1A2 2 0 002 7.05v11.59A1.36 1.36 0 003.36 20h3.19v-7.72L12 16.37l5.45-4.09V20h3.19A1.36 1.36 0 0022 18.64V7.05a2 2 0 00-3.27-1.64z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer