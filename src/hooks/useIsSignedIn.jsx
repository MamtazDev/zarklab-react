import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../contexts/AuthContext';

const useIsSignedIn = () => {
    const [authChecked,setAuthChecked]=useState(false)
    const {setUser}=useContext(AuthContext)

    useEffect(()=>{
        const isUser = localStorage.getItem("zarklab-user")
      if(isUser){
        setUser(true)
    setAuthChecked(true)
      }
      else{
        setAuthChecked(true)
      }

    },[setUser])
    return authChecked
};

export default useIsSignedIn;