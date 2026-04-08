import React, { useContext, useState } from 'react';
import { BookContext } from '../../../context/BookProvider';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ReadList from '../../../components/list/ReadList';
import WishList from '../../../components/list/WishList';
import { ChevronDown } from 'lucide-react';


const Books = () => {
    const { readListBooks, wishListBooks } = useContext(BookContext)
    const [shortingType , setSortingType] = useState();

    return (
        <div className='pt-10 relative'>
            <div className="dropdown dropdown-bottom dropdown-center absolute top-2 right-2">
                <div tabIndex={0} role="button" className="btn bg-green-400 m-1 flex gap-1 text-white ">Short by {shortingType}<ChevronDown /></div>
                <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                    <li onClick={() => {setSortingType('pages')}}><a>Pages</a></li>
                    <li onClick={() => {setSortingType('rating')}}><a>Rating</a></li>
                    <li onClick={() => {setSortingType('publishing year')}}><a>Publishing Year</a></li>
                </ul>
            </div>
            <Tabs>

                <TabList>
                    <Tab>Read list ({readListBooks.length})</Tab>
                    <Tab>Wish list ({wishListBooks.length})</Tab>
                </TabList>

                <TabPanel>
                    <ReadList shortingType={shortingType} />
                </TabPanel>
                <TabPanel>
                    <WishList shortingType={shortingType} />
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Books;