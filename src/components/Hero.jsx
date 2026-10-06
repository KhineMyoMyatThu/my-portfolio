import React from 'react'
import { Download } from 'lucide-react'
import myPhoto from '../assets/myPhoto.jpg'
const Hero = () => {

    return(
        <section className= 'relative w-full' data-aos='zoom-in-up' id='home'> 
        <div className="absolute top-0 inset-x-0 h-64 flex items-start">
            <div className="h-24 w-2/3 bg-gradient-to-r from-[#0c7fac] blur-2xl opacity-40"></div>
            <div className="h-20 w-3/4 bg-gradient-to-r from-[#289eff] opacity-40 blur-2xl"></div>
        </div>

        <div className="w-full px-5 sm:px-8 md:px-12 lg:px-8 max-w-5xl lg:max-w-7xl mx-auto relative">
            <div className="grid lg:grid-cols-2 gap-10 xl:gap-14 relative pt-24 lg:max-w-none max-w-2xl md:max-w-3xl mx-auto">
                <div className="lg:py-6 ">
                    <div className="text-center lg:text-left">
                        <h1 className="pt-4 text-white font-bold text-4xl md:text-5xl lg:text-6xl">
                            Hi, I'm {" "}

                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-300">
                                KhineMyo
                            </span>
                        </h1> 
                    </div>
                    <p className='text-gray-300 pt-8 text-center'>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo minima quasi et suscipit nemo fugit sit aliquid praesentium laudantium amet cupiditate nihil, exercitationem sapiente assumenda sint consequatur magni dicta quidem!
                    </p>
                    <button className="border-white border px-6 md:px-7 py-3 mt-3 rounded-full group w-full sm:w-max flex justify-center items-center gap-2 relative bg-white/5 hover:bg-cyan-500 transition-colors duration-200">
                        <div className="svg-container">
                            <Download size={18} className="text-white transition-colors duration-200 group-hover:text-white" />
                        </div>
                        <a href="/resume.pdf" download className="pl-2 text-white transition-colors duration-200 group-hover:text-white">
                            Download Resume
                        </a>
                    </button>
                </div>
                <div className="lg:h-full md:flex">
                    <div className="relative w-full h-96 min-h-full lg:min-h-[none] lg:w-full lg:h-full items-center">

                        <div className="absolute z-0 top-1/2 -translate-y-1/2 w-5/6 right-0 h-[calc(80%+20px)] bg-linear-to-r from-[#0c64ac] to-primary opacity-25 blur-2xl"></div>

                        <div className="absolute h-full z-10 p-2 top-1/2 -translate-y-1/2 lg:right-3 lg:right-40 sm:right-16 rounded-[30%_70%_70%_30%/30%_30%_70%_70%] border border-cyan-500 shadow-lg ">

                            <img src={myPhoto} alt="Khine Myo" width='500' height='auto' loading='lazy' className="object-cover w-full h-full  rounded-[30%_70%_70%_30%/30%_30%_70%_70%]" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </section>
    )
}

export default Hero
