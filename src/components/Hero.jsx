import React from 'react'

const Hero = () => {

    return(
        <section className= 'relative w-full' data-aos='zoom-in-up'> 
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

                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-200">
                                KhineMyo
                            </span>
                        </h1> 
                    </div>
                    <p className='text-gray-300 pt-8 text-center'>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo minima quasi et suscipit nemo fugit sit aliquid praesentium laudantium amet cupiditate nihil, exercitationem sapiente assumenda sint consequatur magni dicta quidem!
                    </p>

                </div>
            </div>
        </div>
        </section>
    )
}

export default Hero