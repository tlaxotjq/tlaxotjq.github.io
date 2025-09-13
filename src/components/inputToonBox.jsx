import styled from "styled-components";
import ToonBoxItem from "../modules/toonboxItem";
import { useChat } from "../context/chatContext";
import CharactorResult from "../components/charactorResult"
import { useState, useRef, useEffect } from "react";
const StyledInput = styled.div`
`
const ToonBox = styled.div`
border: 4px #444444 solid;
width: 80%;
margin-left: 8px;
margin-right: 8px;
border-radius: 4px;
display: flex;
flex-direction: column;
padding: 8px 20px 0 20px;
overflow: hidden;
align-items: end;
margin-left: auto;
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
  left:  "70%"};
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
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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

const CornerHandle = styled.div`
  width: 32px;
  height: 32px;
  border: solid 4px #444444;
  background: #FF9F05;
  position: absolute;
  cursor: pointer;
  border-radius: 50%;
  transform: translate(-50%, -50%);
`
const ObjectBox = styled.div`
  height: 320px;
  position: relative;
`
const LineConnector = styled.div`
  position: absolute;  // 또는 원하는 색
  outline: 1px #444444 solid;
  transform-origin: left center;
  overflow: hidden;
`
const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;
function InputToonBox(props) {
  const { onInput, setOnInput } = props;
  const { nowChat, setChat } = useChat();
  const [containerRect, setContainerRect] = useState(null);
  const objectBoxRef = useRef();
  const dragContextRef = useRef(null);

  useEffect(() => {
    if (objectBoxRef.current) {
      setContainerRect(objectBoxRef.current.getBoundingClientRect());
    }
  }, [onInput])


  if (!nowChat) return null;

  const Content = (
    <StyledBox>
      {nowChat.backpatten ?
        <BackContainer>
          {nowChat.backpatten.map((p, i) => (
            <RandomImage
              key={i}
              src={nowChat.backsrc}
              $top={p.top}
              $left={p.left}
              $rotate={p.rotate}
              $scale={p.scale}
            />))}
        </BackContainer>
        : <></>}
      <StyledMain>
        <ChatBox>{nowChat.content}</ChatBox>
        <Triangle />
        <CharactorResult type={nowChat.type} />
      </StyledMain>
    </StyledBox>
  );

  const [corners, setCorners] = useState({
    topLeft: { x: 17, y: 20 },
    topRight: { x: 98, y: 20 },
    bottomLeft: { x: 17, y: 80 },
    bottomRight: { x: 98, y: 80 },
  });
  const cornerRef = useRef(corners);
  const frameRef = useRef(null);
  const cornerLimits = {
    topLeft: { xMin: 2, xMax: 50, yMin: 0, yMax: 40 },
    topRight: { xMin: 70, xMax: 98, yMin: 0, yMax: 40 },
    bottomRight: { xMin: 70, xMax: 98, yMin: 60, yMax: 100 },
    bottomLeft: { xMin: 2, xMax: 50, yMin: 60, yMax: 100 },
  };
  const clamp = (val, min, max) => Math.min(Math.max(val, min), max);

  const handleSaveCorners = () => {
    setChat({
      ...nowChat,
      corners,
    });

  };
  useEffect(() => {
    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);
  const getLineStyle = (start, end, containerRect) => {
    const sx = (start.x / 100) * containerRect.width;
    const sy = (start.y / 100) * containerRect.height;
    const ex = (end.x / 100) * containerRect.width;
    const ey = (end.y / 100) * containerRect.height;

    const dx = ex - sx;
    const dy = ey - sy;

    const length = Math.sqrt(dx * dx + dy * dy);
    const angle = Math.atan2(dy, dx) * (180 / Math.PI);

    return {
      position: 'absolute',
      left: `${sx}px`,
      top: `${sy}px`,
      width: `${length}px`,
      height: '2px',
      backgroundColor: '#000',
      transform: `rotate(${angle}deg) translateY(-50%)`,
      transformOrigin: '0 0',
    };
  };

  return (
    <>
      {onInput &&
        <StyledInput onClick={(e) => handleSaveCorners(e)}>
          <Wrapper ref={objectBoxRef}>
          <ObjectBox ref={objectBoxRef} style={{
            clipPath: `polygon(
              ${corners.topLeft.x}% ${corners.topLeft.y}%,
              ${corners.topRight.x}% ${corners.topRight.y}%,
              ${corners.bottomRight.x}% ${corners.bottomRight.y}%,
              ${corners.bottomLeft.x}% ${corners.bottomLeft.y}%
            )` }}>
            {Content}
            </ObjectBox>
            {/* 안쪽 내용 */}
            {containerRect && (
              <>
                <LineConnector style={getLineStyle(corners.topLeft, corners.topRight, containerRect)} />
                <LineConnector style={getLineStyle(corners.topRight, corners.bottomRight, containerRect)} />
                <LineConnector style={getLineStyle(corners.bottomRight, corners.bottomLeft, containerRect)} />
                <LineConnector style={getLineStyle(corners.bottomLeft, corners.topLeft, containerRect)} />
              </>
            )}
            {containerRect && Object.entries(corners).map(([key, pos]) => {
              const topPx = (pos.y / 100) * containerRect.height;
              const leftPx = (pos.x / 100) * containerRect.width;
              return (
                <CornerHandle
                  key={key}
                  style={{
                    top: `${topPx}px`,
                    left: `${leftPx}px`,
                  }}
                  onMouseDown={(e) => {
                    e.preventDefault();

                    const container = objectBoxRef.current;
                    if (!container) return;

                    // 드래그 기준 rect 고정
                    const boundingRect = container.getBoundingClientRect();
                    dragContextRef.current = {
                      boundingRect,
                      cornerKey: key
                    };

                    const handleMouseMove = (e) => {
                      const { boundingRect, cornerKey } = dragContextRef.current;
                      const rawX = ((e.clientX - boundingRect.left) / boundingRect.width) * 100;
                      const rawY = ((e.clientY - boundingRect.top) / boundingRect.height) * 100;

                      const limits = cornerLimits[cornerKey];
                      const newX = clamp(rawX, limits.xMin, limits.xMax);
                      const newY = clamp(rawY, limits.yMin, limits.yMax);

                      cornerRef.current = {
                        ...cornerRef.current,
                        [cornerKey]: { x: newX, y: newY }
                      };

                      if (!frameRef.current) {
                        frameRef.current = requestAnimationFrame(() => {
                          setCorners({ ...cornerRef.current });
                          frameRef.current = null;
                        });
                      }
                    };

                    const handleMouseUp = () => {
                      window.removeEventListener("mousemove", handleMouseMove);
                      window.removeEventListener("mouseup", handleMouseUp);
                    };

                    window.addEventListener("mousemove", handleMouseMove);
                    window.addEventListener("mouseup", handleMouseUp);
                  }}></CornerHandle>
              )
            })}

        </Wrapper>
        </StyledInput>
      }
    </>
  )
}

export default InputToonBox