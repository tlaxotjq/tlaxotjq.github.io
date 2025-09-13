import styled from "styled-components";
import { useUser } from "../context/userContext";
import React, { useContext, useState } from "react";
import { useChat } from "../context/chatContext";
import { db } from "../firebase";

const StyledDiv=styled.div`
  width: 108px;
  height: 32px;
  background-color: #FAFAFA;
  border: 2px #444444 solid;
  border-radius: 2px;
  font-weight: 700;
  color: #444444;
  font-size: 17px;
  line-height: 26px;
`
const StyledShadow=styled.div`
  position: relative;
  top: -16px;
  right: calc(-100% + 128px);
  width: 110px;
  height: 34px;
  border-radius: 2px;
  background-color: #444444;
  outline: 2px solid #444444;
  padding-right: 3px;
`

function TitleBox(props){
  return (
    <StyledShadow>
    <StyledDiv>
      {props.title}
    </StyledDiv>
    </StyledShadow>
  )
}

export default TitleBox