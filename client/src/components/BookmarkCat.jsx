import '../style/BookmarkCat.css'

export default function BookmarkCat (props) {

const theList = props.props.data.getAUsersBookmarks;
console.log("🚀 ~ BookmarkCat ~ theList:", theList)

// const uniqueCats = theList.map(item => item.category).filter((value,index,self) => self.indexOf(value) === index);

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
  




return(
   <>
    <div>
      <h1>Items Grouped by Category</h1>
      <ColumnDisplay theList={theList} />
    </div>

  </>
)
}
