import BookShelf from '../components/BookShelf'
import AddBookModal from '../components/AddBookModal'
import BookCoverModal from '../components/BookCoverModal'
import BookCardModal from '../components/BookCardModal'
import DeleteBookModal from '../components/DeleteBookModal'
import {useState} from 'react'
function HomePage(){
    const [isAddModalOpen,setIsAddModalOpen] = useState(false)
    const [isDeleteModalOpen,setIsDeleteModalOpen] = useState(false)
    const [shelfBooks,setShelfBooks]= useState([])
    const [selectedBook,setSelectedBook]= useState(null)
    const [viewState,setViewState]= useState(null)
    function handleBooks(book){
        setShelfBooks([...shelfBooks,book])
    }
    function handleSpineClick(book){
        setSelectedBook(book)
        setViewState("cover")
    }
    function handleDeleteBook(book){
        setShelfBooks(shelfBooks.filter((b) => b.id !== book.id))
    }


    return(
        <div className="relative flex flex-col h-screen bg-[#EDECED]">
        <img src="../public/plant.png" className="absolute bottom-2 -left-30 w-120 z-15 h-75"/>
        <img src="../public/plant.png" className="absolute bottom-2 -right-30 w-120 z-20 h-75" />
        <div className="flex flex-col h-screen">
            <div className="h-1/2 bg-[#EDECED]">
            <div className="relative">
            <BookShelf shelfBooks={shelfBooks} onSpineClick={handleSpineClick}/>
            <div className="absolute bottom-0 w-full translate-y-1/2 px-70 flex justify-between">
                <button className="bg-white text-[#FF1FA9] rounded-full border-1 border-[#FF1FA9] w-60 h-15 "onClick={()=>setIsAddModalOpen(true)}>Add Book +</button>
                <button className="bg-white text-[#FF1FA9] rounded-full border-1 border-[#FF1FA9] disabled:opacity-70 w-60 h-15 "onClick={()=>setIsDeleteModalOpen(true)} disabled={shelfBooks.length === 0}>Delete Book -</button>
            </div>
            </div>
            </div>
            <div className="h-1/2 bg-[#EDECED] flex flex-col justify-center items-center px-20">
            <div className=" font-['Times_New_Roman',_serif] text-black text-7xl">
                <h1>Welcome to your <span className="italic text-[#F48AAE]">Shelf!</span></h1>

            </div>
            </div>
            <div className="bottom-0 bg-[#F48AAE] h-15 w-full whitespace-nowrap">
            <p className="animate-marquee text-white font-['Times_New_Roman',_serif] text-2xl text-center mt-3">~Grab a coffee and your favorite book   -   Reading is dreaming with open eyes   -   Books make great gifts because they have whole worlds inside of them   -   Books are a uniquely portable magic~</p>
            </div>

        </div>
        {isAddModalOpen && <AddBookModal onClose={()=> setIsAddModalOpen(false)} onAddBook={handleBooks}/>}
        {isDeleteModalOpen && <DeleteBookModal onClose={()=>setIsDeleteModalOpen(false)} onDeleteBook={handleDeleteBook} shelfBooks={shelfBooks}/>}
        {viewState==="cover" && <BookCoverModal book={selectedBook} onFlip={()=> setViewState("card")} onClose={()=>{setViewState(null);setSelectedBook(null)}}/>}
        {viewState==="card" && <BookCardModal book={selectedBook} onClose={()=> {setViewState(null);setSelectedBook(null)}}/>}
        </div>
    )
}
export default HomePage