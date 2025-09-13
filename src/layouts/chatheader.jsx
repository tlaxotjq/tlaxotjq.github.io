import styled from "styled-components";

const StyledHeader = styled.div`
  width: 100%;
  height: 180px;
  background-color: #DEFDF9;

  & > img {
  width: 375px;
  height: 54px;
  }
`
const ChatTitle = styled.div`
  font-family: CookieRun-Regular;
  font-weight: 700;
  display: grid;

  & > h1 {
    grid-area: 1 / 1;
    font-family: CookieRun-Regular;
    font-size: 40px;
  }
`
const TitleShadow = styled.h1`
    margin-top: 2px;
    margin-left: 2px;
    color: #222222;
    text-shadow: 
    2px 2px 1px #222222,
    2px 0px 1px #222222,
    2px -1px 1px #222222,
    0px 2px 1px #222222,
    0px 0px 1px #222222, 
    0px -1px 1px #222222,
    -1px 1px 1px #222222,
    -1px 0px 1px #222222,
    -1px -1px 1px #222222;
` 
const TitleText = styled.h1`
    color: #FFF8D2;
` 
const BackButton = styled.button`
  width: 48px;
  height: 48px;
  margin-left: -4px;
  border-radius: 0 12px 12px 0;
  border: none;
  background-color: var(--main-color);
  display: flex;
  padding: 12px;
  align-items: center;

`
const StyledContents = styled.div`
  display: flex;
  gap: 8px;
`
function Chatheader(props) {

return(
  <StyledHeader>
    <img src="./StatusBar.svg"></img>
    <StyledContents>
      <BackButton><img src="./Triangle.svg"></img></BackButton>
      <ChatTitle>
        <TitleShadow>제목</TitleShadow>
        <TitleText>제목</TitleText>
      </ChatTitle>
    </StyledContents>
  </StyledHeader>
)
}

export default Chatheader