import '../style/BookmarkContainer.css'
import Auth from '../utils/auth';
import BookmarkCat from './BookmarkCat';
import { useQuery } from "@apollo/client";
import {GET_A_USERS_BOOKMARKS} from '../utils/queries';

export default function BookmarkContainer(){
    const userId = Auth.getProfile().data._id;
    const userName = Auth.getProfile().data.username;

    const { loading, data } = useQuery(GET_A_USERS_BOOKMARKS, {variables:{username:userId}});   

  //DONT FORGET THIS THIS SCREWED YOU UP FOR HALF A DAY  
    if(!loading){
    
        return (

        <>

        <div className="bmContainer">
           
            <BookmarkCat  props={{data}}/>
            <p className='text-center userP'>You are logged in as: <strong>{userName}</strong> </p>          

        </div>

        </>
    )}


}