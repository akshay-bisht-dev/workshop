import React from 'react'
import './CSS/About.css'
import aboutBg from '../img/aboutus.jpg'

const About = () => {
  return (
    <>
        <div className="about">
            <div className="about-data">

            <div className="about-text">
                <h1>About us</h1>
                <p className='para-about'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe assumenda nisi quas quaerat deserunt labore nemo soluta recusandae, aspernatur unde itaque dolores culpa inventore quae dignissimos fugiat vel iusto nobis laborum pariatur aut odio voluptatum consectetur. Quidem dolore veritatis omnis quasi, molestiae explicabo dicta blanditiis cum libero, dignissimos commodi inventore!</p>


                <p className='para-about-name'>- Akshay Bisht -</p>
            </div>

            <div className="about-data-img">
            <img src={aboutBg} alt="about" />
            </div>

            </div>
        </div>
    </>
  )
}

export default About