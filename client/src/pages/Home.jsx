import Auth from '../utils/auth';
import { Link } from "react-router-dom";
import BookmarkContainer from '../components/BookmarkContainer'
import '../style/Home.css';

export default function Home(){
    return (
        <>
        
        {Auth.loggedIn()? (
            <>
            <BookmarkContainer />
            <button 
              className="logoutBut"
              onClick={Auth.logout}>Logout
              </button>
            <button 
              className='addBookBut'>
              <Link className='addBookLink' to={'/AddBookmark'}>Add a Bookmark</Link>
              </button>
            </>
 
        ):(
            <>
            <p className='signinP text-center'>Please <Link to="/UserLogin">sign in</Link> to continue</p>
            <p className='joinP text-center'>Or <Link to="/Join">Join</Link> to get started</p>
            </>
        )}       
        </>
    );
}