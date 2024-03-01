import React, { useEffect, useRef } from 'react'
import Message from './Message'
import useGetMessages from '../../hooks/useGetMessages'
import MessageSkeleton from '../skeletons/MessageSkeleton';
import useListenMessages from '../../hooks/useListenMessages';

const Messages = () => {
  const {messages, loading} = useGetMessages();
  useListenMessages()
  const lastMessageRef = useRef()
  useEffect(() => {
    setTimeout(() => {lastMessageRef.current?.scrollIntoView({behavior: 'smooth'})},100)
  },[messages])

  return (
    <div className='px-4 flex-1 h-96 overflow-auto'>
      {!loading && messages.length > 0 && messages.map((message) => (
        <div key={message._id} ref={lastMessageRef}>
          <Message message={message}/>
        </div>
      ))}

      {loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx}/>)}
      {!loading && messages.length === 0 && (
        <p className='text-center'>Start <span className='text-green-400'>Pinging</span></p>
      )}
    </div>
  )
}

export default Messages



//STARTER CODE FOR THIS FILE
// import React from 'react'
// import Message from './Message'

// const Messages = () => {
//   return (
//     <div className='px-4 flex-1 h-96 overflow-auto'>
//         <Message/>
//         <Message/>
//         <Message/>
//         <Message/>
//         <Message/>
//         <Message/>
//         <Message/>
//         <Message/>
//         <Message/>
//         <Message/>
//         <Message/>
//         <Message/>
//     </div>
//   )
// }

// export default Messages