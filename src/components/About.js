
import React from 'react';
import image from '../images/about_pic.jpg'
import svg from '../images/hackerearth.svg'


const About = () => {
    return (
        <>
            <section className="text-gray-600 body-font">
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 flex justify-center">
                        <img className="object-cover object-center rounded w-3/4" alt="hero" src={image} style={{
                            boxShadow: '-1px -1px 15px 0px'
                        }} />
                    </div>
                    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center " style={{
                        height: '608px',
                        display: 'flex',
                        alignItems: ' flex-start'
                    }}>
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-extrabold text-gray-900" >ABOUT ME
                            <div className='line'></div>
                            <br className="hidden lg:inline-block" />
                        </h1>
                        <p className="mb-8 leading-relaxed font-semibold">Hi there. My is Ashish Kumar. I'm a web devloper and Softwere devloper. I have a degree in Bacholar of Computer Application. Freelance web design and mobile Application devlopemet is what I'm doing presently.</p>
                        <br />
                        <p className="mb-8 leading-relaxed font-semibold"> I have exprience with Tailwind CSS, React JS, CSS, HTML, Java, Python, Bootstrap, visual Basic dotnet, mobile app devlopemet and softwere devlopment. So if you're instersted in having a website, a new design, a mobile Application, and HTML&CSS Design, system softwere then feel free to let me know and I'll be happy ot work With you. Thanks you</p>
                        <div className="font-awesome px-3 flex" >
                            <a href="https://www.instagram.com/nirex_akay/" target='_blank' rel="noreferrer">  <i className="fa-brands fa-instagram fa-2xl mx-3" > </i></a>

                            <a href="https://www.instagram.com/nirex_akay/" target='_blank' rel="noreferrer"><i className="fa-brands fa-linkedin fa-2xl mx-3"></i></a>

                            <a href="https://github.com/NIREX-mig" target='_blank' rel="noreferrer">
                                <i className="fa-brands fa-github fa-2xl mx-3"></i>
                            </a>

                            <a href="https://www.hackerrank.com/nirexmig" target='_blank' rel="noreferrer">
                                <i className="fa-brands fa-hackerrank fa-2xl mx-3"></i>
                            </a>

                            <a href="https://www.hackerearth.com" target='_blank' rel="noreferrer">
                                <img src={svg} alt="svg" style={{ width: '30px' }} />
                            </a>

                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default About;