import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
        const [activeSection, setActiveSection] = useState('home');
        const [isMenuOpen, setIsMenuOpen]  = useState(false);

        const navItems = [
            {name: 'Home', href: '#home'},
            {name: 'Education', href: '#education'},
            {name: 'Skills', href: '#skills'},
            {name: 'Projects', href: '#projects'},
            {name: 'Contact', href: '#contact'},
        ];

        const colors = {
            navBg : 'bg-gradient-to-br from-gray-900 via-[#0d182e] to-gray-900',
            textPrimary : 'text-white',
            textSecondary : 'text-gray-300',
            textHover : 'text-blue-400',
            textActive : 'text-blue-400',
            indicator : 'from-blue-500 to-dark-500',
            button: 'from-blue-500 to-dark-500',
        };

        const handleNavItemClick = (itemName) => {
            setActiveSection(itemName.toLowerCase());
            setIsMenuOpen(false);
        };

        return (
            <div className="flex items-center justify-center w-full fixed top-0 left-0 z-50 mt-4">

                <nav className = {`flex items-center w-full justify-center ${colors.navBg} backdrop-blur-lg rounded-2xl px-4 lg:px-8 py-2 shadow-lg`}>

                    <div className = "flex items-center justify-between w-full max-w-6xl lg:space-x-8">
                        {/* logo */}
                     <a
                     href="/"
                     className = 'flex items-center space-x-2'>
                        <span className={`text-xl font-bold ${colors.textPrimary} `}> My Portfolio</span>
                     </a>

                     {/* navigation items */}
                     <div className='hidden lg:flex items-center space-x-6'>
                        {navItems.map((item) => (
                            <a
                            key={item.name}
                            href ={item.href}
                            onClick = {() => handleNavItemClick(item.name)}
                            className = 'relative'
                            >

                                <span
                                className = {`font-medium transition-colors duration-300 ${activeSection === item.name.toLowerCase() ?
                                    colors.textActive : colors.textSecondary
                                } hover:text-orange-500`}>
                                    {item.name}
                                </span>


                                {activeSection === item.name.toLowerCase() && (
                                    <div
                                    className= { `absolute bottom-1 left-0 right-0 h-0.5 bg-linear-to-r rounded-full ${colors.indicator}`}></div>
                                    )}
                            </a>
                        ))}
                     </div>
                     <div className='flex items-center space-x-4'>
                        <a 
                        href= "#contact"
                        className ={`hidden lg:block px-6 py-2 font-semibold rounded-full bg-linear-to-r ${colors.button} text-white shadow-md hover:shadow-lg  transition-shadow`}
                        >
                            Hire Me
                        </a>
                     </div>
                    
                    {/* Mobile menu button */}
                    <div className="flex lg:hidden items-center space-x-4 px-2">
                        <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="p-2 rounded-md bg-gray-700"
                        >
                            {isMenuOpen ? (
                                <X className="w-6 h-6 text-white"></X>
                            ) : (
                                <Menu className="w-6 h-6 text-white"></Menu>
                            )}

                        </button>
                    </div>
                    </div>
                    {isMenuOpen && (
                        <div
                        className="absolute top-full left-0 right-0 mt-2 lg:hidden bg-gray-900/95 backdrop-blur-lg rounded-xl shadow-lg border border-gray-700"
                        >
                            <div className="px-4 py-4 space-y-2">
                                {navItems.map((item) => (
                                    <a
                                    key={item.name}
                                    href={item.href}
                                    onClick={() => handleNavItemClick(item.name)}
                                    className={`block`}
                                    >
                                        <div
                                        className={`py-3 px-3 rounded-lg text-center
                                        ${activeSection === item.name.toLowerCase() ? 'bg-gray-800' : ''}`}>
                                                <span className={`font-medium ${activeSection === item.name.toLowerCase() ?
                                                    colors.textActive : colors.textSecondary
                                                }`}>
                                                    {item.name}
                                                </span>

                                        </div>
                                    </a>
                                ))}
                                <a
                                href ='#contact'
                                onClick = {() => setIsMenuOpen(false)}
                                className ={`block py-3 px-4 text-center font-semibold rounded-lg bg-linear-to-r ${colors.button} text-white shadow-md`}
                                >
                                    Hire Me 
                                </a>
                            </div>
                        </div>
                    )}
                </nav>
            </div>

        )
}

export default Navbar
