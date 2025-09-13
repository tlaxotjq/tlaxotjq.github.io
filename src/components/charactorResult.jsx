import styled from "styled-components";

const StyledResult = styled.svg`
  position: relative; 
`
const StyledEmotion = styled.image`
  position: absolute;
  z-index: 2;
  x: 28%;
  y: 0%
`
const StyledFace = styled.image`
  position: absolute;
  z-index: 1;
  x: 32%;
  y: 10%;
`
const StyledBody = styled.image`
  position: absolute;
  z-index: 1;
  x: 10%;
  y: 18%;
`
const StyledHand = styled.image`
  position: absolute;
  z-index: 2;
  y: 41%;
`

function CharactorResult(props){
  const { type } = props
  return (
    <div>
    <StyledResult viewBox="0 0 200 200" width="120" height="120"> 

      <StyledEmotion href={`/test_emotion_${type || "basic"}.svg`} />
      <StyledBody href={`/test_body.svg`} />
      <StyledHand href={`/test_hand.svg`} />
    </StyledResult></div>
  );
};

export default CharactorResult