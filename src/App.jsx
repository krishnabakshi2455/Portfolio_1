import { useState } from 'react'
import Header from './Header/Header'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import AboutMe from './AboutMe/AboutMe'
import Projects from './Projects/Projects'
import Skills from './skills/Skills'
import Contact from './contact/Contact'
function App() {
  return (
    <>
    <Header/>
    <AboutMe/>
    <Skills/>
    <Projects/>
    <Contact/>


    </>
  )
}

export default App
