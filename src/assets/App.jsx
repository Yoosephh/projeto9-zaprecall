import React from 'react'
import BodyComponents from './BodyComponents.jsx'
import Footer from './Footer.jsx'
import GlobalStyle from './globalstyle.js'

export default function App() {
const [counter, setCounter] = React.useState(0)
  return (
    <>
      <GlobalStyle />
      <BodyComponents setCounter={setCounter} counter={counter}/>
      <Footer counter={counter}/>
    </>
  )
}

