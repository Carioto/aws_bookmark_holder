import {GET_A_USERS_BOOKMARKS} from '../utils/queries'
import { useQuery } from '@apollo/client'
import BookmarkCat from './BookmarkCat'

export default function BookmarkContainer(){
    const { loading, data } = useQuery(GET_A_USERS_BOOKMARKS)
    console.log("🚀 ~ BookmarkContainer ~ data:", data)
 

    return (

        <>
        <div className="bmContainer">
            HI
            <BookmarkCat />
        </div>
        
        </>
    )


}