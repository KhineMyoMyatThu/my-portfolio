import { motion } from 'framer-motion';
import { useState } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';

const Navbar = ({ darkMode, toggleDarkMode }) => {
        const [activeSection, setActiveSection] = useState('home');
        const [isMenuOpen, setIsMenuOpen]  = useState(false);

        const navItems = [
            {name: 'Home', href: '#home'},
            {name: 'About', href: '#about'},
            {name: 'Skills', href: '#skills'},
            {name: 'Projects', href: '#projects'},
            {name: 'Contact', href: '#contact'},
        ];

        const lightColors = {
            navBg : 'bg-gradient-to-br from-orange-200 to-white',
            textPrimary : 'text-gray-900',
            textSecondary : 'text-gray-800',
            textHover : 'text-orange-900',
            textActive : 'text-orange-600',
            indicator : 'from-orange-500 to-amber-500',
            button: 'from-orange-500 to-amber-500',
        };

        
        const darkColors = {
            navBg : 'bg-gradient-to-br from-gray-700 to-black',
            textPrimary : 'text-white',
            textSecondary : 'text-gray-300',
            textHover : 'text-orange-400',
            textActive : 'text-orange-400',
            indicator : 'from-orange-500 to-amber-500',
            button: 'from-orange-500 to-amber-500',
        };

        const colors = darkMode ? darkColors : lightColors;

        const handleNavItemClick = (itemName) => {
            setActiveSection(itemName.toLowerCase());
            setIsMenuOpen(false);
        };

        return (
            <div className="flex items-center justify-center w-full fixed top-0 left-0 z-50 mt-4">

                <motion.nav
                 initial = {{y: -100}}
                 animate = {{y: 0}}
                 transition = {{duration: 0.5}}
                 className = {`flex items-center w-full justify-center ${colors.navBg} backdrop-blur-lg rounded-2xl px-4 lg:px-8 py-2 shadow-lg`}>

                    <div className = "flex items-center justify-between w-full max-w-6xl lg:space-x-8">
                        {/* logo */}
                     <motion.a
                     href="/" whileHover={{scale:1.05}}
                     className = 'flex items-center space-x-2'>
                        <span className={`text-xl font-bold ${colors.textPrimary} `}> My Portfolio</span>
                     </motion.a>

                     {/* navigation items */}
                     <div className='hidden lg:flex items-center space-x-6'>
                        {navItems.map((item) => (
                            <a
                            key={item.name}
                            href ={item.href}
                            onClick = {() => handleNavItemClick(item.name)}
                            className = 'relative'
                            >

                                <motion.span
                                className = {`font-medium transition-colors duration-300 ${activeSection === item.name.toLowerCase() ?
                                    colors.textActive : colors.textSecondary
                                } hover:text-orange-500`}
                                whileHover={{scale: 1.1}}
                                whileTap={{scale: 0.95}}>
                                    {item.name}
                                </motion.span>


                                {activeSection === item.name.toLowerCase() && (
                                    <motion.div
                                    layoutId="activeIndicator"
                                    className= { `absolute bottom-1 left-0 right-0 h-0.5 bg-linear-to-r rounded-full ${colors.indicator}`}></motion.div>
                                    )}
                            </a>
                        ))}
                     </div>
                     <div className='flex items-center space-x-4'>
                        {/* dark mode toggle button */}
                        <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={toggleDarkMode}
                        className={`p-2 rounded-full ${darkMode ? 
                            'bg-gray-700' : 'bg-gray-200'
                        } transition-colors`}
                        aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
                        >
                            {darkMode ?
                            (<Sun className='w-5 h-5 text-yellow-400'></Sun>)
                            : (<Moon className='w-5 h-5 text-gray-400'></Moon>)
                            }
                        </motion.button>

                        {/* button */}
                        <motion.a 
                        href= "#contact"
                        whileHover={{scale:1.05}}
                        whileTap={{scale:0.95}}
                        className ={`hidden lg:block px-6 py-2 font-semibold rounded-full bg-linear-to-r ${colors.button} text-white shadow-md hover:shadow-lg  transition-shadow`}
                        >
                            Hire Me
                        </motion.a>
                     </div>
                    
                    {/* Mobile menu button */}
                    <div className="flex lg:hidden items-center space-x-4 px-2">
                        <motion.button
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className={`p-2 rounded-md ${darkMode ? 'bg-gray-700' : 'bg-white'}`}
                        >
                            {isMenuOpen ? (
                                <X className={`w-6 h-6 ${darkMode ? 'text-white' : 'text-gray-700'}`}></X>
                            ) : (
                                <Menu className = {`w-6 h-6 ${darkMode ? 'text-white' : 'text-gray-700'}`}></Menu>
                            )}

                        </motion.button>
                    </div>
                    </div>
                    {isMenuOpen && (
                        <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className={`absolute top-full left-0 right-0 mt-2 lg:hidden
                            ${darkMode ? 'bg-gray-900/95' : 'bg-white/95'} backdrop-blur-lg rounded-xl shadow-lg border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}
                        >
                            <div className="px-4 py-4 space-y-2">
                                {navItems.map((item) => (
                                    <a
                                    key={item.name}
                                    href={item.href}
                                    onClick={() => handleNavItemClick(item.name)}
                                    className={`block`}
                                    >
                                        <motion.div
                                        whileHover={{x: 5}}
                                        className={`py-3 px-3 rounded-lg text-center
                                        ${activeSection === item.name.toLowerCase() ? darkMode ? 'bg-gray-800'
                                             : 'bg-orange-50' : ''}`}>
                                                <span className={`font-medium ${activeSection === item.name.toLowerCase() ?
                                                    colors.textActive : colors.textSecondary
                                                }`}>
                                                    {item.name}
                                                </span>

                                        </motion.div>
                                    </a>
                                ))}
                                <motion.a
                                href ='#contact'
                                onClick = {() => setIsMenuOpen(false)}
                                whileTap = {{scale:0.95}}
                                className ={`block py-3 px-4 text-center font-semibold rounded-lg bg-linear-to-r ${colors.button} text-white shadow-md`}
                                >
                                    Hire Me 
                                </motion.a>
                            </div>
                        </motion.div>
                    )}
                </motion.nav>
            </div>

        )
}

export default Navbar