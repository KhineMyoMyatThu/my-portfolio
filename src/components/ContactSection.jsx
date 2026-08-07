import React from 'react';
import { Mail, Code, Phone } from 'lucide-react';

const ContactSection = () => {
    const ContactInfo = [
        {
            id: 1,
            icon: Mail,
            title: 'Email',
            value: 'Hello@gmail.com',
            link: 'mailto:hello@example'
        },
          {
            id: 2,
            icon: Code,
            title: 'LinkedIn',
            value: 'linkedin@gmail.com',
            link: '#'
        },
          {
            id: 3,
            icon: Phone,
            title: 'Phone',
            value: '+95 9123 456 456',
            link: 'tel:+9591234656'
        },
          {
            id: 4,
            icon: Code,
            title: 'GitHub',
            value: '@example.com',
            link: '#'
        },
    ]
  return (
    <section className='py-20' id='contact'>
        <div className="container mx-auto max-w-7xl px-4">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-2">
                    Let's Connect.
                </h2>
                <div className="w-28 h-2 bg-primary mx-auto mt-2 rounded-2xl"></div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
                <div className="">
                    <p className='text-gray-700 mb-4 leading-relaxed'>
                        lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
                    </p>
                    <div className="space-y-6">
                        {ContactInfo.map((info) => {
                            const Icon = info.icon;
                            return(
                                <div key={info.id}
                                className="flex items-center gap-4 group">
                                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                        <Icon size={24} className="text-blue-300"/>
                                    </div>
                                    <div className="">
                                        <h4 className="text-white font-medium text-sm">
                                            {info.title}
                                        </h4>
                                        {
                                            info.link ? (
                                                <a href={info.link} className="text-gray-400 text-sm hover:text-primary transition-colors"
                                                target={info.title == 'Location' ? '_self' : '_blank'}>
                                                    {info.value}
                                                </a>
                                            ) : (
                                                <p className="text-gray-400 text-sm">
                                                    {info.value }
                                                </p>
                                            )
                                        }
                                    </div>
                                </div>
                            )
                        }
                         
                        )}
                    </div>
                </div>

            
            {/* contact form */}
            <div className="bg-gray-800 rounded-lg p-6">
                <form action="">
                    <div className="mb-6">
                        <label htmlFor='email' className="text-white block mb-2 text-sm font-medium " >
                            Email
                        </label>
                        <input type="email" id="email" className='w-full px-4 py-2 bg-gray-600 rounded-lg text-white text-sm focus:outline-none focus:border-primary transitions-colors ' placeholder='Your@email.com'  required></input>
                    </div>

                     <div className="mb-6">
                        <label htmlFor='Message' className="text-white block mb-2 text-sm font-medium " >
                            Message
                        </label>
                        <textarea id="message" className='w-full px-4 py-2 bg-gray-600 rounded-lg text-white text-sm focus:outline-none focus:border-primary transitions-colors ' placeholder='Your Message ... ' required></textarea>
                    </div>

                    <button type="submit" className='w-full px-6  py-2.5 bg-blue-400 text-white rounded-lg font-medium hover:bg-primary/80'>
                        Send Message
                    </button>
                </form>
            </div>
            </div>

        </div>
    </section>
  );
};

export default ContactSection;