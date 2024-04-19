import React from 'react'
import mainimg from '../assets/about-perfil.jpg'
import { Link, Routes, Route } from 'react-router-dom'
export default function Home() {
  return (
    <>
      <section className='section-home '>
        <div className="section-div-1">
          <p className=' home-heading font-serif font-bold text-3xl ml-44 mt-5'>
            Krishna Bakshi
          </p>

          <p className=' mt-10 font-serif font-bold text-2xl text-dark-theme home-description'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem, ipsum dolor sit amet consectetur adipisicing..
          </p>

          <a href="#about" className="home__scroll">
            <div className="home__scroll-box">
              <i className='bx bxs-chevron-down'></i>
            </div>

            <span className="home__scroll-text">Scroll Down</span>
          </a>
        </div>

        <div className="section-div-2 flex items-center gap-6">
          <img src={mainimg} alt="not found" className='mainimg' />
          {/* <div className="home__shadow"></div> */}

          <div className=' ml-2'>

            <div className=' home-icons text-2xl cursor-pointer '>
              <i class='bx bxl-linkedin'></i>
            </div>

            <div className=' home-icons mt-7 text-2xl cursor-pointer'>
              <i class='bx bxl-github' ></i>
            </div>

            <div className=' home-icons mt-7 text-2xl cursor-pointer'>
              <i class='bx bxl-instagram' ></i>
            </div>

            

          </div>

          

        </div>
      </section>
{/* 
      <Routes>
        <Route path="/linkedin" element={<Home />}></Route>
        <Route path="/github" element={<AboutMe />}></Route>
        <Route path="/instagram" element={}></Route>
      </Routes> */}




    </>
  )
}
