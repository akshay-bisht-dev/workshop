import React from 'react'
import './CSS/Services.css'
import AI from '../img/ai.jpg'
import AC from '../img/autocad.jpg'
import TI from '../img/technical.jpg'
import A from '../img/architecture.jpg'
import C from '../img/custom.jpg'
import D from '../img/design.jpg'

const Services = () => {
  return (
    <>
        <div className="services">
            <div className="services-data">
                <h1 className='services-data-h1'>Our Services</h1>



                <div className="services-item">
                    <div className="services-card">
                        <div className="services-img">
                            <img src={AI} alt="" />
                        </div>

                        <div className="services-details">
                        <h1 className='services-details-h1'>Artifical Intelligence</h1>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti dolorum, id repellat unde quasi iste reiciendis sit deserunt nesciunt, tempore sunt perspiciatis, facere blanditiis quam illo voluptatibus architecto libero ullam a odio provident. Accusantium autem inventore qui veniam libero velit laudantium mollitia! Iusto hic deleniti non odit saepe obcaecati quod.</p>
                        </div>
                    </div>
                </div>













                <div className="services-item">
                    <div className="services-card-new">
                        <div className="services-img">
                            <img src={AC} alt="" />
                        </div>

                        <div className="services-details">
                        <h1 className='services-details-h1'>Autocad Design</h1>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti dolorum, id repellat unde quasi iste reiciendis sit deserunt nesciunt, tempore sunt perspiciatis, facere blanditiis quam illo voluptatibus architecto libero ullam a odio provident. Accusantium autem inventore qui veniam libero velit laudantium mollitia! Iusto hic deleniti non odit saepe obcaecati quod.</p>
                        </div>
                    </div>
                </div>

















                <div className="services-item">
                    <div className="services-card">
                        <div className="services-img">
                            <img src={TI} alt="" />
                        </div>

                        <div className="services-details">
                        <h1 className='services-details-h1'>Technical Ideas</h1>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti dolorum, id repellat unde quasi iste reiciendis sit deserunt nesciunt, tempore sunt perspiciatis, facere blanditiis quam illo voluptatibus architecto libero ullam a odio provident. Accusantium autem inventore qui veniam libero velit laudantium mollitia! Iusto hic deleniti non odit saepe obcaecati quod.</p>
                        </div>
                    </div>
                </div>





















                <div className="services-item">
                    <div className="services-card-new">
                        <div className="services-img">
                            <img src={A} alt="" />
                        </div>

                        <div className="services-details">
                        <h1 className='services-details-h1'>Architecture</h1>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti dolorum, id repellat unde quasi iste reiciendis sit deserunt nesciunt, tempore sunt perspiciatis, facere blanditiis quam illo voluptatibus architecto libero ullam a odio provident. Accusantium autem inventore qui veniam libero velit laudantium mollitia! Iusto hic deleniti non odit saepe obcaecati quod.</p>
                        </div>
                    </div>
                </div>
















                <div className="services-item">
                    <div className="services-card">
                        <div className="services-img">
                            <img src={C} alt="" />
                        </div>

                        <div className="services-details">
                        <h1 className='services-details-h1'>Customization</h1>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti dolorum, id repellat unde quasi iste reiciendis sit deserunt nesciunt, tempore sunt perspiciatis, facere blanditiis quam illo voluptatibus architecto libero ullam a odio provident. Accusantium autem inventore qui veniam libero velit laudantium mollitia! Iusto hic deleniti non odit saepe obcaecati quod.</p>
                        </div>
                    </div>
                </div>

















                <div className="services-item">
                    <div className="services-card-new">
                        <div className="services-img">
                            <img src={D} alt="" />
                        </div>

                        <div className="services-details">
                        <h1 className='services-details-h1'>Designing</h1>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti dolorum, id repellat unde quasi iste reiciendis sit deserunt nesciunt, tempore sunt perspiciatis, facere blanditiis quam illo voluptatibus architecto libero ullam a odio provident. Accusantium autem inventore qui veniam libero velit laudantium mollitia! Iusto hic deleniti non odit saepe obcaecati quod.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Services