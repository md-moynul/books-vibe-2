import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import ErrorPage from "../pages/Error/ErrorPage";
import Home from "../pages/home/home/Home";
import BookDetails from "../components/book/BookDetails";
import Books from "../pages/home/books/Books";
import PagesToRead from "../pages/Pages to read/PagesToRead";

export const routers = createBrowserRouter([
    {
        path: '/',
        Component: MainLayout,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: '/books',
                Component: Books
            },
            {
                path: '/bookDetails/:bookId',
                loader: () => fetch('/booksData.json'),
                Component: BookDetails
            },
            {
                path: '/pages',
                loader: () => fetch('/booksData.json'),
                Component: PagesToRead
            }
        ],
        errorElement: <ErrorPage />
    },

])