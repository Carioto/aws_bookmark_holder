import {GET_A_USERS_BOOKMARKS} from '../utils/queries'
import { useQuery } from '@apollo/client'
import BookmarkCat from './BookmarkCat'

export default function BookmarkContainer({props}){
    console.log("🚀 ~ BookmarkContainer ~ bms:", props)
 

    return (

        <>
        <div className="bmContainer">
            <h2>Bookmarks for {props.userName}</h2>
            <BookmarkCat />
        </div>
        
        </>
    )


}