import { Star } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router';

const Book = ({ book }) => {
    const {bookId, author, bookName, image, tags, category,rating } = book
    // {
    //     author
    //     :
    //     "J.K. Rowling"
    //     bookId
    //     :
    //     7
    //     bookName
    //     :
    //     "Harry Potter and the Sorcerer's Stone"
    //     category
    //     :
    //     "Fantasy"
    //     image
    //     :
    //     "https://i.ibb.co.com/989qMRW/42844155.jpg"
    //     publisher
    //     :
    //     "Bloomsbury"
    //     rating
    //     :
    //     4.8
    //     review
    //     :
    //     "'The Great Gatsby' by F. Scott Fitzgerald is a timeless masterpiece that delves into the decadence and disillusionment of the Jazz Age. Set in the Roaring Twenties, the novel unveils the enigmatic Jay Gatsby's extravagant parties, masking a pursuit of lost love. Narrated by Nick Carraway, the story explores themes of wealth, love, and the American Dream, drawing readers into a vivid portrayal of the glittering yet elusive world of the East and West Egg. Fitzgerald's prose is both poetic and haunting, weaving a compelling narrative that transcends its era. A poignant exploration of societal excess and the human condition, 'The Great Gatsby' remains a literary gem that resonates across generations."
    //     tags
    //     :
    //     (2)['Magic', 'Young Adult']
    //     totalPages
    //     :
    //     309
    //     yearOfPublishing
    //     :
    //     1997
    // }

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