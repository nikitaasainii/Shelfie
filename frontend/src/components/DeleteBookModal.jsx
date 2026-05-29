import {Search} from 'lucide-react'
import {useState} from 'react'
function DeleteBookModal({shelfBooks,onClose,onDeleteBook}){
    const [searchQuery,setSearchQuery]=useState("")
    const filtered = shelfBooks.filter((book) => 
    book.volumeInfo.title.toLowerCase().includes(searchQuery.toLowerCase()))
    return(
        <div className="inset-0 bg-black/40 fixed flex flex-col items-center justify-center z-50 gap-5">
            <div className="bg-white rounded-3xl p-6 h-100 w-100">
                <div className="mx-auto bg-[#F48AAE] rounded-2xl p-7 h-5 w-90 flex flex-row justify-center items-center gap-5 ">
                    <Search color="white"/>
                    <input type="text" placeholder="Search for any Book" className="text-white font-['Times_New_Roman',_serif] text-2xl w-full outline-none" value={searchQuery} onChange={(e)=>setSearchQuery(e.target.value)}></input>
                </div>
                <div className="overflow-y-scroll mt-4 flex flex-col gap-3 h-65">
                    {filtered.map((book)=> (
                        <div key={book.id}>
                            <div className="flex flex-row gap-3">
                                <img src={book.volumeInfo.imageLinks?.thumbnail?.replace('zoom=1', 'zoom=2')} className="w-35 h-50"></img>
                                <div className="flex flex-col">
                                <p className="font-['Times_New_Roman',_serif] text-black text-3xl">{book.volumeInfo.title}</p>
                                <p className="font-['Times_New_Roman',_serif] text-[#FF1FA9] text-xl">{book.volumeInfo.authors?.[0]}</p>
                                <button className="bg-white text-black rounded-full border-1 border-[#FF1FA9] w-43 h-10 mt-2" onClick={()=>onDeleteBook(book)}>Delete from Shelf -</button>
                                </div>
                            </div>
                        </div>

                    ))}
                </div>

            </div>
            <button className="bg-white text-[#FF1FA9] rounded-full border-1 border-[#FF1FA9] w-60 h-15 " onClick={onClose}>Close</button>
        </div>
    )
}
export default DeleteBookModal