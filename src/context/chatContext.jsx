import { createContext, useContext, useState, useEffect } from 'react';
import {db} from '/src/firebase.js'

const ChatContext = createContext();
export const useChat = () => useContext(ChatContext);

//챗데이터 제공자 추후에 주석 수정
// (상단)import { useUser } from "../context/UserContext";  
//현재사용자 구별을 위한 {nowuser} useState선언
//userList첫번째 항목을 기본값으로 설정, {setUser()}을 사용해 상태(현재사용자)변경
//사용 원할시 (컴포넌트내부)const {nowuser, setUser} = useUser(); 추가 
const ChatProvider = ({ children }) => {


  const [nowChat, setChat] = useState([]);

  return (
    <ChatContext.Provider value={{ nowChat, setChat }}>
      {children}
    </ChatContext.Provider>
  );
};

export default ChatProvider