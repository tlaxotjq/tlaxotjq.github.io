import styled from "styled-components";
const StyledDiv = styled.div`
  position: relative;
  width: 375px;
  height: 812px;
  border-radius: 40px;
  background-color: #f8f8f8;
  box-shadow: 0px 0px 8px 2px #aaaaaa;
  overflow: hidden;
`
function Display({children}){

  return (
    <StyledDiv>
      {children}
    </StyledDiv>
  );
}

export default Display