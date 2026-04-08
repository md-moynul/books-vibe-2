import React, { useContext } from 'react';
import { BookContext } from '../../../context/BookProvider';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ReadList from '../../../components/list/ReadList';
import WishList from '../../../components/list/WishList';


const Books = () => {
    const { readListBooks, wishListBooks } = useContext(BookContext)
   

    return (
        <Tabs>
            <TabList>
                <Tab>Read list ({readListBooks.length})</Tab>
                <Tab>Wish list ({wishListBooks.length})</Tab>
            </TabList>

            <TabPanel>
                <ReadList/>
            </TabPanel>
            <TabPanel>
               <WishList/>
            </TabPanel>
        </Tabs>
    );
};

export default Books;