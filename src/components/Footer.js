import React from 'react'

let year = new Date().getFullYear();


const Footer = (props) => {
    return (
        <>
            <footer className="text-gray-600 body-font">
                <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
                    <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900" href='/'>
                        <span className="ml-3 text-xl Name">{props.sitename}</span>
                    </a>
                    <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4 footer" >{`Copyright © ${year} ${props.sitename}  All Rights Reserved`}

                    </p>
                </div>
            </footer>
        </>
    );
}

export default Footer;