import { Link } from 'react-router'
import './chatList.css'

const ChatList = () => {
  return (
    <div className='chatList'>
       <span className='title'>DASHBOARD</span>
       <Link to="/dashboard"></Link>
       <Link to="/">Explore Jap IA</Link>
       <Link to="/">Contact</Link>
       <hr/>
       <span className='title'>RECENT CHATS</span>
       <div className="list">
       <Link to="/">ChatList</Link>
       <Link to="/">ChatList</Link>
       <Link to="/">ChatList</Link>
       <Link to="/">ChatList</Link>
       <Link to="/">ChatList</Link>
       <Link to="/">ChatList</Link>
       <Link to="/">ChatList</Link>
       <Link to="/">ChatList</Link>
       <Link to="/">ChatList</Link>    
       </div>
       <hr/>
       <div className="upgrade">
        <img src="/logo.png" alt="" />
        <div className="texts">
            <span>Upgrade to JAP IA pro</span>
            <span>Get unilimited acess to all features</span>
        </div>
       </div>
    </div>
  )
}

export default ChatList