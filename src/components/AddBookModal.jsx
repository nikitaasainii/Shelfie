import {Search} from 'lucide-react'
import {useState,useEffect} from 'react'
function AddBookModal({onClose,onAddBook}){
    const [searchQuery,setSearchQuery]=useState("")
    const [searchResult,setSearchResult]=useState([])
    useEffect(()=>{
        const timer= setTimeout(()=>{
        async function fetchDetails(){
            if (searchQuery==="") return
            const response= await fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchQuery}&key=${import.meta.env.VITE_GOOGLE_BOOKS_KEY}`)
            const data= await response.json()
            if (!data.items) return 
            setSearchResult(data.items)
            console.log(data.items)

        }fetchDetails()
    }, 1000)
    return()=> clearTimeout(timer)
    },[searchQuery])
    return(
        <div className="inset-0 bg-black/40 fixed flex flex-col items-center justify-center z-50 gap-5">
            <div className="bg-white rounded-3xl p-6 h-100 w-100">
                <div className="mx-auto bg-[#F48AAE] rounded-2xl p-7 h-5 w-90 flex flex-row justify-center items-center gap-5 ">
                    <Search color="white"/>
                    <input type="text" placeholder="Search for any Book" className="text-white font-['Times_New_Roman',_serif] text-2xl w-full outline-none" value={searchQuery} onChange={(e)=>setSearchQuery(e.target.value)}></input>
                </div>
                <div className="overflow-y-scroll mt-4 flex flex-col gap-3 h-65">
                    {searchResult.map((data)=> (
                        <div key={data.id}>
                            <div className="flex flex-row gap-3">
                                <img src={data.volumeInfo.imageLinks?.thumbnail?.replace('zoom=1', 'zoom=2')} className="w-35 h-50"></img>
                                <div className="flex flex-col">
                                <p className="font-['Times_New_Roman',_serif] text-black text-3xl">{data.volumeInfo.title}</p>
                                <p className="font-['Times_New_Roman',_serif] text-[#FF1FA9] text-xl">{data.volumeInfo.authors?.[0]}</p>
                                <button className="bg-white text-black rounded-full border-1 border-[#FF1FA9] w-34 h-11 mt-2" onClick={()=>onAddBook(data)}>Add to Shelf +</button>
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
export default AddBookModal