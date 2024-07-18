import Auth from '../utils/auth'
import '../style/Header.css'

export default function Header() {


    return (
        <>
        <h1>Your Bookmarks Holder</h1>
        {Auth.loggedIn() ? (
            <button 
              className="logoutBut"
              onClick={Auth.logout}>Logout</button>
        ): (
            <p></p>
        )}

        
        </>
    )
}