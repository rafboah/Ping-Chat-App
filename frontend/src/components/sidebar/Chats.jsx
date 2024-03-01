import React from 'react'
import Chat from './Chat'
import useGetChats from '../../hooks/useGetChats'
import getRandomEmoji from '../../utils/emojis'

const Chats = () => {
  const {loading, chats} = useGetChats()
  console.log("Chats:", chats)

  return (
    <div className='py-2 flex h-96 flex-col overflow-auto'>
      {chats.map((chat, idx) => (
        <Chat
          key={chat._id}
          chat={chat}
          emoji={getRandomEmoji()}
          lastIdx={idx === chats.length - 1}
        />
      ))}
      {loading ? <span className='loading loading-spinner mxx-auto'></span> : null}
    </div>
  )
}

export default Chats


//STARTER CODE FOR THIS FILE
// import React from 'react'
// import Chat from './Chat'

// const Chats = () => {
//   return (
//     <div className='py-2 flex flex-col overflow-auto'>
//         <Chat/>
//         <Chat/>
//         <Chat/>
//         <Chat/>
//         <Chat/>
//         <Chat/>
//     </div>
//   )
// }

// export default Chats