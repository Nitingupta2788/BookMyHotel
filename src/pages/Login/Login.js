import './Login.css'
import axios from 'axios'
import { useState, useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'
import { useNavigate } from 'react-router-dom'
const Login = () => {
    const url = 'http://localhost:3000/auth/login'
    const [credential, setCredential] = useState({ userName: undefined, password: undefined })

    const { loading, error, dispatch } = useContext(AuthContext)
    const navigate = useNavigate()
    const setUserandpassword = (e) => {
        setCredential((prevData) => ({ ...prevData, [e.target.id]: e.target.value }))

    }
    const handleClick = async (e) => {
        e.preventDefault()
        dispatch({ type: 'LOGIN_START' })
        try {
            const { data } = (await axios.post(url, credential))

            dispatch({ type: 'LOGIN_SUCESS', payload: data })
            navigate('/')

        }
        catch (err) {
            dispatch({ type: 'LOGIN_FAILURE', payload: err.response.data })

        }
    }

    return (<>
        <input type='text' id='username' placeholder="UserName" onChange={setUserandpassword} />
        <input type='password' id='password' placeholder="Password" onChange={setUserandpassword} />
        <button disabled={loading} onClick={handleClick}>Login</button>
        {error && <div>{error.message}</div>}


    </>)

}

export default Login

