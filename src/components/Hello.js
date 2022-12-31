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
                        <p style={{fontFamily: `'Permanent Marker', cursive` }} className="pl-12 text-2xl" > Hey I am </p>
                        <h1 className="title-font sm:text-4xl text-3xl mb-0 font-medium text-gray-900 Name pl-12" >
                            Nirex Mig
                        </h1>
                        <p className="mb-8 mt-0 leading-relaxed pl-12" >I am ASHISH KUMAR and I am a wed devloper and MERN stack devloper and I am a andriod devloper. I am a BCA student </p>
                        <div className="flex justify-center pl-12" >
                            <a href='https://www.mediafire.com/file/diecnnvgw9wnrno/access_weather_satellites.mp3/file' download target='_blank' rel="noreferrer">
                                <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 text-lg rounded-3xl">Resume</button>

                            </a>

                        </div>
                    </div>
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                        <img className="object-cover object-center rounded h-" alt="my pic" src={image} style={{ height: '450px' }} />
                    </div>
                </div>
            </section>
        </>
    );
}

export default Hello;
