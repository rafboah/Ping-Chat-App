import React from 'react'

const Login = () => {
  return (
      <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
        <span className='text-2xl font-bold text-green-400 mb-3'>Ping</span>
        <div className='w-full p-6 rounded-lg shadow-2xl bg-gray-800 bg-clip-padding backdrop-filter backdrop-blur-lg'>
            <h1 className='text-xl font-semibold text-center text-gray-300 mb-2'>Welcome Back</h1>

            <form action="">
                <div>
                    <label className='label p-2'>
                        <span className='text-base label-text'>Username</span>
                    </label>
                    <input type="text" placeholder='Enter Username' className='w-full input input-success h-10 bg-transparent'/>
                </div>

                <div>
                    <label className='label p-2'>
                        <span className='text-base label-text mt-1'>Password</span>
                    </label>
                    <input type="password" placeholder='Enter Password' className='w-full input input-success h-10 bg-transparent'/>
                </div>

                <a href="#" className='text-sm hover:underline hover:text-green-400 mt-2 inline-block'>{"Don't"} have an account?</a>

                <div>
                    <button className='btn btn-success btn-block btn-sm mt-5 text-gray-300 rounded-full'>Login</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Login

//STARTER CODE FOR THIS FILE
// import React from 'react'

// const Login = () => {
//   return (
//       <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
//         <span className='text-2xl font-bold text-green-400 mb-3'>Ping</span>
//         <div className='w-full p-6 rounded-lg shadow-2xl bg-gray-800 bg-clip-padding backdrop-filter backdrop-blur-lg'>
//             <h1 className='text-xl font-semibold text-center text-gray-300 mb-2'>Welcome Back</h1>

//             <form action="">
//                 <div>
//                     <label className='label p-2'>
//                         <span className='text-base label-text'>Username</span>
//                     </label>
//                     <input type="text" placeholder='Enter Username' className='w-full input input-success h-10 bg-transparent'/>
//                 </div>

//                 <div>
//                     <label className='label p-2'>
//                         <span className='text-base label-text mt-1'>Password</span>
//                     </label>
//                     <input type="password" placeholder='Enter Password' className='w-full input input-success h-10 bg-transparent'/>
//                 </div>

//                 <a href="#" className='text-sm hover:underline hover:text-green-400 mt-2 inline-block'>{"Don't"} have an account?</a>

//                 <div>
//                     <button className='btn btn-success btn-block btn-sm mt-5'>Login</button>
//                 </div>
//             </form>
//         </div>
//     </div>
//   )
// }

// export default Login