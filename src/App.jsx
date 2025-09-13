
import './App.css'
import { BrowserRouter } from "react-router-dom";
import styled from 'styled-components'
import Contents from './layouts/contents'
import AllProvider from './context/AllProvider'

function App() {

  return (
        <BrowserRouter>
          <AllProvider>
            <Contents></Contents>
          </AllProvider>      
        </BrowserRouter>
  )
}

export default App
