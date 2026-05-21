import {useState} from 'react'
function BookCardModal({onClose,book}){
    const [status,setStatus]= useState("reading")
    const [rereadCount,setRereadCount]=useState(0)
    const [rating,setRating]= useState(0)
    const [notes,setNotes]=useState("")
    return(
         <div className="inset-0 bg-black/40 fixed flex flex-col items-center justify-center z-50 gap-5">
            <div className="bg-white rounded-3xl p-6 h-auto w-100 flex flex-col gap-4">
                <div className="flex flex-col gap-1 items-center w-full gap-2">
                <p className="font-['Times_New_Roman',_serif] text-black text-4xl">{book.volumeInfo.title}</p>
                <p className="font-['Times_New_Roman',_serif] text-[#FF1FA9] text-xl">{book.volumeInfo.authors?.[0]}</p>
                </div>
                <div className="flex flex-row gap-3">
                <label className="font-['Times_New_Roman',_serif] text-black text-xl">Status</label>
                <div className="flex flex-col gap-1">
                <button onClick={()=>setStatus("reading")} className={`rounded-full px-2 py-1 border-1 text-sm w-24 font-['Times_New_Roman',_serif]  ${status === "reading" ? "bg-[#F48AAE] text-white" : "bg-white text-black"}`}>reading</button>
                <button onClick={()=>setStatus("want to read")} className={`rounded-full px-2 py-1 border-1 w-24 text-sm font-['Times_New_Roman',_serif]  ${status === "want to read" ? "bg-[#F48AAE] text-white" : "bg-white text-black"}`}>want to read</button>
                <button onClick={()=>setStatus("DNF")} className={`rounded-full px-2 py-1 border-1 text-sm w-24 font-['Times_New_Roman',_serif]  ${status === "DNF" ? "bg-[#F48AAE] text-white" : "bg-white text-black"}`}>DNF</button>
                </div>
                <div className="flex flex-col gap-1">
                <button onClick={()=>setStatus("finished")} className={`rounded-full px-2 py-1 border-1 text-sm w-24 font-['Times_New_Roman',_serif]  ${status === "finished" ? "bg-[#F48AAE] text-white" : "bg-white text-black"}`}>finished</button>
                <button onClick={()=>setStatus("rereading")} className={`rounded-full px-2 py-1 border-1 text-sm w-24 font-['Times_New_Roman',_serif]  ${status === "rereading" ? "bg-[#F48AAE] text-white" : "bg-white text-black"}`}>rereading</button>
                </div>
                </div>
                <div className="flex flex-row gap-2">
                <label htmlFor="" className="font-['Times_New_Roman',_serif] text-black text-xl">Reread</label>
                <button disabled={status !== "rereading"} onClick={()=> setRereadCount(rereadCount+1)} className="rounded-full text-[#FF1FA9] px-2 py-1 border-1 border-black text-sm w-24 font-['Times_New_Roman',_serif]">+ </button>
                <p className="font-['Times_New_Roman',_serif] text-black">{rereadCount}</p>
                <button disabled={status !== "rereading"} onClick={()=> setRereadCount(Math.max(0,rereadCount-1))} className="rounded-full text-[#FF1FA9] px-2 py-1 border-1 border-black text-sm w-24 font-['Times_New_Roman',_serif]">-</button>
                </div>
                <div className="flex flex-row gap-2">
                <label htmlFor=""className="font-['Times_New_Roman',_serif] text-black text-xl">Rating</label>
                {[1,2,3,4,5].map((star) => (
                    <button key={star} onClick={() => setRating(star)} className={`text-2xl ${star <= rating ? "text-[#F48AAE]" : "text-gray-300"}`}>
                        {star <= rating ? "★" : "☆"}
                    </button>
                ))}
                </div>
                <label htmlFor=""className="font-['Times_New_Roman',_serif] text-black text-xl">Notes</label>
                <div className="bg-[#F48AAE] rounded-3xl p-3 h-58 w-88 flex flex-col items-center gap-1">
                    <textarea value={notes} onChange={(e) => setNotes(e.target.value)} className="outline-none bg-transparent w-full h-full p-1 resize-none text-white" />
                </div>
            </div>
            <button className="bg-white text-[#FF1FA9] rounded-full border-1 border-[#FF1FA9] w-60 h-15 " onClick={onClose}>Close</button>
        </div>

    )
}
export default BookCardModal