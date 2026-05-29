function BookCoverModal({book,onFlip,onClose}){
    const coverUrl = book.volumeInfo.imageLinks?.thumbnail?.replace('zoom=1', 'zoom=4')
    return(
        <div className="inset-0 bg-black/40 fixed flex flex-col items-center justify-center z-50 gap-5">
            <div className="bg-white rounded-3xl p-6 h-100 w-100 flex flex-row gap-4">
                <img className="h-87 w-auto rounded-xl shadow-lg" src={coverUrl}></img>
                <div className="flex items-center justify-center">
                <button className="text-[#FF1FA9] font-['Times_New_Roman',_serif]  h-7 w-20 rounded-full border-1 border-[#FF1FA9] " onClick={onFlip}>Review</button>
            </div>
            </div>
            <button className="bg-white text-[#FF1FA9] font-['Times_New_Roman',_serif] rounded-full border-1 border-[#FF1FA9] w-60 h-15 " onClick={onClose}>Close</button>
        </div>
    )
}
export default BookCoverModal