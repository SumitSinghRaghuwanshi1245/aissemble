import gptLogo from './images/chatgpt.svg';
import addBtn from './images/add-30.png';
import msgIcon from './images/message.svg';
import home from './images/home.svg';
import saved from './images/bookmark.svg';
import rocket from './images/rocket.svg';
import sendBtn from './images/send.svg';
import userIcon from './images/user-icon.jpg'
import gptImgLogo from './images/chatgptLogo.svg'
import { sendMsgToOpenAI } from "./openai"
import { useEffect, useRef, useState } from 'react';
import "./GPT.css";



function GPT() {
  const msgEnd = useRef(null);

  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
    text: "Hi, I am ChatGPT, How can I help you today?", 
    isBot: true,
  }
]);

useEffect(() => {
  msgEnd.current.scrollIntoView();
}, [messages])


const handleEnter = async(e) => {
  if(e.key === 'Enter') await handleSend();
}

const handleQuery = async (e) => {
  const text = e.target.value;
  
  setMessages([...messages, {text, isBot: false}]);
  const res = await sendMsgToOpenAI(input);
  setMessages([...messages, {text, isBot: false}, {text: res, isBot: true}]);
}



  const handleSend = async () => {
    const text = input;
    setInput("");
    setMessages([...messages, {text, isBot: false}]);
    const res = await sendMsgToOpenAI(input);
    setMessages([...messages, {text, isBot: false}, {text: res, isBot: true}]);
  }





  return (
    <div className="App">
     <div className="sideBar">
      <div className="upperSide">
        <div className="upperSideTop">
          <img src={gptLogo} alt="Logo" className='logo'/>
               <span className='brand'>ChatGPT</span>
               <button className="midBtn" onClick={() => {window.location.reload()}}><img src={addBtn} alt="new chat" className='addBtn'/>New Chat</button>
               <div className="upperSideBottom">
                <button className="query" onClick={handleQuery} value={"What is ChatGPT?"}><img src={msgIcon} alt="" />What is ChatGPT?</button>
                <button className="query" onClick={handleQuery} value={"how to use ChatGPT?"}><img src={msgIcon} alt="" />how to use ChatGPT?</button>
               </div>
        </div>
      </div>
      <div className="lowerSide">
          <div className="listItems"><img src={home} alt="Home" className="listItemsImg" />Home</div>
          <div className="listItems"><img src={saved} alt="Saved" className="listItemsImg" />Saved</div>
          <div className="listItems"><img src={rocket} alt="Upgrade" className="listItemsImg" />Upgrade to Pro</div>
      </div>
      </div>
      <div className="main">
<div className="chats">
  
  {messages.map((message, index) => (
     <div key={index} className={message.isBot? "chat bot" : "chat"}>
     <img src={message.isBot? gptImgLogo : userIcon} className='chatImg' alt="" /> <p className='txt'>{message.text}
 
     </p>
   </div>
  ))}
 
 <div ref={msgEnd} />

</div>
      <div className="chatFooter">
        <div className="inp">
          <input type="text" placeholder='Send a Msg' value={input} onKeyDown={handleEnter} onChange={(e) => setInput(e.target.value)} /> <button className="send" onClick={handleSend}><img src={sendBtn} alt="Send" /></button>
          
        </div>
        
      </div>
      <p> Hello ChatGPT is here to help you! </p>
     </div>
    </div>
  );
}

export default GPT;
