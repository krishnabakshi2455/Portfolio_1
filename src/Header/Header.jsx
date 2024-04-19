import React,{useRef,useState} from 'react'
import { Link, Routes, Route } from 'react-router-dom'
import Home from '../Home/Home'
import AboutMe from '../AboutMe/AboutMe'
function Header() {
    const menuref = useRef(null)

    const showmenu=()=>{
        menuref.current.style.top="0";
    }
    const closemenu = () => {
        menuref.current.style.top = "-100%";
    }
    const themeref = useRef(null)
    const toggleDarkMode = () => {
        document.body.classList.toggle("dark-theme")
        themeref.current.classList.toggle("bx-sun")
    } 


    return (
        <>
            <section className='header-section flex justify-around '>
                <div className='header-div-1 flex gap-4 items-center m-2'>
                    <p className=' text-dark-theme font-bold bg-black text-white w-8 text-center rounded-2xl p-1 font-serif'>K</p>
                    <p className='text-dark-theme font-bold font-serif'>Krishna </p>
                </div>

                {/* ----------------------------------------------------------------------------- */}

                <div className='header-div-2 flex'>
                    <ul className='header-ul-1 flex gap-24 font-bold font-serif text-lg items-center'>

                        <li className='header-li-2 flex gap-24 font-bold font-serif text-lg items-center'>

                            <Link to={"/"} className='header-li-1 cursor-pointer text-dark-theme'>Home</Link>

                            <Link to={"AboutMe"} className='header-li-1 cursor-pointer text-dark-theme'>About Me </Link>

                            <li className='header-li-1 cursor-pointer text-dark-theme'>
                                Projects
                            </li>

                            <li className='header-li-btn cursor-pointer text-white bg-black p-3 '>
                                <button className='text-dark-theme'>Contact ME</button>
                            </li>

                        </li>
                        {/* ----------------------- */}
                        <li className='flex gap-9 items-center'>


                            <li className='header-li-theme  cursor-pointer'>
                                <i className='bx bx-moon change-theme text-dark-theme' ref={themeref} onClick={toggleDarkMode}></i>
                            </li>


                            <li className='header-menu'>
                                <i className='bx bx-menu text-3xl ' onClick={showmenu} ></i>
                            </li>

                        </li>
                        {/* ----------------------------------------------- */}

                        <ul className='dropdown-menu'>

                            <li className='menu-li-1 bg-black text-dark-theme' ref={menuref}>
                                <li className='flex items-center '>
                                    <h1 className=' text-2xl text-white'>- Menu -</h1>
                                </li>
                                <Link to={"/"} className='header-li-1 cursor-pointer text-white'>Home</Link>

                                <Link to={"AboutMe"} className='header-li-1 cursor-pointer text-white'>About Me </Link>

                                <li className='header-li-1 cursor-pointer text-white'>
                                    Projects
                                </li>

                                <li className='header-li-btn cursor-pointer text-white'>
                                    <button>Contact ME</button>
                                </li>

                            
                                <i className='bx bx-x close-menu text-4xl text-white' onClick={closemenu}></i>
                            

                            </li>

                        </ul>


                    </ul>
                </div>
            </section>

            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="AboutMe" element={<AboutMe />}></Route>
            </Routes>


        </>
    )
}

export default Header
