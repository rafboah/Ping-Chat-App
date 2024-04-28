import Sidebar from '../../components/sidebar/Sidebar'
import MessageContainer from '../../components/messages/MessageContainer'

const Home = () => {
  return (
    <div className='flex h-screen rounded-lg overflow-hidden bg-clip-padding backdrop-filter bg-gray-800 backdrop-blur-lg'>
        <Sidebar/>
        <MessageContainer/>
    </div>
  )
}

export default Home