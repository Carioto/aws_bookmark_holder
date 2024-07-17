


export default function BookmarkCat (props) {

const theList = props.props.data.getAUsersBookmarks;


console.log("🚀 ~ BookmarkCat ~ theList:", theList)

const uniqueCats = theList.map(item => item.category).filter((value,index,self) => self.indexOf(value) === index);
console.log("🚀 ~ BookmarkCat ~ uniqueCats:", uniqueCats)
 

const bookList = uniqueCats.map((item) => {
       console.log("🚀 ~ bookList ~ item:", item)
       theList.map(website => {
           console.log("🚀 ~ bookList ~ website:", website.category)
        if (item === website.category){
            return <p>{website}</p>
        }
       })


} )


}