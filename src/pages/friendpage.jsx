import styled from "styled-components";
import Display from "../layouts/display";
import Chatheader from "../layouts/chatheader";
import ToonBoxList from "../modules/toonboxList";
import TextInput from "../components/textInput";
import BackgroundResult from "../components/backgroundResult";
import { useState } from "react";
import TitleBox from "../components/titlebox";

const Styledlayer = styled.div`
top: 116px;
width: 100%;
display: flex;
flex-direction: column;
position: absolute;
`

const Header = styled.div`
height: 80px;
background-color: #FFCD71;
`

const FriendArea = styled.div`
margin-top: 44px;
height: 104px;

background-color: #FFF5E1;
`
const MemoryArea = styled.div`
margin-top: 52px;
height: 534px;

background-color: #FFF5E1;
`

const FriendContent = styled.div`
  
`

const MemoryContent = styled.div`
  
`

function Friendpage(props){
  return (
    <Display>
      <Header>
        
      </Header>
      <FriendArea>
        <TitleBox title="모든 친구들"></TitleBox>
        <FriendContent></FriendContent>
      </FriendArea>
      <MemoryArea>
        <TitleBox title="받은 대화함"></TitleBox>
        <MemoryContent></MemoryContent>
      </MemoryArea>
    </Display>
  )
}

export default Friendpage