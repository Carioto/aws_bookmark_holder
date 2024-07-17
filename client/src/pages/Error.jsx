import './Error.css';
import Auth from '../utils/auth';


export default function Error(){

  const logout = () => Auth.logout();
    return (
        <>
        
       <h1 className='text-center'>OMFG!!!!</h1>
        <button onClick={logout}>logout</button>
        
        </>
    )
}