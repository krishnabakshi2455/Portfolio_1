import axios from 'axios'
import React from 'react'
import { useState, useEffect } from 'react';
import data from '../dg.json'
// npx json-server src/dg.json --port 2000
function Skills() {
    return (
        <>
            <section className='skills--section' id='myskills'>
                <div className="portfolio--container">
                    <p className='section--title'>My Skills</p>
                    <h2 className='skills--section--heading'>
                        My expertise
                    </h2>
                </div>
                {/* <img src="./src/assets/feather-pen-1.png" className='hero-img' alt="krishna" /> */}
                <div className='skills--section--container'>
                    {
                    data?.skills?.map((item, index) => (
                        <div key={index} className='skills--section--card'>
                            <div className='skills--section--img'>
                                <img src={item.src} alt="Product Chain" />
                            </div>

                            <div className='skills--section--card--content'>
                                <h3 className='skills--section--title'>
                                    {item.title}
                                </h3>
                                <p className='skills-section--description'>
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))
                    }
                </div>

            </section>

        </>
    )
}

export default Skills
