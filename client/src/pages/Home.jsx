
import { Link } from "react-router-dom";
import Auth from '../utils/auth';
import BookmarkContainer from '../components/BookmarkContainer'
import { useQuery } from "@apollo/client";
import './Home.css';


export default function Home(){




    return (
        <>
        <h2>Welcome to your bookmarks</h2>
        
        {Auth.loggedIn()? (
            <BookmarkContainer />



 
 
 
 
 
 
        ):(
            <p>Please <Link to="/UserLogin">sign in</Link> to continue</p>
        )}       
        </>
    );
}