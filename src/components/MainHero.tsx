import React from 'react';

import config from '../config/index.json';
import configa from '../config/indexa.json';

const MainHero = () => {

  if(localStorage.getItem('lang') == 'a'){
  const { mainHero } = configa;
  return (
    <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
      <div className="sm:text-center lg:text-left">
        <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
          <span className="block xl:inline" style={{color:'#D60000'}}>{mainHero.title}</span>{' '}
          <span className={`block text-primary xl:inline`} style={{color:'black'}}>
            {mainHero.subtitle}
          </span>
        </h1>
        <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
          {mainHero.description}
        </p>
      </div>
    </main>
  );
      }

      else{
          const { mainHero } = config;
          return (
        <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
        <div className="sm:text-center lg:text-left">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block xl:inline" style={{color:'#D60000'}}>{mainHero.title}</span>{' '}
            <span className={`block text-primary xl:inline`} style={{color:'black'}}>
              {mainHero.subtitle}
            </span>
          </h1>
          <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
            {mainHero.description}
          </p>
        </div>
      </main>
    );

      }
};

export default MainHero;
