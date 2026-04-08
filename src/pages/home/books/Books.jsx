import React, { useContext } from 'react';
import { BookContext } from '../../../context/BookProvider';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';


const Books = () => {
    const { readListBooks, wishListBooks } = useContext(BookContext)
    console.log(readListBooks, wishListBooks);

    return (
        <Tabs>
            <TabList>
                <Tab>Read list ({readListBooks.length})</Tab>
                <Tab>Wish list ({wishListBooks.length})</Tab>
            </TabList>

            <TabPanel>
                <h2>Any content 1</h2>
            </TabPanel>
            <TabPanel>
                <h2>Any content 2</h2>
            </TabPanel>
        </Tabs>
    );
};

export default Books;