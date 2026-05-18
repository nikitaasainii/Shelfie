import {useNavigate} from 'react'
function LandingPage(){
    const navigate=useNavigate()
    return(
        <div className="relative flex flex-col h-screen bg-[#EDECED] items-center justify-center gap-3 ">
            <img src="/icons.png" className="absolute top-0 left-0 w-64 h-auto" />
            <img src="/bow.png" className="h-50 w-35 -mt-50"></img>
            <h1 className="text-black font-['Times_New_Roman_MT_Condensed',_serif] text-8xl -mt-20 hover:scale-105 hover:text-[#FF1FA9] active:scale-95 transition-all duration-200 ">shelfie</h1>
            <img src="/icon_design.png" className="absolute bottom-0 right-0 w-64 h-auto" />
            <div className="flex flex-col gap-12 items-center">
            <p className="text-[#FF1FA9] font-['Times_New_Roman_MT_Condensed',_serif] text-4xl italic">your very own digi-bookshelf</p>
            <button className="bg-white text-[#FF1FA9] rounded-full border-1 border-[#FF1FA9] w-60 h-15 hover:scale-105 hover:bg-[#FF1FA9] hover:text-white active:scale-95 transition-all duration-200" onClick={()=>navigate('/register')}>Register</button>
            <button className="bg-white text-[#FF1FA9] rounded-full border-1 border-[#FF1FA9] w-60 h-15 hover:scale-105 hover:bg-[#FF1FA9] hover:text-white active:scale-95 transition-all duration-200" onClick={()=>navigate('/login')}>Login</button>
            </div>
            

        </div>
    )
}
export default LandingPage