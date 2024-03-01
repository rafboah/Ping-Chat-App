import React, { useState } from 'react'
import {BsSend} from "react-icons/bs"
import useSendMessage from '../../hooks/useSendMessage'

const MessageInput = () => {
  const [message, setMessage] = useState('')
  const {loading, sendMessage} = useSendMessage()

  const handleSubmit = async (e) => {
    e.preventDefault()
    if(!message)
      return

    await sendMessage(message)
    setMessage('')
  }

  return (
    <form className='px-4 my-3' onSubmit={handleSubmit}>
        <div className='w-full relative'>
            <input type="text" 
            className='border border-gray-500 text-sm rounded-lg block w-full p-2.5 bg-transparent text-gray-300'
            placeholder='Message' value={message} onChange={(e) => setMessage(e.target.value)}
            />
            <button type='submit' className='absolute inset-y-0 end-0 flex items-center pe-3'>
                {loading ? <div className='loading loading-spinner'></div> : <BsSend/>}
            </button>
        </div>
    </form>
  )
}

export default MessageInput



//STARTER CODE FOR THIS FILE
// import React from 'react'
// import {BsSend} from "react-icons/bs"

// const MessageInput = () => {
//   return (
//     <form className='px-4 my-3'>
//         <div className='w-full relative'>
//             <input type="text" 
//             className='border border-gray-500 text-sm rounded-lg block w-full p-2.5 bg-transparent text-gray-300'
//             placeholder='Message'/>
//             <button type='submit' className='absolute inset-y-0 end-0 flex items-center pe-3'>
//                 <BsSend/>
//             </button>
//         </div>
//     </form>
//   )
// }

// export default MessageInput