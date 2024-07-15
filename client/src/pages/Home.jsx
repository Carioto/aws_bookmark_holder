
import { Link } from "react-router-dom";
import Auth from '../utils/auth';
import BookmarkContainer from '../components/BookmarkContainer'
import { useQuery } from "@apollo/client";
import './Home.css';
import {GET_A_USERS_BOOKMARKS} from '../utils/queries'

export default function Home(){
    const userId = Auth.getProfile().data._id;
    const { loading, data } = useQuery(GET_A_USERS_BOOKMARKS, {variables:{id:userId}})
    const userName = Auth.getProfile().data.username;
    
    return (
        <>
        
        {Auth.loggedIn()? (
            
            <BookmarkContainer props={{data, userName}} />



 
 
 
 
 
 
        ):(
            <p>Please <Link to="/UserLogin">sign in</Link> to continue</p>
        )}       
        </>
    );
}