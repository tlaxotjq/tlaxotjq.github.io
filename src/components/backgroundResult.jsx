import styled from "styled-components";

const Container = styled.div`
  position: relative;
  width: 400px;
  height: 400px;
  background: #f0f0f0;
  overflow: hidden;
`;

const RandomImage = styled.img`
  position: absolute;
  top: ${props => props.$top}%;
  left: ${props => props.$left}%;
  transform: rotate(${props => props.$rotate}deg) scale(${props => props.$scale});
  width: ${props => props.$baseSize || 40}px;
  opacity: 0.9;
  pointer-events: none;
`;


function BackgroundResult(props) {

  return (
    <Container>
      {positions.map((p, i) => (
        <RandomImage
          key={i}
          src={src}
          $top={p.top}
          $left={p.left}
          $rotate={p.rotate}
          $scale={p.scale}
        />
      ))}
    </Container>
  );
}

export default BackgroundResult