import React, { use } from 'react';
import Book from '../../../components/book/Book';



const AllBooks = ({ bookSuspense }) => {
    const books = use(bookSuspense);
    console.log(books);

    return (
        <div id='books' className='space-y-8 pb-10'>
            <h2 className='font-bold text-4xl text-center'>Books</h2>
            <div className='gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    books.map(book => <Book key={book.bookId} book={book} />)
                }
            </div>
        </div>
    );
};

export default AllBooks;