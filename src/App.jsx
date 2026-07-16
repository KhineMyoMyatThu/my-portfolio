import {useState, useEffect} from 'react'
import Navbar from './components/Navbar'
import AOS from 'aos'
import 'aos/dist/aos.css'

const App = () => {

  const [darkmode, setDarkmode] = useState(true);



useEffect(() => {

  AOS.init({
    duration: 1000,
    once: true,
    offset: 50,
  });
  document.documentElement.classList.add('dark');

},[]);

const toggleDarkMode = () => {
  const newMode = !darkMode;
  setDarkMode(newMode);
  document.documentElement.classList.toggle('dark');
}


  return(
    <div className={darkMode ?  'bg-linear-to-br from-gray-900 via-[#0d182e] to-gray-900 min-h-screen'
      :'bg-linear-to-br from-gray-50 via-[#0d182e] to-blue-100 min-h-screen'
    }>

      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>

    </div>
  )
}

export default App

