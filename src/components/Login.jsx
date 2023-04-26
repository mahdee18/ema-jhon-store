import React, { useContext, useState } from 'react';
import './Login.css'
import { Link } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
const Login = () => {
    const [error, setError] = useState('')
    const { signIn } = useContext(AuthContext)

    const handleLogIn = event => {

        event.preventDefault()

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        form.reset()
        console.log(email, password)
        setError('')
        signIn(email, password)
            .then(result => {
                const loggedUser = result.user
                console.log(loggedUser)
            })
            .catch(error => {
                console.error(error.message)
                setError(error.message)
            })

    }

    return (
        <div className='login'>
            <form className='form' onSubmit={handleLogIn}>
                <h1>Login</h1>
                <div className='form-control'>
                    <label htmlFor="Email">Email</label> <br />
                    <input type="email" id='email' name='email' required />
                </div>
                <div className='form-control'>
                    <label htmlFor="password">Password</label> <br />
                    <input type="password" id='password' name='password' required />
                </div>
                <button>Login</button>
            </form>
            <p><small>New to Ema-john? <Link to='/singup'>Create a new account!</Link></small></p>
            <span><hr />Or<hr /></span>
            <div className="popup">
                <button>Continue With Google</button>
            </div>
            <p className='text-error'>{error}</p>
        </div>
    );
};

export default Login;