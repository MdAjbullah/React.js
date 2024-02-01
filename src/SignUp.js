import React, { useState } from 'react';
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'




function SignUp() {
    const [values, setValues] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '' ,
    });
    const handleChange = (e) => {
        setValues({
            ...values,[e.target.name]: [e.target.value]})
        }
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3000/SignUp',{values})
        .then(res =>console.log("register successfull !!"))
        .catch(err =>console.log(err))
       
    };
  return (
    <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
        <div className='bg-white p-3 rounded w-25'>
            <h2>SignUp</h2>
            <form onSubmit={handleSubmit}>
                <div className='mb-3'>
                    <level htmlFor='name'><strong>Name</strong></level>
                    <input type='text' className='form-control rounded-0' placeholder='Enter name' onChange={handleChange}/>
                </div>
                <div className='mb-3'>
                    <level htmlFor='email'><strong>Email</strong></level>
                    <input type='email' className='form-control rounded-0' placeholder='Enter email' onChange={handleChange}/>
                </div>
                <div className='mb-3'>
                    <level htmlFor='password'><strong>Password</strong></level>
                    <input type='password' className='form-control rounded-0' placeholder='Enter password' onChange={handleChange}/>
                </div>
                <div className='mb-3'>
                    <level htmlFor='confirmPassword'><strong>Confirm Password</strong></level>
                    <input type='password' className='form-control rounded-0' placeholder='Enter confirm password' onChange={handleChange}/>
                </div>
               <button type='Submit' className='btn btn-success w-100 rounded-0'>SignUp</button>
               <p>You are agree to our term and condition </p>
               <a to="/" className='btn btn-defoult  border w-100 bg-light rounded text-decoration-none'>LogIn</a>


            </form>
        </div>
    
   
    </div>
  );
}
export default SignUp;