import BookShelf from '../components/BookShelf'
import AddBookModal from '../components/AddBookModal'
import {useState} from 'react'
function HomePage(){
    const [isAddModalOpen,setIsAddModalOpen] = useState(false)


    return(
        <div className="relative flex flex-col h-screen bg-[#EDECED]">
        <img src="../public/plant.png" className="absolute bottom-9 -left-30 w-120 z-15 h-75"/>
        <img src="../public/sofa.png" className="absolute bottom-35 left-[16%] w-140 z-10 h-80" />
        <img src="../public/plant.png" className="absolute bottom-9 -right-30 w-120 z-20 h-75" />
        <div className="flex flex-col h-screen">
            <div className="h-1/2 bg-[#EDECED]">
            <div className="relative">
            <BookShelf/>
            <div className="absolute bottom-0 w-full translate-y-1/2 px-70 flex justify-between">
                <button className="bg-white text-[#FF1FA9] rounded-full border-1 border-[#FF1FA9] w-60 h-15 "onClick={()=>setIsAddModalOpen(true)}>Add Book +</button>
                <button className="bg-white text-[#FF1FA9] rounded-full border-1 border-[#FF1FA9] w-60 h-15 ">Delete Book -</button>
            </div>
            </div>
            </div>
            <div className="h-1/2 bg-[#EDECED] flex flex-col justify-center items-center px-20">
            <div className=" font-['Times_New_Roman',_serif] text-black text-7xl">
                <h1>Hello <span className="italic text-[#FF1FA9]">Nikita!</span></h1>
            <div className="absolute bottom-46 left-1/2 -translate-x-1/2 w-[40%] h-7 bg-black/100 blur-2xl rounded-[100%] z-0"></div>
            </div>
            </div>
            <div className="bottom-0 bg-[#FF1FA9] h-25 w-full whitespace-nowrap">
            <p className="animate-marquee text-white font-['Times_New_Roman',_serif] text-2xl text-center mt-6">~Grab a coffee and your favorite book   -   Reading is dreaming with open eyes   -   Books make great gifts because they have whole worlds inside of them   -   Books are a uniquely portable magic~</p>
            </div>

        </div>
        {isAddModalOpen && <AddBookModal onClose={()=> setIsAddModalOpen(false)}/>}
        </div>
    )
}
export default HomePage