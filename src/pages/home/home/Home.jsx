import React, { Suspense } from 'react';
import Hero from '../../../components/home/Hero';
import AllBooks from '../books/AllBooks';


const Home = () => {
    const bookSuspense = fetch('/booksData.json').then(res=> res.json())
    return (
        <div>
            <Hero />
            <Suspense fallback={<div className='flex justify-center items-center'><span className="loading loading-spinner loading-xl"></span></div>}>
                <AllBooks bookSuspense={bookSuspense}/>
            </Suspense>

        </div>
    );
};

export default Home;