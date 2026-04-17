const getReadListFromLocalDB = () => {
    const allReadList = localStorage.getItem("readList")
    console.log(allReadList ,'from local DB');
    if (allReadList) return JSON.parse(allReadList);
    return []

}

const addToReadListLocalDB = (book) => {
    const allReadListBooks =getReadListFromLocalDB()
    const isAlreadyExist = allReadListBooks.find( bk => bk.bookId === book.boolId)
    if(!isAlreadyExist){
    allReadListBooks.push(book)
    localStorage.setItem('readList' ,JSON.stringify(allReadListBooks))
    }
}
const getWishListFromLocalDB = () => {
    const allWishList = localStorage.getItem("wishList")
    console.log(allWishList ,'from local DB');
    if (allWishList) return JSON.parse(allWishList);
    return []

}

const addToWishListLocalDB = (book) => {
    const allWishListBooks =getWishListFromLocalDB()
    const isAlreadyExist = allWishListBooks.find( bk => bk.bookId === book.boolId)
    if(!isAlreadyExist){
    allWishListBooks.push(book)
    localStorage.setItem('wishList' ,JSON.stringify(allWishListBooks))
    }
}

export { getReadListFromLocalDB, addToReadListLocalDB ,getWishListFromLocalDB,addToWishListLocalDB}