import React, { useContext, useEffect, useState } from 'react';
import { BookContext } from '../../context/BookProvider';
import Book from '../book/Book';
import { Link } from 'react-router';
import ListedBook from './ListedBook';


const WishList = ({shortingType}) => {
     const {  wishListBooks } = useContext(BookContext)
     const [filteredWishList, setFilteredWishList] = useState(wishListBooks)
     
         useEffect(() => {
             if (shortingType) {
                 if (shortingType === 'pages') {
                     const shortedData = [...wishListBooks].sort((a, b) => a.totalPages - b.totalPages);
                     setFilteredWishList(shortedData)
                 }else if (shortingType === 'rating'){
                      const shortedData = [...wishListBooks].sort((a, b) =>  b.rating - a.rating);
                     setFilteredWishList(shortedData)
                 }else if (shortingType === 'publishing year') {
                const shortedData = [...wishListBooks].sort((a, b) => b.yearOfPublishing - a.yearOfPublishing );
                setFilteredWishList(shortedData)
            }
             }
         }, [shortingType, wishListBooks])
     
     if (wishListBooks.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center text-center py-20 px-4">
                <img
                    src="https://cdn-icons-png.flaticon.com/512/4076/4076549.png"
                    alt="Empty"
                    className="w-40 mb-6 opacity-80"
                />

                <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mb-2">
                    No Books Yet
                </h2>

                <p className="text-gray-500 max-w-md mb-6">
                    You haven’t added any books to your reading list. Start exploring and add your favorite books.
                </p>

                <Link
                    to="/"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg shadow transition"
                >
                    Browse Books
                </Link>
            </div>
        );
    }
    return (
        <div>
            {filteredWishList.map(book => <ListedBook key={book.bookId} book={book} />)}
        </div>
    );
};
   

export default WishList;