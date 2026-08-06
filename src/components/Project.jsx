import React from 'react';
import proj1 from '../assets/proj1.jfif';

const Project = () => {
    const Projects = [
        { id: 1,
            image : proj1,
            name: 'Mini Mart',
            desc: 'Modern E-commerce form',
            tech: ['React','Node.js', 'Mongo']
        },
        { id: 2,
            image : proj1,
            name: 'Beauty Blog',
            desc: 'Blog Form',
            tech: ['React','Node.js', 'MySQL']
        },
        { id: 3,
            image : proj1,
            name: 'Mini Pomodoro Timer',
            desc: 'Small Project',
            tech: ['React','Local Storage']
        },
    ]
  return (
    <section className='py-16 bg-gray-900' id="projects">
        <div className="container mx-auto px-4 max-w-7xl">
            <div className="text-center mb-10">
                <h2 className="text-4xl md:text-5xl font-extrabold text-white">
                    Project.
                </h2>
                <div className="w-28 h-1 bg-cyan-300 mx-auto mt-2 rounded-2xl"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {Projects.map((project) => (
                    <div key={project.id}
                    className="bg-blue-900 rounded-lg overflow-hidden shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300">

                        <img src={project.image} alt="" className="w-full h-44 object-cover hover:opacity-90 transition-opacity duration-300" />
                        <div className="p-4">
                            <h3 className="text-lg font-semibold text-white group-hover:text-primary transition-colors">
                                {project.name}
                            </h3>
                            <p className="text-gray-300 text-sm mt-1 ">
                            {project.desc}
                            </p>
                            <div className="flex flex-wrap gap-1.5 mt-3">
                                {project.tech.map((tec, idx) => (
                                    <span key={idx}
                                    className='text-xs px-2 py-0.5 bg-gray-700 text-cyan-300 rounded hover:text-white transition-colors duration-300'
                                    >

                                        {tec}

                                    </span>
                                ))}
                            </div>
                            
                        </div>
                    </div>
                ))}
            </div>
        </div>
        
    </section>
  );
};

export default Project;