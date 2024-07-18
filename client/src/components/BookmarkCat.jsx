import '../style/BookmarkCat.css'

export default function BookmarkCat (props) {

const theList = props.props.data.getAUsersBookmarks;

const ColumnDisplay = (theList) => {
    return (
      <div className="columns">
        {Object.keys(theList).map(category => (           
          <div key={category} className="column">
            <h2>{category}</h2>
            <table>
                <thead>
                    <tr>
                        <th>Url</th>
                        <th>Name</th>
                    </tr>
                </thead>
                <tbody>
              {theList[category].map(item => (
                <tr key={item._id}>
                    <td>{item.url}</td>
                    <td>{item.description}</td>
                </tr>
              ))}
                </tbody>
            </table>
          </div>
        ))}
      </div>
    );
  };
  const uniqueCats = theList.map(item => item.category).filter((value,index,self) => self.indexOf(value) === index);
  
const SingCat = (item) => {

  let arr = []
  theList.map((url) =>
    {
      if(url.category === item.props) {
        arr.push(<li key={url._id}>{url.description}, {url.url}</li>);
        }
      }
      
    )
    return(arr)
}


  const ThisDisplay = (theList) => {
  return (
<div>
    {uniqueCats.map((item) => 
    <div key={item}>
      <h4 >{item}</h4>
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
      {/* <ColumnDisplay theList={theList} /> */}
      <ThisDisplay theList={theList}/>
    </div>

  </>
)
}
