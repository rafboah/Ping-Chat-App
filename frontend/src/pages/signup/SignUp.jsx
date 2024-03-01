import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import GenderCheckBox from './GenderCheckBox';
import useSignup from '../../hooks/useSignup';

const SignUp = () => {
  const [inputs, setInputs] = useState({
    fullName: '',
    username: '',
    password: '',
    confirmedPassword: '',
    gender: '',
  })

  const {loading, signup} = useSignup()

  const handleCheckboxChange = (gender) => {
    setInputs({...inputs, gender})
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    // console.log(inputs)
    await signup(inputs)
  }

  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
        <span className='text-2xl font-bold text-green-400 mb-3'>Ping</span>
        <div className='w-full p-6 rounded-lg shadow-2xl bg-gray-800 bg-clip-padding backdrop-filter backdrop-blur-lg'>
            <h1 className='text-xl font-semibold text-center text-gray-300 mb-2'>Create Account</h1>

            <form onSubmit={handleSubmit}>
                <div>
                    <label className='label p-2'>
                        <span className='text-base label-text'>Full Name</span>
                    </label>
                    <input type="text" placeholder='Enter Full Name' className='w-full input input-success h-10 bg-transparent'
                    value={inputs.fullName} onChange={(e) => setInputs({...inputs, fullName: e.target.value})}/>
                </div>
                
                <div>
                    <label className='label p-2'>
                        <span className='text-base label-text mt-1'>Username</span>
                    </label>
                    <input type="text" placeholder='Enter Username' className='w-full input input-success h-10 bg-transparent'
                    value={inputs.username} onChange={(e) => setInputs({...inputs, username: e.target.value})}/>
                </div>
                
                <div>
                    <label className='label p-2'>
                        <span className='text-base label-text mt-1'>Password</span>
                    </label>
                    <input type="password" placeholder='Enter Password' className='w-full input input-success h-10 bg-transparent'
                    value={inputs.password} onChange={(e) => setInputs({...inputs, password: e.target.value})}/>
                </div>
                
                <div>
                    <label className='label p-2'>
                        <span className='text-base label-text mt-1'>Confirm Password</span>
                    </label>
                    <input type="password" placeholder='Confirm Password' className='w-full input input-success h-10 bg-transparent mb-2'
                    value={inputs.confirmedPassword} onChange={(e) => setInputs({...inputs, confirmedPassword: e.target.value})}/>
                </div>

                <GenderCheckBox onCheckboxChange={handleCheckboxChange} selectedGender={inputs.gender}/>

                <Link to='/login' className='text-sm hover:underline hover:text-green-400 mt-2 inline-block'>Already have an account?</Link>

                <div>
                    <button className='btn btn-success btn-block btn-sm mt-5 text-gray-300 rounded-full' disabled={loading}>
                        {loading ? <span className='loading loading-spinner'></span> : 'Sign Up'}
                    </button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default SignUp;


//STARTER CODE FOR THIS FILE
// import React from 'react'
// import GenderCheckBox from './GenderCheckBox';

// const SignUp = () => {
//   return (
//     <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
//         <span className='text-2xl font-bold text-green-400 mb-3'>Ping</span>
//         <div className='w-full p-6 rounded-lg shadow-2xl bg-gray-800 bg-clip-padding backdrop-filter backdrop-blur-lg'>
//             <h1 className='text-xl font-semibold text-center text-gray-300 mb-2'>Create Account</h1>

//             <form action="">
//                 <div>
//                     <label className='label p-2'>
//                         <span className='text-base label-text'>Full Name</span>
//                     </label>
//                     <input type="text" placeholder='Enter Full Name' className='w-full input input-success h-10 bg-transparent'/>
//                 </div>
                
//                 <div>
//                     <label className='label p-2'>
//                         <span className='text-base label-text mt-1'>Username</span>
//                     </label>
//                     <input type="text" placeholder='Enter Username' className='w-full input input-success h-10 bg-transparent'/>
//                 </div>
                
//                 <div>
//                     <label className='label p-2'>
//                         <span className='text-base label-text mt-1'>Password</span>
//                     </label>
//                     <input type="password" placeholder='Enter Password' className='w-full input input-success h-10 bg-transparent'/>
//                 </div>
                
//                 <div>
//                     <label className='label p-2'>
//                         <span className='text-base label-text mt-1'>Confirm Password</span>
//                     </label>
//                     <input type="password" placeholder='Confirm Password' className='w-full input input-success h-10 bg-transparent mb-2'/>
//                 </div>

//                 <GenderCheckBox/>

//                 <a href="#" className='text-sm hover:underline hover:text-green-400 mt-2 inline-block'>Already have an account?</a>

//                 <div>
//                     <button className='btn btn-success btn-block btn-sm mt-5 text-gray-300'>Sign Up</button>
//                 </div>
//             </form>
//         </div>
//     </div>
//   )
// }

// export default SignUp;