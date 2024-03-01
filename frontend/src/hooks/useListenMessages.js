import { useEffect } from 'react'
import { useSocketContext } from '../context/SocketContext'
import useChat from '../zustand/useChat'
import notificationSound from "../assets/sounds/multi-pop-1-188165.mp3"

const useListenMessages = () => {
    const {socket} = useSocketContext()
    const {messages, setMessages} = useChat()

    useEffect(() => {
        socket?.on('newMessage', (newMessage) => {
            newMessage.shouldShake = true;
            const sound = new Audio(notificationSound)
            sound.play()
            setMessages([...messages, newMessage])
        })

        return () => socket?.off('newMessage')
    },[socket, setMessages, messages])
}

export default useListenMessages