import '../style/Error.css';
import Auth from '../utils/auth';
import { Link } from "react-router-dom";

export default function Error(){

  const logout = () => Auth.logout();
    return (
        <>
        
       <p className='text-center errP'>An error occurred please return <Link className='addBookLink' to={'/'}>Home</Link></p>
        <button className='logoutBut'
        onClick={logout}>logout</button>
        
        </>
    )
}