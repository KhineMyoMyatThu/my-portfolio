import { Calendar, GraduationCap, CheckCircle } from 'lucide-react';
import graduation from '../assets/graduation.png'

const Education = () => {
    const educationData = [
    {
        id:1 ,
        degree: 'Degree Name',
        institution: 'Somewhere',
        duration : '2021-2028',
        details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum facere delectus ut repudiandae modi amet unde similique vitae est veritatis blanditiis, excepturi ipsum, mollitia '
    },

    {
        id: 2,
        degree: 'Degree Name 2',
        institution: 'Somewhere 2',
        duration: '2021-2028',
        details: 'hhhhhhhhhhhhw9q0r 90r3 r t4ut4ti q4ih49t rwrurij r3rrnnw 3jeee qqqe3edefewf '
    }
    ];
  return (
    <section className="text-white py-20 overflow-hidden " id='education'>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-16">
                <p className=" text-cyan-500 text-sm uppercase tracking-widest mb-2 font-semibold">
                    Learning Path
                </p>
                <h2 className="text-4xl md-text-5xl font-extrabold text-white">
                    Education.
                </h2>
            </div>
            <div className="flex flex-col lg:flex-row items-center gap-16">

                {/* image section */}
                <div className="w-full lg:w-4/12 flex justify-center lg:justify-start " data-aos='fade-right'>
                    <div className="relative w-full max-w-sm">
                        <div className="absolute inset-0 z-0 p-2 translate-x-4 translate-y-4 rounded-[28px] shadow-xl border border-cyan-500">
                        </div>

                        <div className="relative z-10 bg-[#111a3e] rounded-[28px] overflow-hidden border border-[#1f1641]">
                            <img src={graduation} alt="Graduation"
                            className="w-full h-80 object-cover transform duration-500 hover:scale-110" />
                        </div>
                        
                        <div className="absolute -top-4 -left-4 translate-y-2 bg-primary/20 w-20 h-20 rounded-full blur-2xl"></div>
                    </div>
                </div>

                <div className="w-full max-w-3xl mx-auto space-y-8" data-aos="fade-left">
                    {educationData.map((edu) => (
                        <div 
                        key={edu.id}
                        className='group relative p-6 rounded-2xl bg-[#111a3e] border border-[#1f1641] transition-all duration-300 hover:border-primary/50 '
                        >
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 bg-[#05065] rounded-lg border border-primary/20 group-hover:border-primary transition-colors">
                                    <GraduationCap className="text-primary" size={24}/>
                                    </div>
                                    <div className="">
                                        <h3 className="text-lg font-bold text-white group-hover:text-primary transition-colors">
                                        {edu.degree}
                                    </h3>
                                     <p className="text-sm text-gray-500">
                                        {edu.institution}
                                    </p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2 text-xs font-medium bg-[#050816] px-8 py-1 rounded-full border border-gray-700 w-fit">
                                <Calendar size={12} className='text-primary' />
                                {edu.duration}
                                </div>
                            </div>
                            <p className="text-gray-400 text-sm leading-relaxed mb-4 ">
                                {edu.details}
                            </p>
                          
                          <div className="flex items-center gap-2 text-[10px] uppercase-wider text-primary font-bold ">
                            <CheckCircle size={12} />
                            Academic Excellence
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
