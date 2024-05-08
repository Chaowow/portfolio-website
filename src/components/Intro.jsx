import React from 'react';

function Intro() {
  return (
    <div 
      className=
      'flex items-center justify-center flex-col text-center pt-20 pb-6'
    >
      <h1 className='text-4xl md:text-7xl mb-1 md:mb-3 font-bold'>
        Frankie
      </h1>
      <p className='text-base md:text-xl mb-3 font-medium'>
        Software Engineer & Web Developer
      </p>
      <p className='text-sm max-w-xl mb-6 font-bold'>
        I am a passionate full-stack developer from GA! 
        As an optimistic developer who loves creating products and 
        developing innovative solutions, I specialize in React, JavaScript, CSS, 
        HTML, Tailwind, Vite, Express, Node.js, Python, and more.
        <br /> 
        I graduated from Bloom Institute of Technology, where I built a 
        strong foundation in software engineering. My goal is to continuously 
        refine my full-stack developer skills and expand my expertise across 
        languages, frameworks, and libraries, all while helping others develop 
        impactful digital solutions. I am always excited to connect with 
        fellow developers, clients, or potential collaborators, so feel free to 
        reach out via the Contact section.
      </p>
    </div>
  );
}

export default Intro;