import styled from "styled-components";
import Display from "../layouts/display";
import Chatheader from "../layouts/chatheader";
import ToonBoxList from "../modules/toonboxList";
import TextInput from "../components/textInput";
import BackgroundResult from "../components/backgroundResult";
import { useState } from "react";

const Styledlayer = styled.div`
top: 116px;
width: 100%;
display: flex;
flex-direction: column;
position: absolute;
`

function Chatpage(props){
  const [ onInput, setOnInput] = useState(false);
  return (
    <Display>
      <Chatheader></Chatheader>
      <Styledlayer>
        <ToonBoxList setOnInput={setOnInput} onInput={onInput}></ToonBoxList>
      </Styledlayer>
      <TextInput setOnInput={setOnInput} onInput={onInput}></TextInput>
    </Display>
  )
}

export default Chatpage