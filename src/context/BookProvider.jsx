import React, { createContext, useState } from 'react';
import { toast } from 'react-toastify';
export const BookContext = createContext()

const BookProvider = ({ children }) => {
    const [readListBooks, setReadListBooks] = useState([])
    const [wishListBooks, setWishlistBooks] = useState([])

    const handelWishListedBook = (currentBook) => {
        const isReadListBookExisted = readListBooks.find(book => book.bookId === currentBook.bookId);
        if (isReadListBookExisted) {
            toast.error(`${currentBook.bookName} is already in Read list`);
            return
        }

        const isBookExisted = wishListBooks.find(book => book.bookId === currentBook.bookId)
        if (isBookExisted) {
            toast.error(`${currentBook.bookName} is already in Wish list`)
        } else {
            setWishlistBooks([...wishListBooks, currentBook])
            toast.success(`${currentBook.bookName} is added to Wish list`)
        }


    }
    const handelReadListedBook = (currentBook) => {

        const isBookExisted = readListBooks.find(book => book.bookId === currentBook.bookId);
        if (isBookExisted) {
            toast.error(`${currentBook.bookName} is already in Read list`)
        } else {
            setReadListBooks([...readListBooks, currentBook])
            toast.success(`${currentBook.bookName} is added to Read list`)
        }


    }
    const data = {
        readListBooks,
        wishListBooks,

        setWishlistBooks,
        setReadListBooks,

        handelReadListedBook,
        handelWishListedBook
    }
    return (
        <BookContext.Provider value={data}>
            {children}
        </BookContext.Provider>
    );
};

export default BookProvider;