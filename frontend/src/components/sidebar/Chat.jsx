import React from 'react'
import useChat from '../../zustand/useChat'
import { useSocketContext } from '../../context/SocketContext'

const Chat = ({chat, lastIdx, emoji}) => {
  const {selectedChat, setSelectedChat} = useChat()
  const isSelected = selectedChat?._id === chat._id
  const {onlineUsers} = useSocketContext()
  const isOnline = onlineUsers.includes(chat._id)

  return (
    <>
    <div className={`flex gap-2 items-center hover:bg-green-400 rounded p-2 py-1 cursor-pointer
        ${isSelected ? 'bg-green-500' : ''}
    `}
        onClick={() => setSelectedChat(chat)}
    >
        <div className={`avatar ${isOnline ? 'online' : ''}`}>
            <div className='w-12 rounded-full'>
                <img src={chat.profilePic} 
                alt="user avatar" />
            </div>
        </div>
        <div className='felx flex-col flex-1'>
            <div className='flex gap-3 justify-between'>
                <p className='font-bold text-gray-300'>{chat.fullName}</p>
                <span className='text-xl'>{emoji}</span>
            </div>
        </div>
    </div>
    {!lastIdx && <div className='divider my-0 py-0 h-1'/>}
    </>
  )
}

export default Chat


//STARTER CODE FOR THIS FILE
//import React from 'react'

// const Chat = () => {
//   return (
//     <>
//     <div className='flex gap-2 items-center hover:bg-green-400 rounded p-2 py-1 cursor-pointer'>
//         <div className='avatar online'>
//             <div className='w-12 rounded-full'>
//                 <img src='https://cdn0.iconfinder.com/data/icons/communication-line-10/24/account_profile_user_contact_person_avatar_placeholder-512.png' 
//                 alt="user avatar" />
//             </div>
//         </div>
//         <div className='felx flex-col flex-1'>
//             <div className='flex gap-3 justify-between'>
//                 <p className='font-bold text-gray-300'>John Doe</p>
//                 <span className='text-xl'>🥳</span>
//             </div>
//         </div>
//     </div>
//     <div className='divider my-0 py-0 h-1'/>
//     </>
//   )
// }

// export default Chat