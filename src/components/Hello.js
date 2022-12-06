import React from 'react'
import image from '../images/Hero_pic.jpeg'


const Hello = () => {

    return (
        <>
            <section className="text-gray-600 body-font ">
                <div className="container mx-auto flex px-5 md:flex-row flex-col items-center" style={{
                    paddingTop: '4rem',
                    paddingBottom: '6rem'
                }} >
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <p style={{ paddingLeft: '50px', fontFamily: `'Permanent Marker', cursive`, fontSize: '22px' }} > Hey I am </p>
                        <h1 className="title-font sm:text-4xl text-3xl mb-0 font-medium text-gray-900 Name " style={{ paddingLeft: '50px' }}>
                            Nirex Mig
                        </h1>
                        <p className="mb-8 mt-0 leading-relaxed" style={{ paddingLeft: '50px' }}>I am ASHISH KUMAR and I am a wed devloper and MERN stack devloper and I am a andriod devloper. I am a BCA student </p>
                        <div className="flex justify-center" style={{ paddingLeft: '50px' }}>
                            <a href='https://www.mediafire.com/file/diecnnvgw9wnrno/access_weather_satellites.mp3/file' download target='_blank' rel="noreferrer">
                                <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 text-lg rounded-3xl">Resume</button>

                            </a>

                        </div>
                    </div>
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                        <img className="object-cover object-center rounded" alt="hero" src={image} style={{ height: '450px' }} />
                    </div>
                </div>
            </section>
        </>
    );
}

export default Hello;