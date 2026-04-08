
import { useLoaderData, useParams } from 'react-router';

import { useContext } from 'react';
import { BookContext } from '../../context/BookProvider';

const BookDetails = () => {
    const { bookId } = useParams()
    const books = useLoaderData()

    const selectedBook = books.find(book => book.bookId == bookId);
    const {
        author,
        bookName,
        image,
        tags,
        category,
        review,
        totalPages,
        publisher,
        yearOfPublishing,
        rating
    } = selectedBook;
 
    
    const {handelReadListedBook ,handelWishListedBook} =useContext(BookContext)


    return (
        <div className="my-15 hero">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full">
                <div className='flex justify-center items-center bg-gray-100 rounded-2xl  '>

                    <img className="shadow-2xl  h-100"
                        src={image} />
                </div>

                <div className='space-y-4'>
                    <div className='space-y-3'>
                        <h1 className="font-bold text-5xl">{bookName}</h1>
                        <p className='font-medium text-xl'>By : {author}</p>
                    </div>
                    <hr className='text-gray-300' />
                    <p className='font-medium text-xl'>{category}</p>
                    <hr className='text-gray-300' />
                    <div className='space-y-6'>
                        <p className="leading-relaxed">
                            <span className="font-bold">Review : </span>
                            <span className="line-clamp-5 text-justify">
                                {review}
                            </span>
                        </p>
                        <div className='flex gap-5'>
                            <p className='font-bold'>Tag</p>
                            <div className='space-x-5'>
                                {
                                    tags.map((tag, index) =>
                                        <div key={index} className="bg-green-100 text-green-500 badge">#{tag}</div>)
                                }
                            </div>
                        </div>
                    </div>
                    <hr className='text-gray-300' />
                    <div className="items-center gap-x-15 gap-y-2 grid grid-cols-[auto_1fr]">
                        <span className="text-gray-600">Number of Pages:</span>
                        <span className="font-bold">{totalPages}</span>

                        <span className="text-gray-600">Publisher:</span>
                        <span className="font-bold">{publisher}</span>

                        <span className="text-gray-600">Year of Publishing:</span>
                        <span className="font-bold">{yearOfPublishing}</span>
                        <span className="text-gray-600">Rating:</span>
                        <span className="font-bold">{rating}</span>
                    </div>
                    <div className='space-x-5'>
                        <button onClick={() => { handelReadListedBook(selectedBook) }} className="btn-outline font-bold btn">Mark as Read</button>
                        <button onClick={() => {handelWishListedBook(selectedBook)}} className="font-bold text-white btn-info btn">Add to Wishlist</button>
                    </div>

                </div>


            </div>
        </div>
    );
};

export default BookDetails;

