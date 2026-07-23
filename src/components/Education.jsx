import { GraduationCap } from 'lucide-react';
import graduation from '../assets/graduation.png'

const Education = () => {
    const educationData = [
    {
        id:1 ,
        degree: 'Degree Name',
        institution: 'Somewhere',
        duration : 'year',
        details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum facere delectus ut repudiandae modi amet unde similique vitae est veritatis blanditiis, excepturi ipsum, mollitia '
    },

    {
        id: 2,
        degree: 'Degree Name 2',
        institution: 'Somewhere 2',
        duration: 'year',
        details: 'hhhhhhhhhhhhw9q0r 90r3 r t4ut4ti q4ih49t rwrurij r3rrnnw 3jeee qqqe3edefewf '
    }
    ];
  return (
    <section className="text-white py-20 overflow-hidden " id='education'>
        <div className="max-w-2xl mx-auto px-6 lg:px-16">
            <div className="mb-16">
                <p className=" text-cyan-500 text-sm uppercase tracking-widest mb-2 font-semibold">
                    Learning Path
                </p>
                <h2 className="text-4xl md-text-5xl font-extrabold text-white">
                    Education.
                </h2>
            </div>
            <div className="flex flex-col lg:flex-row items-center gap-16">
                <div className="w-full lg:w-5/12 flex justify-center lg:justify-start " data-aos='fade-right'>
                <div className="relative">
                    <div className="absolute h-full w-full z-0 p-2 translate-w-4 translate-y-4 rounded-2xl shadow-lg border border-primary"></div>
                    <div className="relative z-10 bg-[#111a3e] rounded-2xl overflow-hidden border border-[#1f1641]">
                        <img src={graduation} alt=""
                        className="w-64 h-64 md:w-96 object-cover transform duration-500 hover:scale-110" />
                    </div>
                    <div className="absolute -top-4 -left-4 translate-y-2 bg-primary/20 w-16 h-16 rounded-full blur-2xl"></div>
                </div>
                </div>
                <div className="w-full lg:w-7/12 space-y-6" data-aos="fade-left">
                    {educationData.map((edu) => (
                        <div 
                        key={edu.id}
                        className='group relative p-6 rounded-2xl bg-[#111a3e] border border-[#1f1641] transition-all duration-300 hover:border-primary/50 '
                        >
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 bg-[#05065] rounded-lg border border-primary/20 group-hover:border-primary transition-colors">

                                    <GraduationCap className="text-primary" size={24}></GraduationCap>
                                    </div>

                                    <h3 className="text-lg font-bold text-white group-hover:text-primary transition-colors">
                                        {edu.degree}
                                    </h3>
                                     <p className="text-sm text-gray-500">
                                        {edu.institution}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    </section>
  );
};

export default Education;