
function BookSpine({book,onSpineClick}){
    const title = book.volumeInfo.title
    const rotation = (title.length % 5) - 3
    const height = 220 + (title.length % 40)
    const coverUrl = book.volumeInfo.imageLinks?.thumbnail?.replace('zoom=1', 'zoom=4')
return(
    <div style={{
  backgroundImage: `url(${coverUrl})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  transform: `rotate(${rotation}deg)`,
  height: `${height}px`
}} className="w-12  rounded-sm shadow-md" onClick={()=>onSpineClick(book)}>
    </div>
)
}
export default BookSpine