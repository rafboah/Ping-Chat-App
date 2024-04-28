import SearchInput from './SearchInput'
import Chats from './Chats'
import LogoutButton from './LogoutButton'

const Sidebar = () => {
  return (
    <div className='h-full border-r border-gray-900 p-4 flex flex-col'>
        <SearchInput/>
        <div className='divider px-3'></div>
        <Chats/>
        <LogoutButton/>
    </div>
  )
}

export default Sidebar


//STARTER CODE FOR THIS FILE
// import React from 'react'
// import SearchInput from './SearchInput'
// import Chats from './Chats'
// import LogoutButton from './LogoutButton'

// const Sidebar = () => {
//   return (
//     <div className='border-r border-transparent p-4 flex flex-col'>
//         <SearchInput/>
//         <div className='divider px-3'></div>
//         <Chats/>
//         <LogoutButton/>
//     </div>
//   )
// }

// export default Sidebar