import '../style/BookmarkCat.css'

export default function BookmarkCat (props) {
console.log("🚀 ~ BookmarkCat ~ props:", props)

const theList = props.props.data.getAUsersBookmarks;

const uniqueCats = theList.map(item => item.category).filter((value,index,self) => self.indexOf(value) === index);
  
const SingCat = (item) => {

  let arr = []
  theList.map((url) =>
    {
      if(url.category === item.props) {
        arr.push(<li key={url._id}><a href={url.url} target='_blank'>{url.description}</a> <button className='editBut'>edit</button> || <button className='deleteBut'>delete</button> </li>);
        }
      }      
    )
    return(arr)
}


  const ThisDisplay = () => {
  return (
<div className='bookmarkCol'>
    {uniqueCats.map((item) => 
    <div key={item}>
      <h4 className='text-center'>{item}</h4>
      <ul>
      <SingCat props={item} />
      </ul>
    </div>
      )}
  </div>
  )
}

return(
   <>
    <div>
      <ThisDisplay theList={theList}/>
    </div>

  </>
)
}
