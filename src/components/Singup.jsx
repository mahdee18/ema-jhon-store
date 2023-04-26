import React, { useContext, useState } from 'react';
import './Login.css'
import { Link } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
const Singup = () => {

    const [error,setError]= useState('')

    const{createUser}=useContext(AuthContext)
    const handleSignUp = event => {

        event.preventDefault()

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirm.value;
        form.reset()
        console.log(email,password,confirmPassword)
        setError('')
        if(password !== confirmPassword){
            setError('Your password did not match!!')
            return
        }
        else if(password.length<6){
            setError('Password must be 6 characters!')
            return
        }
        createUser(email,password)
        .then(result=>{
            const loggedUser = result.user
            console.log(loggedUser)
        })
        .catch(error=>{
            console.error(error)
            setError(error.message)
        })

    }
    return (
        <div>
            <div className='login'>
                <form className='form' onSubmit={handleSignUp}>
                    <h1>Sing Up</h1>
                    <div className='form-control'>
                        <label htmlFor="Email">Email</label> <br />
                        <input type="email" id='email' name='email' required />
                    </div>
                    <div className='form-control'>
                        <label htmlFor="password">Password</label> <br />
                        <input type="password" id='password' name='password' required />
                    </div>
                    <div className='form-control'>
                        <label htmlFor="confirm">Confirm Password</label> <br />
                        <input type="password" id='confirm' name='confirm-password' required />
                    </div>
                    <button>Sign Up</button>
                </form>
                <p><small>Already have an account? <Link to='/login'>Login</Link></small></p>
                <span><hr />Or<hr /></span>
                <div className="popup">
                    <button>Continue With Google</button>
                </div>
            <p className='text-error'>{error}</p>
            </div>
        </div>
    );
};

export default Singup;