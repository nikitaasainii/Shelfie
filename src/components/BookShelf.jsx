function BookShelf() {
  return (
    /* THE OUTER FRAME: This is the "shell" of the furniture. 
       We use a light tan color to match the oak in your screenshot. */
    <div className="relative w-3/4 mx-auto mt-12 bg-[#E1B894] p-4 rounded-3xl shadow-xl">
      
      {/* THE INNER CAVITY: This is the "hole" where the books sit. 
          We use a slightly darker wood color here to show it's in the shade. */}
      <div className="relative h-96 bg-[#C49B7A] rounded-2xl overflow-hidden 
                      shadow-[inset_0_10px_40px_rgba(0,0,0,0.2)]">
        
        {/* SIDE WALLS: These narrow strips simulate the thickness of the side wood. */}
        <div className="absolute inset-y-0 left-0 w-3 bg-[#9B7356]/30"></div>
        <div className="absolute inset-y-0 right-0 w-3 bg-[#9B7356]/30"></div>

        {/* THE BASE PLANK: The floor of the shelf. 
            'border-t' adds a tiny light-catching edge. 
            'border-b' adds the front-facing thickness. */}
        <div className="absolute bottom-0 w-full h-10 bg-[#D2A679] 
                        border-t border-white/20 
                        border-b-[10px] border-[#9B7356]
                        shadow-[0_-5px_15px_rgba(0,0,0,0.1)]">
        </div>
      </div>
    </div>
  );
}

export default BookShelf;