import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { auth } from '../utils/firebase';
import { addUser, removeUser } from '../utils/userSlice';
import { useNavigate } from 'react-router-dom';
import { logo } from '../utils/constants';

const Header = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((store)=>store.user)

  const handleSignOut = () => {

    signOut(auth)
    .then(()=>{
      navigate("/")
    })
    .catch((error)=>{
      navigate("/error")

    })
  }


  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    //unsubscribe when component unmount 
    return ()=> unSubscribe();
  }, []);
  return (  
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
        <img className='w-48' src={logo} alt='logo'/>
        <button onClick={handleSignOut} className='float-right'>Sign Out</button>
    </div>
  )
}

export default Header