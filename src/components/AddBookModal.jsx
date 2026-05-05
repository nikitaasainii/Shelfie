import {Search} from 'lucide-react'
function AddBookModal({onClose}){
    return(
        <div className="inset-0 bg-black/40 fixed flex flex-col items-center justify-center z-50 gap-5">
            <div className="bg-white rounded-3xl p-6 h-100 w-100">
                <div className="mx-auto bg-[#FF1FA9] rounded-2xl p-7 h-5 w-90 flex flex-row justify-center items-center gap-5 ">
                    <Search color="white"/>
                    <input type="text" placeholder="Search for any Book" className="text-white font-['Times_New_Roman',_serif] text-2xl w-full outline-none"></input>
                </div>

            </div>
            <button className="bg-white text-[#FF1FA9] rounded-full border-1 border-[#FF1FA9] w-60 h-15 " onClick={onClose}>Close</button>
        </div>
    )
}
export default AddBookModal