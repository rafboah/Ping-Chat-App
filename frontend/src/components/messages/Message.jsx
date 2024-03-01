import React from 'react'
import { useAuthContext } from '../../context/AuthContext'
import useChat from '../../zustand/useChat'
import getTime from '../../utils/getTime'

const Message = ({message}) => {
  const {authUser} = useAuthContext()
  const {selectedChat} = useChat()
  const fromMe = message.senderId === authUser._id
  const formattedTime = getTime(message.createdAt)
  const chatClassName = fromMe ? 'chat-end' : 'chat-start'
  const profilePic = fromMe ? authUser.profilePic : selectedChat?.profilePic
  const bubbleBgColor = fromMe ? 'bg-green-400' : 'bg-gray-500'
  const shakeClass = message.shouldShake ? 'shake' : ''

  return (
    <div className={`chat ${chatClassName}`}>
        <div className='chat-image avatar'>
            <div className='w-10 rounded-full'>
                <img src={profilePic} 
                alt="Chat bubble component" />
            </div>
        </div>
        <div className={`chat-bubble text-white ${bubbleBgColor} ${shakeClass}`}>{message.message}</div>
        <div className='chat-footer opacity-50 text-xs flex gap-1 items-center'>{formattedTime}</div>
    </div>
  )
}

export default Message




//STARTER CODE FOR THIS FILE
// import React from 'react'

// const Message = () => {
//   return (
//     <div className='chat chat-end'>
//         <div className='chat-image avatar'>
//             <div className='w-10 rounded-full'>
//                 <img src="https://cdn0.iconfinder.com/data/icons/communication-line-10/24/account_profile_user_contact_person_avatar_placeholder-512.png" 
//                 alt="Chat bubble component" />
//             </div>
//         </div>
//         <div className={`chat-bubble text-white bg-green-400`}>Hi! What's Up?</div>
//         <div className='chat-footer opacity-50 text-xs flex gap-1 items-center'>7:06</div>
//     </div>
//   )
// }

// export default Message