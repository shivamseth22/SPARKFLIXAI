import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { auth } from '../utils/firebase';
import { addUser, removeUser } from '../utils/userSlice';
import { useNavigate } from 'react-router-dom';
import { logo } from '../utils/constants';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import SearchIcon from '@mui/icons-material/Search';
import { toggleGPTSearch } from '../utils/gptSlice';

const Header = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((store) => store.user)

  console.log("user" ,user)
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/")
      })
      .catch((error) => {
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
    return () => unSubscribe();
  }, []);

  const handleGPTSearch =() => {
    dispatch(toggleGPTSearch());
  }
  return (
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
      <img className='w-48' src={logo} alt='logo' />
      <div className='flex gap-5 justify-center items-center'>

        {
          user && (
          <div onClick={handleGPTSearch} className='flex justify-center items-center gap-1 hover:scale-110'>
        <SmartToyIcon className='text-white'/>
          <button className='text-white text-xl font-bold'  >GPT</button>
          {/* <SearchIcon className='text-white'/> */}
        </div>)
        }

        <button onClick={handleSignOut} className='text-white text-xl font-bold border-white border-2 p-3 hover:text-black hover:bg-white rounded-xl'>Sign Out</button>
      </div>

    </div>
  )
}

export default Header