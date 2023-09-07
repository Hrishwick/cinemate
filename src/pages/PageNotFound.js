import React, { useEffect } from 'react';
import PageNotFoundImage from '../asseats/images/pagenotfound.png'
import { Link } from 'react-router-dom';


const PageNotFound = () => {
    useEffect(() => {
        document.title = 'Page Not Found/ Cinemate'
    })
    return (
        <main>
            <section className='flex flex-col justify-center px-2'>
                <div className='flex flex-col items-center my-4'>
                <p className='text-4xl font-bold text-black dark:text-white my-10'> 404 Oops!</p>
                <div className='max-w-lg'>
                <img  className='rounded' src={PageNotFoundImage} alt='Page not found'/>
                </div>
                </div>
                <div className='flex justify-center my-4'>
                <Link to ='/'>
                <button className='w-64 bg-gradient-to-r from-cyan-500 to-blue-500 font-thin-bold rounded-lg px-5 py-2.5 mr-2 mb-2  dark:text-white text-black'>Back to Home</button>
                </Link>
                </div>
               
            </section>
        </main>
    );
};
export default PageNotFound;