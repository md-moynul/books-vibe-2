import { MapPin, StickyNote, Users } from 'lucide-react';
import { Link } from 'react-router';
import React from 'react';

const ListedBook = ({ book }) => {
    const { bookId, author, bookName, image, tags, category, rating, yearOfPublishing, publisher, totalPages } = book;
    return (
        <div className="grid grid-cols-1 items-center md:grid-cols-4 card-side bg-base-100 shadow-sm border rounded-2xl border-gray-300 p-6 my-8">
            <figure>
                <div className='flex justify-center items-center bg-gray-100 py-8 rounded-2xl w-full'>
                    <img
                        className='w-40 h-60 object-contain'
                        src={image}
                        alt={`${bookName} book image`} />
                </div>
            </figure>
            <div className="card-body space-y-4 col-span-2 lg:col-span-3">
                <h2 className="card-title">{bookName}</h2>
                <p>By : {author}</p>
                <div className='flex gap-4 items-center'>
                    <div className='font-bold'>
                        Tag
                    </div>
                    <div className='space-x-4 '>
                        {
                            tags.map((tag, index) =>
                                <div key={index} className="bg-green-100 text-green-500 badge py-4 px-2 rounded-full"># {tag}</div>)
                        }
                    </div>
                    <div className='flex gap-2 justify-center items-center'>
                        <MapPin color='gray' /> Year of Publishing: {yearOfPublishing}
                    </div>

                </div>
                <div className='flex gap-4'>
                    <div className='flex gap-2 items-center '>
                        <Users color="gray" size={24} />
                        Publisher : {publisher}
                    </div>
                    <div className='flex gap-2 items-center '>
                        <StickyNote color="gray" size={24} />
                        Page {totalPages}
                    </div>
                </div>
                <div className=' space-x-5'>
                    <div className="bg-blue-100 text-blue-500 badge py-5 px-3 rounded-full">Category : {category}</div>
                    <div className="bg-blue-100 text-blue-500 badge py-5 px-3 rounded-full">Rating : {rating}</div>
                    <Link to={`/bookDetails/${bookId}`} className='btn bg-green-500 text-white rounded-full'>View Details</Link>

                </div>

            </div>
        </div>
    );
};

export default ListedBook;