import React from 'react'
import image from '../images/Skill_pic.jpg';

const Skills = () => {
    return (
        <>
            <section className="text-gray-600 body-font">
                <div className="container mx-auto flex px-5 md:flex-row flex-col items-center" >
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                        <img className="object-cover object-center rounded" alt="hero" src={image} style={{ height: '450px' }} />
                    </div>
                    <div className='container ' style={{ height: '450px' }}>
                        <h3 className='skill-heading'>My Skills </h3>
                        <div className="skill-bars">
                            <div className="skill-bars">
                                <div className="bar">
                                    <div className="info">
                                        <span>HTML/CSS</span>
                                    </div>
                                    <div className="progress-line html">
                                        <span></span>
                                    </div>
                                </div>
                                <div className="bar">
                                    <div className="info">
                                        <span>JavaScript</span>
                                    </div>
                                    <div className="progress-line javascript">
                                        <span></span>
                                    </div>
                                </div>
                                <div className="bar">
                                    <div className="info">
                                        <span>MERN</span>
                                    </div>
                                    <div className="progress-line MERN">
                                        <span></span>
                                    </div>
                                </div>
                                <div className="bar">
                                    <div className="info">
                                        <span>Python</span>
                                    </div>
                                    <div className="progress-line python">
                                        <span></span>
                                    </div>
                                </div>
                                <div className="bar">
                                    <div className="info">
                                        <span>Java</span>
                                    </div>
                                    <div className="progress-line java">
                                        <span></span>
                                    </div>
                                </div>
                                <div className="bar">
                                    <div className="info">
                                        <span>VB.net</span>
                                    </div>
                                    <div className="progress-line dotnet">
                                        <span></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Skills;