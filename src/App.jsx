import { useState } from 'react';
import Navbar from './Components/NavBar';
import Header from './Components/Header';
import FAQ from './Components/FAQ';
import Contato from './Components/Contato';
import Footer from './Components/Footer';
import Sobre from './Components/Sobre';
import Terapias from './Components/Terapias';
import ModalAgendamento from './Components/ModalAgendamento';
import './App.css'

export default function App() {

  const [openModal, setOpenModal] = useState(false);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
    document.documentElement.setAttribute("data-theme", theme);
  }

  return (
    <>
      <Navbar onToggleTheme={toggleTheme} onOpenModal={() => setOpenModal(true)}/>
      {/* <Header /> */}
      {/* <Sobre /> */}
      {/* <Terapias /> */}
      {/* <FAQ /> */}
      {/* <Contato /> */}
      {/* <Footer /> */}
      {/* <ModalAgendamento /> */}
    </>
  )
}
