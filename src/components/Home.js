import React from 'react'
import './CSS/Home.css'
import { BiSearchAlt2 } from 'react-icons/bi';

const Home = () => {
  return (
    <>
      <main>
        <div className="home">
        <div className="home-data">
        <div className="home-para">
          <p>hii There, Welcome to my</p>
        </div>

        <div className="home-head">
          <p><span>X</span>tension Workshop &nbsp;</p>
        </div>

        <div className="home-search">
          <input type="text" placeholder='Please Search Here' />
          <BiSearchAlt2 className='home-search-icon'/>
        </div>
        </div>
        </div>
      </main>
    </>
  )
}

export default Home