import React from 'react'
import { useDispatch } from 'react-redux'

import { login ,logout  } from '../features/user'


function Login() {

    const dispatch = useDispatch()

    const userLogin = () => {
        dispatch( login ({ name : 'rafay' ,age : 25 , email : 'rafayir@gmail.com' }))
    }

    const userLogout = () => {
        dispatch( logout ( {name : '', age : 0 , email : ''}))
    }

  return (
    <div>
        <button onClick={userLogin}>Log in</button>

        <button onClick={userLogout}>Log out</button>
    </div>
  )
}

export default Login