import Auth from '../utils/auth';
import { Link } from "react-router-dom";
import BookmarkContainer from '../components/BookmarkContainer'
import '../style/Home.css';

export default function Home(){

    return (
        <>
        
        {Auth.loggedIn()? (
            
            <BookmarkContainer />
 
        ):(
            <p className='signinP text-center'>Please <Link to="/UserLogin">sign in</Link> to continue</p>
        )}       
        </>
    );
}