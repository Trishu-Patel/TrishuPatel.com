import './components/navigation bar/NavBar'
import './App.css'
import NavBar from './components/navigation bar/NavBar'
import NamePlate from'./components/name plate/NamePlate'
import ProjectDisplay from './components/project display/ProjectDisplay'
import AboutMe from './components/about me/AboutMe'
import Contacts from './components/contacts/Contacts'
import ExperiencesDisplay from './components/experiences/ExperiencesDisplay'
import Footer from './components/footer/Footer'

function App() {
  return (
    <>
      <NavBar />
      <NamePlate />
      <AboutMe />
      <ExperiencesDisplay/>
      <ProjectDisplay/>
      <Contacts />

      <Footer/>
    </>
  )
}

export default App
