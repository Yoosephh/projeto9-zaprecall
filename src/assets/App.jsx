import React from 'react'
import BodyComponents from './BodyComponents.jsx'
import Footer from './Footer.jsx'
import GlobalStyle from './globalstyle.js'

export default function App() {
const [counter, setCounter] = React.useState(0)
const [status, setStatus] = React.useState([])
  return (
    <>
      <GlobalStyle />
      <BodyComponents setCounter={setCounter} counter={counter} setStatus={setStatus}/>
      <Footer counter={counter} status={status}/>
    </>
  )
}

