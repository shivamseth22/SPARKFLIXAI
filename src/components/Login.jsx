import React, { useState } from 'react'
import Header from './Header';

const Login = () => {

  const [isLogged , setIsLogged] = useState(true);

  const toggleSignInForm = () =>{
    setIsLogged(!isLogged);
  }

  return (
    <div>
        <Header/>
        <div className='absolute' >
          <img src='https://assets.nflxext.com/ffe/siteui/vlv3/c906271d-7184-4eec-83c9-b6d4c1a068ec/728874a6-eeda-400a-9bcf-a935a1408a4f/IN-en-20231127-popsignuptwoweeks-perspective_alpha_website_large.jpg' alt='bg'/>
        </div>
        
        <form className='p-12 bg-black absolute w-3/12 mt-36 mx-auto right-0 left-0 text-white bg-opacity-80 '>
        <h1 className='font-bold text-3xl py-4'>{isLogged ? "Sign In" : "Sign Up"}</h1>
           
         {!isLogged&&<input type='text' placeholder='Full Name' className='p-4 my-4 w-full rounded-lg text-black'/>
         }
         <input type='email' placeholder='Email Address' className='p-4 my-4 w-full rounded-lg text-black'/>
       
        <input type='password' placeholder='Password' className='p-4 my-4 w-full rounded-lg text-black'/>
          
          <button className='p-4 my-4  bg-red-700 w-full rounded-lg'>{isLogged ? "Sign In" : "Sign Up"}</button>
        <p className='text-sm cursor-pointer' onClick={toggleSignInForm}>{isLogged ? "New to sparkflix.AI? Sign Up Now" : "Already a User Sign In Now !!"}</p>
        </form>
    </div>
    
  )
}

export default Login;