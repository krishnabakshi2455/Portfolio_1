import React from 'react'
import mainimg from '../assets/about-perfil.jpg'

function About_Me() {
  return (
    <>
      <section className='section_about'>
        <p className='about_heading'>About_Me</p>

        <div className='section_maindiv'>


          <div className="container_img ">
            <img src={mainimg} alt="not found" className='aboutme_img' />
          </div>

          <div className='container_bio'>
            <p className='about_des'>
              Hello! Im Krishna bakshi, a web Developre from New Delhi, India. I am skilled in website design and building, and I am also proficient in React.js. I would love to talk to you about our unique projects and ideas.
            </p>

            <div className="about__buttons">
              <a href="#contact" className="button">
                <i className='bx bx-navigation'></i>Contact Me
              </a>

              <a href="" target="_blank" className="button__ghost">
                <i className='bx bxl-linkedin'></i>
              </a>
            </div>
          </div>

        </div>
      </section>

    </>
  )
}

export default About_Me
