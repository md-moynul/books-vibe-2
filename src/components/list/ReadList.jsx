import React, { useContext, useEffect, useState } from 'react';
import { BookContext } from '../../context/BookProvider';
import Book from '../book/Book';
import { Link } from 'react-router';
import ListedBook from './ListedBook';

const ReadList = ({ shortingType }) => {
    const { readListBooks } = useContext(BookContext);
    const [filteredReadList, setFilteredReadList] = useState(readListBooks)

    useEffect(() => {
        if (shortingType) {
            if (shortingType === 'pages') {
                const shortedData = [...readListBooks].sort((a, b) => a.totalPages - b.totalPages);
                setFilteredReadList(shortedData)
            } else if (shortingType === 'rating') {
                const shortedData = [...readListBooks].sort((a, b) => b.rating - a.rating);
                setFilteredReadList(shortedData)
            }
            else if (shortingType === 'publishing year') {
                const shortedData = [...readListBooks].sort((a, b) => b.yearOfPublishing - a.yearOfPublishing );
                setFilteredReadList(shortedData)
            }
        }
    }, [shortingType, readListBooks])


    if (filteredReadList.length === 0) {
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
            <div>
                {filteredReadList.map(book => <ListedBook key={book.bookId} book={book} />)}
            </div>

        </div>
    );
};

export default ReadList;