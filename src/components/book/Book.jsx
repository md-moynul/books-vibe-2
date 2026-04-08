import { Star } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router';

const Book = ({ book }) => {
    const {bookId, author, bookName, image, tags, category,rating } = book;
    return (
        <Link to={`/bookDetails/${bookId}`} className="gap-6 bg-base-100 shadow-sm w-96 card card-body">
            <figure>
                <div className='flex justify-center items-center bg-gray-100 py-8 rounded-2xl w-full'>
                    <img
                        className='w-30 h-41 object-contain'
                        src={image}
                        alt="Shoes" />
                </div>
            </figure>
            <div className="space-y-5">
                <div className='space-x-4'>
                    {
                        tags.map((tag, index) =>
                            <div key={index} className="bg-green-100 text-green-500 badge">{tag}</div>)
                    }
                </div>

                <h2 className="text-2xl card-title">
                    {bookName}

                </h2>
                <p className='font-medium text-xl'>By : {author}</p>
                <hr className='text-gray-200' />
                <div className="justify-between card-actions">
                    <div className="font-medium text-xl">{category}</div>
                    <div className="flex justify-center items-center gap-2 font-medium text-xl">{rating} <Star className='stroke-[1px]' /></div>
                </div>
            </div>
        </Link>
    );
};

export default Book;