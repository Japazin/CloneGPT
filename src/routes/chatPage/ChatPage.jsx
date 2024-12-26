import { useRef } from "react";
import "./chatPage.css";
import { useEffect } from "react";
import NewPrompt from "../../components/newPrompt/NewPrompt";

const ChatPage = () => {
  const endRef = useRef(null);
  useEffect(() => {
    endRef.current.scrollIntoView({ behavior: "smooth" });
  }, []);
  return (
    <div className="chatPage">
      <div className="wrapper">
        <div className="chat">
          <div className="message">Test message from ia</div>
          <div className="message user">
            Test message from user Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Optio odit aspernatur quasi iure dolore molestiae
            quas? Labore, ad delectus dolorem consectetur odit iure nemo itaque,
            cupiditate voluptatibus libero iusto fugit!{" "}
          </div>
          <div className="message">Test nessage from ia</div>
          <div className="message user">Test message from user</div>
          <div className="message">Test message from ia</div>
          <div className="message user">Test message from user</div>
          <div className="message">Test nessage from ia</div>
          <div className="message user">Test message from user</div>
          <div className="message">Test message from ia</div>
          <div className="message user">Test message from user</div>
          <div className="message">Test nessage from ia</div>
          <div className="message user">Test message from user</div>
          <div className="message">Test message from ia</div>
          <div className="message user">Test message from user</div>
          <div className="message">Test nessage from ia</div>
          <div className="message user">Test message from user</div>
          <div className="message">Test message from ia</div>
          <div className="message user">Test message from user</div>
          <div className="message">Test nessage from ia</div>
          <NewPrompt />
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
