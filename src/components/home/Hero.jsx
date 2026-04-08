import React from 'react';
import bookImage from '../../assets/book-hero.png'
import { Link} from "react-router";

const Hero = () => {
    return (
        <div className="bg-base-200 my-10 md:px-35 min-h-[70vh] hero">
            <div className="lg:flex-row-reverse flex-col justify-between w-full hero-content">
                <img
                    src={bookImage}
                    className="rounded-lg max-w-sm"
                />
                <div className='space-y-5 md:space-y-12'>
                    <h1 className="font-semibold text-6xl leading-20">Books to freshen up <br /> your bookshelf</h1>
                    
                    <button className="text-white btn btn-success"> <Link is='books'>View The List</Link></button>
                   
                </div>
            </div>
        </div>
    );
};

export default Hero;