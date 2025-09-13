import styled from "styled-components";
import Chatpage from "../pages/chatpage"
import { useUser } from '../context/userContext'
import { Routes, Route, Link } from 'react-router-dom'
import Friendpage from "../pages/friendpage";

const StyledDiv=styled.div`
display: flex;
gap : 40px;
align-items: center;
justify-content: center;
height: 100vh;
`
function Contents(props) {
  const {userListData, nowuser, setUser} = useUser();
  const list = userListData.map((item) => (
      <li key={item.id} onClick={()=>{setUser(item)}}>
      {item.name}</li>
    ))
return(
  <StyledDiv>
    <ul>
      <p>현재 유저 : {nowuser?.name}</p>
      {list}
    </ul>
      <Routes>
        <Route index element={<Friendpage></Friendpage>} />

      </Routes>

  </StyledDiv>
)
}

export default Contents