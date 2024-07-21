import React from 'react';

const About = () => {
  return (
    <div name="about" className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-16'>
      <h1 className='text-3xl font-bold mb-5'>About</h1>
      <p className='mb-5'>
        As an emerging developer, I, Ammara, am passionate about Android and web development. I am dedicated to crafting
        innovative digital experiences and continuously learning to improve my skills.
      </p>
      
      <h2 className='text-green-500 font-bold text-xl mb-3'>Education & Training</h2>
      <ul className='list-disc ml-5 mb-5'>
        <li>
          <strong>Bachelor of Science in Computer Science</strong> - GC University, 2019-2023
        </li>
      </ul>

      <h2 className='text-green-500 font-bold text-xl mb-3'>Internships</h2>
      <ul className='list-disc ml-5 mb-5'>
        <li>
          <strong>Android Development Intern</strong> - 2024
          <p className='ml-5 mt-2'>
            Developed a full-stack Android eCommerce application using Android Java, Firebase, and integrated AI capabilities with Google Cloud Services.
          </p>
        </li>
      </ul>

      <h2 className='text-green-500 font-bold text-xl mb-3'>Skills & Expertise</h2>
      <ul className='list-disc ml-5 mb-5'>
        <li>Android Development (Java, Kotlin)</li>
        <li>Web Development (React, Node.js, MongoDB)</li>
        <li>AI Integration with Google Cloud Services</li>
        <li>Proficient in UI and UX design using Figma</li>
      </ul>

      <h2 className='text-green-500 font-bold text-xl mb-3'>Personal Projects</h2>
      <ul className='list-disc ml-5 mb-5'>
        <li>
          <strong>Full-Stack Android Application</strong>
          <p className='ml-5 mt-2'>
            Developed a full-stack Android application using Android Java, Firebase, and API Integration.
          </p>
        </li>
        <li>
          <strong>Portfolio Website</strong>
          <p className='ml-5 mt-2'>
            Developed a personal portfolio website to showcase projects, skills, and achievements.
          </p>
        </li>
      </ul>

      <h2 className='text-green-500 font-bold text-xl mb-3'>Achievements</h2>
      <ul className='list-disc ml-5 mb-5'>
        <li>
          Completed a Goldman Sachs job simulation on Forage, identified outdated password hashing with Hashcat, and proposed security improvements.
        </li>
        <li>
          Completed a job simulation focused on developing an electric vehicle app, including creating user personas, designing wireframes, and developing app flow prototypes.
        </li>
      </ul>

    </div>
  );
}

export default About;
