import React from 'react'
import { IoSearchSharp } from "react-icons/io5";

const SearchInput = () => {
  return (
    <form className='flex items-center gap-2'>
        <input type="text" placeholder='Search' className='input input-bordered input-success rounded-full bg-transparent'/>
        <button type='submit' className='btn btn-circle bg-green-400 text-gray-200 hover:btn-success'>
            <IoSearchSharp className='w-6 h-6 outline-none'/>
        </button>
    </form>
  )
}

export default SearchInput


//STARTER CODE FOR THIS FILE
//import React from 'react'
// import { IoSearchSharp } from "react-icons/io5";

// const SearchInput = () => {
//   return (
//     <form className='flex items-center gap-2'>
//         <input type="text" placeholder='Search' className='input input-bordered input-success rounded-full bg-transparent'/>
//         <button type='submit' className='btn btn-circle bg-green-400 text-gray-200 hover:btn-success'>
//             <IoSearchSharp className='w-6 h-6 outline-none'/>
//         </button>
//     </form>
//   )
// }

// export default SearchInput