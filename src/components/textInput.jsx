import styled from "styled-components";
import { useUser } from "../context/userContext";
import React, { useContext, useState } from "react";
import { useChat } from "../context/chatContext";
import { db } from "../firebase";

const StyledDiv=styled.div`
position: absolute;
bottom: 0;
width: 375px;
height: 80px;
background-color: #ffffff;
border-top: #444444 solid 2px;
color: #333333;
display: flex;
justify-content: space-between;
align-items: center;
padding: 10px 20px;
box-sizing: border-box;
gap : 12px;

& > img{
height: 40px;
width: 40px;
border-radius: 20px;
border: 2px #444444 solid;
}

& > button{
height: 40px;
width: 40px;
border-radius: 20px;
background-color: var(--main-color);
color: #ffffff;
font-size: 20px;
font-weight: 700;
border: 2px #444444 solid;
}
`

const StyledTextarea=styled.input`
resize: none;
background-color: #f8f8f8;
height: 40px;
border-radius: 4px;
border: 2px #444444 solid;
width: 232px;
color: #222222;
`
function TextInput(props){
  const { setOnInput, onInput } = props
  const {userListData, nowuser, setUser} = useUser();
  const [value, setValue] =useState('')
  const handleChange = (e)=>{setValue(e.target.value)};
  const { nowChat, setChat } = useChat();

  const ChatEmotionCheck = (text) => {
    const types = [];
    let detectedSrc = '/Back_boom.svg';
      //표정분류
    if (/(\^\^|ㅋㅋ+|ㅎㅎ+)/.test(text)) {
      types.push("happy");
      detectedSrc = "/Back_boom.svg";
    }
    if (/(ㅠㅠ+|ㅜㅜ+)/.test(text)) {
      types.push("cry");
      detectedSrc = "/Back_water.svg";
    }
    //물음표 분류 !?!?+ / ????+ / ??+ / ? 
    if (/[!?]{2,}/.test(text)) {
      types.push("basic");
      detectedSrc = "/Back_question.svg";
    }else if (/[?]{4,}/.test(text)) {
      types.push("basic");
      detectedSrc = "/Back_question.svg";
    }else if(/[?]{2,3}/.test(text)){
      types.push("basic");
      detectedSrc = "/Back_question.svg";
    }else if(/(\?)/.test(text)){
      types.push("basic");
      detectedSrc = "/Back_question.svg";
    }
    //강도 분류
    // if (/[!?]{2,}/.test(text)) {
    //   types.push("basic");
    //   detectedSrc = "/Back_question.svg";   
    // }
    // 특정한 이모티콘 조합이 들어있는 경우 추가 분류
    if (/(❤️)/.test(text)) {
      types.push("happy");
      detectedSrc = "/Back_heart.svg";
    }
    return {
    types: types.length > 0 ? types : ["basic"],
    src: detectedSrc,
  }
  };
  function backPosition(rows, cols) {
    const positions = [];
    const cellWidth = 100 / cols;
    const cellHeight = 100 / rows;

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        positions.push({
          top: r * cellHeight + Math.random() * (cellHeight * 0.6),
          left: c * cellWidth + Math.random() * (cellWidth * 0.6),
          rotate: Math.random() * 360,
          scale: 0.1 + Math.random() * 2.9,
        });
      }
    }

    return positions;
  }

const positions = backPosition(4, 4); 


  //댓글을 firebase로 전송
  const sendMassage = ()=>{
    
    const { types, src: detectedSrc } = ChatEmotionCheck(value);
    const hasEmotion = ChatEmotionCheck(value);
    let timestamp = new Date().getTime().toString();

    // db.collection('chat').doc(`${timestamp}.${nowuser.id}`).set
    setChat({
      id: `${timestamp}.${nowuser?.id}`,
      user: nowuser.id,
      content: value,
      match: 2,
      type: hasEmotion.types,
      backpatten: positions,
      backsrc: hasEmotion.src,
    });
    setValue('');
    setOnInput(true);
  }


  //컴포넌트출력
  return (
    <StyledDiv>
      <button>?</button>
      <StyledTextarea type="text" value={value} onChange={handleChange}></StyledTextarea>
      <img src="./BasicUser.svg" onClick={sendMassage}></img>
    </StyledDiv>
  )
}

export default TextInput