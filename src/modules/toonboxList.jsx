import styled from "styled-components"
import { db } from "../firebase"
import { useEffect, useState } from "react"
import ToonBoxItem from "./toonboxItem";
import InputToonBox from "../components/inputToonBox";
import { useChat } from "../context/chatContext";

const StyledDiv = styled.div`
  height: 600px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  overflow-y: scroll;
  overflow-x: hidden;
  position: relative;
  bottom: 0;
  margin: 0 20px;
  padding: 20px 0;
  border-radius: 8px;
  box-shadow: 0px 0px 8px 1px rgba(153, 153, 153, 30%);
  background-color: #ffffff;

  scrollbar-width: none;        
  -ms-overflow-style: none;  
  
  &:-webkit-scrollbar {
    display: none;
  }
`
function ToonBoxList(props){
  const {onInput, setOnInput} = props;
  const { nowChat } = useChat()
  const [ data, setData ] = useState([]);
  useEffect(()=>{
  const unsubscribe = db.collection("chat").onSnapshot((snapshot) => {
        const tempData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }));
        setData(tempData);
      });
    return () =>unsubscribe});
    
  const list = data.map((chat)=>{
    return <ToonBoxItem key={chat.id} chat={chat}></ToonBoxItem>
  })
  

      
  return (
  <StyledDiv>
    {list}
    <InputToonBox chat={nowChat} onInput={onInput} setOnInput={setOnInput}>
    </InputToonBox>
  </StyledDiv>
  )
}
export default ToonBoxList 