import { useContext, useEffect, useState } from "react"
import styled from "styled-components"
import CharactorResult from "../components/charactorResult"
import { useUser } from "../context/userContext"
const ToonBox = styled.div `
border: 4px #444444 solid;
width: 80%;
margin-left: 8px;
margin-right: 8px;
border-radius: 4px;
display: flex;
flex-direction: column;
padding: 8px 20px 0 20px;
overflow: hidden;
`
const RightBox = styled(ToonBox)`
align-items: end;
margin-left: auto;
`

const LeftBox = styled(ToonBox)`
align-items: start;
margin-right: auto;
`
const ChatBoxWrapper = styled.div`
  position: relative;
  display: inline-block;
  margin-bottom: 16px;

`

const ChatBox = styled.div`
  background: white;
  border: 2px solid #444;
  padding: 20px 40px;
  border-radius: 4px;
  font-size: 12px;

`

const Triangle = styled.div`
  position: absolute;
  bottom: -5px;
  left: ${props => props.isright ? "70%" : "30%" };
  width: 12px;
  height: 12px;
  background: white;
  border-radius: 1px;
  transform: rotate(-45deg);
  border-left: 2px solid #444444;
  border-bottom: 2px solid #444444;
  z-index: 1;
`
const BackContainer = styled.div`
  position: absolute;
  left: -40%;
  top: -40%;
  height: 200%; 
  width: 200%;
`
const StyledMain = styled.div`
  position: relative;
  left: 0;
  top: 0;
  display: flex;
  flex-direction: column;
`
const RandomImage = styled.img`
  top: ${props => props.$top}%;
  left: ${props => props.$left}%;
  transform: rotate(${props => props.$rotate}deg) scale(${props => props.$scale});
  width: ${props => props.$baseSize || 60}px;
  opacity: 0.9;
  pointer-events: none;
  position: absolute;
`;

const StyledBox = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
`

function ToonBoxItem(props){
  const {nowuser} = useUser();
  const {chat, isright} = props
if (!chat || !nowuser) return null; 
  const Content = (
    
    <StyledBox>
    {chat.backpatten ? 
        <BackContainer>
          {chat.backpatten.map((p, i) => (
          <RandomImage
            key={i}
            src={chat.backsrc}
            $top={p.top}
            $left={p.left}
            $rotate={p.rotate}
            $scale={p.scale}
            />))}
          </BackContainer> 
      : <></>}
      <StyledMain>
        <ChatBoxWrapper>
        <ChatBox>{chat.content}</ChatBox>
        <Triangle $isright={chat.user === nowuser.id} />
        </ChatBoxWrapper>
        <CharactorResult type={chat.type} />
      </StyledMain>
    </StyledBox>
  );


return (
<div>
{chat.user === nowuser.id ? (<RightBox>{Content}</RightBox>) : (<LeftBox>{Content}</LeftBox>)}
</div>)
}

export default ToonBoxItem